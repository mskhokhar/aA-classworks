class Artwork < ApplicationRecord
  validates :img_url,:title, :artist_id, presence: true
  validates :artist_id, uniqueness: {
    scope: :title, message: "Artist can not repeat titles."
  }

  add_index :artwork, :artist_id

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'User'

  has_many :shared_viewers,
    foreign_key: :artwork_id,
    class_name: 'ArtworkShare'

  
end
