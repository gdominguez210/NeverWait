class UpdateLocationsTable < ActiveRecord::Migration[5.2]
  def change
     rename_table :locations_tables, :locations
  end
end
