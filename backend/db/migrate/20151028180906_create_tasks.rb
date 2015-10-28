class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.boolean :checked, default: false
      t.string :description, null: false, size: 150
      t.references TodoList

      t.timestamps null: false
    end
  end
end
