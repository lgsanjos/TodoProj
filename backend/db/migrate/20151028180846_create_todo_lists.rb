class CreateTodoLists < ActiveRecord::Migration
  def change
    create_table :todo_lists do |t|
      t.references User
      t.string :name, size: 15
      t.string :description, size: 100

      t.timestamps null: false
    end
  end
end
