class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :likeable_id
      t.string :likeable_type
      t.timestamps
    end

    add_index :likes, [:likeable_type, :likeable_id]
  end
end
