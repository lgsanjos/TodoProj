Rails.application.routes.draw do

  post 'authentication/login', :controller => :authentication, :action => :login
  post 'authentication/signup', :controller => :authentication, :action => :signup

  get 'tasks/todolist_given_user_id/:id', :controller => :task, :action => :todolist_given_user_id
  get 'tasks/given_todo_list_id/:id', :controller => :task, :action => :tasks_given_todo_list_id

  put  'tasks/toggle', :controller => :task, :action => :toggle_task

  post 'tasks/add', :controller => :task, :action => :add_new_task
  post 'todolist/add', :controller => :task, :action => :add_new_todolist


  # example
  #   get 'products/:id' => 'catalog#view'
end
