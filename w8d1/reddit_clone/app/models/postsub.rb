class Postsub < ApplicationRecord
  validations :sub_id, uniqueness: { scope: :post_id }
  belongs_to :post
  belongs_to :sub
end
