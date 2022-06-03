class TasksController < ApplicationController

  def index
    render json: Task.all, includes: :project
  end

  def create
    task = Task.create!(task_params)
    
    render json: task, status: :created

  end

  def update
    task = Task.find_by(id: params[:id])
    task.update(task_params)
    render json: task
  end

  def destroy
    task = Task.find_by(id: params[:id])
    task.destroy
    render json: {}
  end
  private

  def task_params
    params.permit(:title, :summary, :priority, :status, :project_id, :user_id)
  end
end
