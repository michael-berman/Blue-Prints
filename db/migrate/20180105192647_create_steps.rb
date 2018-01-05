class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title
      t.text :body
      t.integer :project_id
      t.timestamps
    end
  end
end
