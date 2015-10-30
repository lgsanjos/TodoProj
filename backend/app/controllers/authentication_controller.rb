class AuthenticationController < ApplicationController

  def login

    user = { :id => 1, :username => 'name'}

   render json: user
  end

end
