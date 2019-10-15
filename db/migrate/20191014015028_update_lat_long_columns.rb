class UpdateLatLongColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :lat, :float
    change_column :restaurants, :long, :float
  end
end
