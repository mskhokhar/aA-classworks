class User < ApplicationRecord
  validates :username, :session_token, uniqueness: true, presence: true
  validates :remaining_cheers, presence: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  has_many :objectives,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Objective

  has_many :cheers,
    foreign_key: :author_id,
    class_name: :Cheer

  has_many :cheers_through_objectives,
    through: :objectives,
    source: :cheers

  has_many :cheered_objectives,
    through: :cheers,
    source: :objective

end
