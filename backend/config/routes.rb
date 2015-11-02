Rails.application.routes.draw do

  post 'authentication/login', :controller => :authentication, :action => :login
  get 'tasks/todolist_given_user_id/:id', :controller => :task, :action => :todolist_given_user_id

  # example
  #   get 'products/:id' => 'catalog#view'
end
