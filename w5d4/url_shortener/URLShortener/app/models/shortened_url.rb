class ShortenedUrl < ApplicationRecord
  validates :shortened_url, uniqueness: true
  validates :long_url, presence: true
  validates :user_id, presence: true
end