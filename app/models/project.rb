class Project < ApplicationRecord

    has_many :tasks, dependent: :destroy
    has_many :users
    
    validates :title, presence: true
    validates :summary, length: { minimum: 10 }

end
