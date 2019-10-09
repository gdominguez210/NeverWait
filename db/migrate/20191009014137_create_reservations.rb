class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :date, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :reservations, [:restaurant_id, :date, :start_time, :end_time], unique: true, name: 'unique reservations'
  end
end
