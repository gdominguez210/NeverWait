class UpdateLocations < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :location_id, :string
     rename_column :restaurants, :location_id, :location
  end
end
