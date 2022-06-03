class ProjectsController < ApplicationController

    def index
        render json: Project.where(user_id: session[:user_id])
      end
    
      def create
        project = Project.create!(project_params)
        render json: project, status: :created
    
      end
    
      def update
        project = Project.find_by(id: params[:id])
        project.update(project_params)
        render json: project
      end
    
      def destroy
        project = Project.find_by(id: params[:id])
        project.destroy
        render json: {}
      end
      private
    
      def project_params
        params.permit(:title, :summary, :color, :user_id)
      end
end
