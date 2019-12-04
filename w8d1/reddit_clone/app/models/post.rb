class Post < ApplicationRecord
  validates :title, :sub_id, :user_id, presence: true
  
  belongs_to :user
  belongs_to :sub
  has_many :subposts, dependent: :destroy
  has_many :subs, 
    through: :subposts,
    source: :sub
end
