class UpdateOpenCloseKeyWords < ActiveRecord::Migration[5.2]
      def change
    rename_column :restaurants, :opening_time, :start_hour
     rename_column :restaurants, :closing_time, :close_hour
  end
end
