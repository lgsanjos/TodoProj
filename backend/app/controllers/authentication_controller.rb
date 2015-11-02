class AuthenticationController < ApplicationController

  def login
    username = params[:username]
    pass = params[:password]

    user = User.where(:name => username, :password => pass).first

    if user.nil?
      render :text => 'Failed to login', :status => :unauthorized
    else
      render json: user
    end

  end

end
