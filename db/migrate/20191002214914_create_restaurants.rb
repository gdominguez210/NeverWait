class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null:false
      t.string :address, null: false
      t.string :phone, null: false
      t.integer :owner_id, null: false
      t.integer :location_id, null: false
      t.decimal :lat, null: false
      t.decimal :long, null: false
      t.text :description
      t.string :website
      t.string :price_range
      t.integer :capacity
      t.string :cross_street
      t.string :neighborhood
      t.string :hours_of_operation
      t.string :cuisines
      t.string :dining_style
      t.string :dress_code
      t.string :parking_details
      t.string :public_transit
      t.string :payment_options
      t.string :executive_chef
      t.string :additional

      t.timestamps null:false
    end

    add_index :restaurants, [:name, :address], unique: true
  end
end
