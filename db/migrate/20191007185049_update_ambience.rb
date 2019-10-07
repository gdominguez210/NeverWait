class UpdateAmbience < ActiveRecord::Migration[5.2]
  def change
        rename_column :reviews, :ambience, :ambience_rating
  end
end
