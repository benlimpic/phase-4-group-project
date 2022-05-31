class Project < ApplicationRecord

    has_many :tasks, dependent: :destroy
    has_many :users, through: :tasks
    
    validates :title, presence: true
    validates :description, length: { minimum: 10 }

end
