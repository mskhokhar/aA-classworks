class ArtworkShare < ApplicationRecord

  validations :artwork_id, :viewer_id, presence: true
  validations :artwork_id, uniqueness: {
    scope: :viewer_id, 
    message: "A user cannot have a single Artwork shared with them more than once"
  }

  belongs_to :artwork,
    foreign_key: :artwork_id,
    class_name: 'Artwork'

  belongs_to :viewer,
end
