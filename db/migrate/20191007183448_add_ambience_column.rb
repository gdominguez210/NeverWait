class AddAmbienceColumn < ActiveRecord::Migration[5.2]
  def change

    add_column :reviews, :ambience, :integer
    change_column :reviews, :total_rating, :integer
    change_column :reviews, :service_rating, :integer
    change_column :reviews, :food_rating, :integer
    change_column :reviews, :value_rating, :integer
  end
end
