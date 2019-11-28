class Artwork < ApplicationRecord
  validates :img_url,:title, :artist_id, presence: true
  validates :artist_id, uniqueness: {
    scope: :title, message: "Artist can not repeat titles."
  }

  

  #for viewers
  has_many :artwork_shares,
    foreign_key: :artwork_id,
    class_name: 'ArtworkShare'

  has_many :shared_viewers,
    through: :artwork_shares,
    source: :viewer
  
  #for artist
  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'User'
  
  #for comments
  has_many :comments,
    foreign_key: :artwork_id,
    class_name: :Comment,
    dependent: :destroy

  #for likes
  has_many :likes,
    as: :likeable
    
end
