class AddValueRating < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :value_rating, :decimal
  end
end
