class Sub < ApplicationRecord
  validates :title, :description, :user_id, presence: true

  belongs_to :user
  has_many :posts
  has_many :subposts, dependent: :destroy
  has_many :posts, 
    through: :subposts,
    source: :post
end
