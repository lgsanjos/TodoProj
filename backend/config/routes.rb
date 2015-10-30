Rails.application.routes.draw do

  post 'authentication/login', :controller => :authentication, :action => :login

  # example
  #   get 'products/:id' => 'catalog#view'
end
