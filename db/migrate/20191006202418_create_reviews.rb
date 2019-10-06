class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.decimal :total_rating, null: false
      t.decimal :food_rating, null: false
      t.decimal :service_rating, null: false
      t.integer :noise_level, null: false
      t.boolean :recommended, null: false
      t.text :body, null: false
    end
  end
end
