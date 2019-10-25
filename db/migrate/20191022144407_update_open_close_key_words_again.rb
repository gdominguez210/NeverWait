class UpdateOpenCloseKeyWordsAgain < ActiveRecord::Migration[5.2]
  def change
     rename_column :restaurants, :close_hour, :end_hour
  end
end
