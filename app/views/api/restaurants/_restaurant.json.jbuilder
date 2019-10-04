json.extract! restaurant, :id, :name, :address, :phone, :owner_id, :location_id, :lat, :long, :description, :website, :price_range, :capacity
json.image_url asset_path(restaurant.featured_img_url)
json.set! :parameters do
    json.extract! restaurant, :cross_street, :neighborhood, :hours_of_operation, :cuisines, :dining_style, :dress_code, :parking_details, :public_transit, :payment_options, :executive_chef, :additional
end