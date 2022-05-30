class User < ApplicationRecord

    has_many :tasks, dependent: :destroy
    has_many :projects, through: :tasks
    
    validates :username, presence: true, uniqueness: true

    has_secure_password

end
