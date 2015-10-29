class User < ActiveRecord::Base

  has_one :todo_list

end
