class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :status, :priority, :summary, :project_title, :project_id
  
  def project_title
    object.project.title
  end
end