class UpdateLocationColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :restaurants, :location, :location_id
     change_column :restaurants, :location_id, 'integer USING CAST(location_id AS integer)'
  end
end
