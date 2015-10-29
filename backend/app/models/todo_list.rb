class TodoList < ActiveRecord::Base

  belongs_to :user

  validates :name, presence: { message: 'must be set.' }
  validates :description, presence: { message: 'must be set.' }
  validates :user, presence: { message: 'must be set.' }

  def owner
    user
  end

end
