class Intial < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.integer :budget
      t.string :location
      t.boolean :open, default: true
      t.timestamps
    end

    create_table :skills do |t|
      t.string :name
    end

    create_table :tags do |t|
    end
    create_table :catagories do |t|
      t.string :name
    end

    #index a table inside of the main table and follow changes
    add_reference :projects, :catagory, index: true
    add_reference :tags, :projects, index: true
    add_reference :tags, :skills, index: true
  end
end
