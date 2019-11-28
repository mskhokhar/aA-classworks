class Comment < ApplicationRecord
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  
  belongs_to :artwork,
    foreign_key: :artwork_id,
    class_name: :Artwork

  #for likes
  has_many :likes, as: :likeable

end
