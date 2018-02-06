class RemoveIndexfromFavorites < ActiveRecord::Migration[5.1]
  def change
    remove_index :favorites, name: "index_favorites_on_author_id_and_author_id", unique: true
    add_index :favorites, [:author_id, :project_id], unique: true
  end
end
