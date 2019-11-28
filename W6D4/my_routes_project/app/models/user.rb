class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true

  #for viewers
  has_many :artwork_shares,
    foreign_key: :viewer_id,
    class_name: 'ArtworkShare',
    dependent: :destroy

  has_many :shared_artworks,
    through: :artwork_shares,
    source: :artwork

  #for artist
  has_many :artworks,
    foreign_key: :artist_id,
    class_name: 'Artwork',
    dependent: :destroy

  #for comments
  has_many :artwork_comments,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy

  #for likes
  has_many :likes,
    foreign_key: :liker_id,
    class_name: 'Like'
end
