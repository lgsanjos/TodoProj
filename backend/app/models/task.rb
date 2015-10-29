class Task < ActiveRecord::Base

  belongs_to :todo_list

  validates :description, presence: { message: 'must be set.' }
  validates :todo_list, presence: { message: 'must be assigned.' }

end
