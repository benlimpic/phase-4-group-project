class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :status
      t.string :summary
      t.string :priority
      t.string :color
      t.integer :column
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
