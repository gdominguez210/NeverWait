class AddIndexesForReviews < ActiveRecord::Migration[5.2]
  def change
    add_index(:reviews, [:restaurant_id, :user_id], unique: true)
     add_index(:reviews, :user_id)
      add_index(:reviews, :restaurant_id)
  end
end
