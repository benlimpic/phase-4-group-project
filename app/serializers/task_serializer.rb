class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :priority, :column
  has_one :user
  has_one :project
end
