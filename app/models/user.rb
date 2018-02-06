# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string
#  password_digest    :string
#  session_token      :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  email              :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, :email_format => {:message => 'is an invalid email'}
  validates :password, length: { minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_attached_file :image, styles: { avatar: '100x100#'},
    default_style: :avatar,
    default_url: '/images/default_profile_pic.png'

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :projects,
    class_name: 'Project',
    foreign_key: :author_id

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :author_id

  has_many :favorites,
    class_name: 'Favorite',
    foreign_key: :author_id

  attr_reader :password
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil unless user

    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private
  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end



end
