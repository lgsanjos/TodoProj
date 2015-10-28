class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :nome, null: false, size: 10
      t.string :password, null: false, size: 8

      t.timestamps null: false
    end
  end
end
