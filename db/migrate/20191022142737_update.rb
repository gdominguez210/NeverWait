class Update < ActiveRecord::Migration[5.2]
  def change
    rename_column :restaurants, :open_time, :opening_time
     rename_column :restaurants, :close_time, :closing_time
  end
end
