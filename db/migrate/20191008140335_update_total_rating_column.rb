class UpdateTotalRatingColumn < ActiveRecord::Migration[5.2]
  def change
       change_column :reviews, :total_rating, :float
  end
end
