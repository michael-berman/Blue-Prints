class AddUniqueIndexToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_index :favorites, [:author_id, :author_id], unique: true
  end
end
