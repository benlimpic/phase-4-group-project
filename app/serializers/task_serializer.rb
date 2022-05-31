class TaskSerializer < ActiveModel::Serializer

  attributes :id, :title, :description, :urgency, :column
  has_one :user
  has_one :project

end
