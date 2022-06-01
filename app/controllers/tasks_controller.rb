class TasksController < ApplicationController

  def index
    render json: Task.all, includes: :project
  end

  def update
    task = Task.find_by(id: params[:id])
    task.update(task_params)
    render json: task
  end

  def destroy
    task = Task.find_by(id: params[:id])
    task.destroy
    head :no_content
  end
  private

  def task_params
    params.permit(:title, :summary, :priority, :status, :column, :project_id, :user_id)
  end
end
