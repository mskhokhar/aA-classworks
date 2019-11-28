require 'sqlite3'
require 'singleton'


class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Users
  def self.find_by_id(id)
    users = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM 
        users
      WHERE 
        id = ?
    SQL
    return nil unless users.length > 0

    Users.new(users.first)
  end

  def self.find_by_name(fname, lname)
    users = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT 
        *
      FROM 
        users
      WHERE 
        fname = ? AND lname = ?
    SQL
    return nil unless users.length > 0
    Users.new(users.first)
  end

  attr_accessor :fname, :lname
  attr_reader :id
  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def create
    raise "#{self} already in database" if @id
    QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname)
      INSERT INTO
        users (fname, lname)
      VALUES
        (?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname, @id)
      UPDATE
        users
      SET
        fname = ?, lname = ?
      WHERE
        id = ?
    SQL
  end

  def authored_questions
    raise "#{self} not in database" unless @id
    questions = Questions.find_by_id(@id)
    return nil unless questions.length > 0
    questions.map { |quest| Questions.new(quest) }
  end

   def authored_replies
    raise "#{self} not in database" unless @id
    replies = Replies.find_by_id(@id)
    return nil unless replies.length > 0
    replies.map { |quest| Replies.new(quest) }
  end

end

class Questions
  def self.find_by_id(id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM 
        questions
      WHERE 
        id = ?
    SQL
    return nil unless questions.length > 0

    Questions.new(questions.first)
  end

  def self.find_by_user(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT 
        *
      FROM 
        questions
      WHERE 
        user_id = ?
    SQL
    return nil unless questions.length > 0

    Questions.new(questions.first)
  end

  attr_accessor :title, :body, :user_id
  attr_reader :id
  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @user_id = options['user_id']
  end

  def author
    raise "#{self} not in database" unless @id
    user = Users.find_by_id(@user_id)
    return nil unless user.length > 0
    User.new(user.first)
  end

  def replies
    raise "#{self} not in database" unless @id
    reply = Replies.find_by_question(@id)
    return nil unless reply.length > 0
    Replies.new(reply.first)
  end
end 

class QuestionFollows
  def self.find_by_id(id)
    question_follows = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM 
        question_follows
      WHERE 
        id = ?
    SQL
    return nil unless question_follows.length > 0

    QuestionFollows.new(question_follows.first)
  end
  attr_accessor :user_id, :questions_id
  attr_reader :id
  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end

end

class Replies

  def self.find_by_id(id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM 
        replies
      WHERE 
        id = ?
    SQL
    return nil unless replies.length > 0

    Replies.new(replies.first)
  end

    def self.find_by_user(user_id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT 
        *
      FROM 
        replies
      WHERE 
        user_id = ?
    SQL
    return nil unless replies.length > 0

    Replies.new(replies.first)
  end

    def self.find_by_question(question_id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT 
        *
      FROM 
        replies
      WHERE 
        question_id = ?
    SQL
    return nil unless replies.length > 0

    Replies.new(replies.first)
  end

  attr_accessor :question_id, :user_id, :parent_id, :body
  attr_reader :id
  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
    @parent_id = options['parent_id']
    @body = options['body']
  end

  def author
    raise "#{self} not in database" unless @id
    user = Users.find_by_id(@user_id)
    return nil unless user.length > 0
    User.new(user.first)
  end

  def question
    raise "#{self} not in database" unless @id
    question = Questions.find_by_id(@question_id)
    return nil unless question.length > 0
    Questions.new(question)
  end

  def parent_reply
    raise "#{self} not in database" unless @id
    reply = Replies.find_by_id(@parent_id)
    return nil unless reply.length > 0
    Replies.new(reply.first)
  end

  def child_replies
    raise "#{self} not in database" unless @id
    reply = Replies.find_by_id(@id)
    return nil unless reply.length > 0
    reply.map { |rep| Replies.new(rep) }
  end
end 

class QuestionLikes
  def self.find_by_id(id)
    question_likes = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT 
        *
      FROM 
        question_likes
      WHERE 
        id = ?
    SQL
    return nil unless question_likes.length > 0

    QuestionLikes.new(question_likes.first)
  end

  attr_accessor :user_id, :question_id, :liked
  attr_reader :id
  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
    @liked = options['liked']
  end

end

