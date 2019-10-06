class UpdateColumnTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :total_rating, :float
    change_column :reviews, :service_rating, :float
    change_column :reviews, :food_rating, :float
    change_column :reviews, :value_rating, :float
  end
end
