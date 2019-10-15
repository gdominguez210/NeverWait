# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string
#  lname           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence: :true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :favorites

    # has_many :favorited_restaurants,
    # through: :favorites,
    # source: :Restaurant

    has_many :reservations
    has_many :reviews
    has_many :restaurants,
    foreign_key: :owner_id,
    class_name: :Restaurant

    def self.find_by_credentials(username, password)

        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)

        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bpw = BCrypt::Password.new(self.password_digest);
        bpw.is_password?(password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end 
end
