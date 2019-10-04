class AddFeaturedImage < ActiveRecord::Migration[5.2]
  def change

    add_column :restaurants, :featured_img_url, :string
  end
end
