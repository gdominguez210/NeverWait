class AddColumnsToReservation < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :party_size, :integer, null: false
    add_column :reservations, :first_name, :string, null: false
    add_column :reservations, :last_name, :string, null: false
    add_column :reservations, :phonenumber, :string, null: false
    add_column :reservations, :email, :string, null: false

  end
end
