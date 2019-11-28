class User < ApplicationRecord


    validates :email, :session_token, uniqueness: true, presence: true
    validates :password_digest, presence: {message: 'Password field cannot be blank'}
    validates :password, length: {minimum: 6, allow_nil: true}

    before_validation :ensure_session_token
    attr_reader :password

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
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
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
