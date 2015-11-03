class TaskController < ApplicationController

  def todolist_given_user_id
    list = TodoList.where(:user_id => params[:id])
    render json: list 
  end

  def tasks_given_todo_list_id
    todoList = TodoList.where(:id => params[:id]).first
    tasks = Task.where(:todo_list_id => params[:id])

    responseObject = Struct.new(:name, :id, :description, :tasks, :owner_id)
    resp = responseObject.new
    resp.name = todoList.name
    resp.id = todoList.id
    resp.description = todoList.description
    resp.owner_id = todoList.owner.id
    resp.tasks = tasks
    
    render json: resp
  end

  def add_new_task
    t = Task.new(:checked => false,
                :todo_list_id => params[:todo_list_id],
                :description => params[:task])

    t.save!
    render :nothing => true, :status => 200
  end

  def add_new_todolist
    t = TodoList.new(
                :user_id => params[:owner_id],
                :name => params[:name],
                :public => params[:isPublic],
                :description => params[:description])

    if t.save
      render :nothing => true, :status => 200
    else
      t.valid?
      render :text => t.errors
    end
  end

  def toggle_task
    task =  Task.where(:id => params[:id]).first

    if task.nil?
      render :text => 'Task not found'
      return
    end

    task.checked = !task.checked
    task.save

    render :nothing => true, :status => 200
  end

end
