class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :author_id
      t.integer :project_id
      t.timestamps
    end
    add_index :favorites, :author_id
    add_index :favorites, :project_id
  end
end
