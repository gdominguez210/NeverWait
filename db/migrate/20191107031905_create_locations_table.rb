class CreateLocationsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :locations_tables do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.timestamps
    end
  end
end
