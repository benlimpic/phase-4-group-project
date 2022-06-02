class ProjectsController < ApplicationController

    def index
        render json: Project.all
      end
    
      def create
        project = Project.create!(project_params)
        render json: task, status: :created
    
      end
    
      def update
        project = Project.find_by(id: params[:id])
        project.update(project_params)
        render json: project
      end
    
      def destroy
        project = Project.find_by(id: params[:id])
        project.destroy
        head :no_content
      end
      private
    
      def project_params
        params.permit(:title, :summary, :color)
      end
end
