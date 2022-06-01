class Task < ApplicationRecord

  belongs_to :user
  belongs_to :project

  validates :title, presence: true
  validates :summary, length: { minimum: 10 }
  validates :priority, presence: true
end
