class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :status, :priority, :summary, :project_title, :project_id, :user_id
  
  def project_title
    object.project.title
  end
end