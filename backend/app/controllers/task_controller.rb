class TaskController < ApplicationController

  def todolist_given_user_id
    list = TodoList.where(:user_id => params[:id])
    render json: list 
  end

end
