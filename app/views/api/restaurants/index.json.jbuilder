@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :address, :phone, :location_id, :lat, :long, :price_range
        json.image_url asset_path(restaurant.featured_img_url)
    end
end