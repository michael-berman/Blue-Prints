class RemovebodyFromprojects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :body
  end
end
