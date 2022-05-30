class Task < ApplicationRecord

  belongs_to :user
  belongs_to :project

  validates :title, presence: true
  validates :description, length: { minimum: 10 }
  validates :priority, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 6 }

end
