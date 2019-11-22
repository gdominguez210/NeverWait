json.extract! restaurant, :id, :name, :address, :phone, :owner_id, :location_id, :lat, :long, :description, :website, :price_range, :capacity, :cross_street, :neighborhood, :hours_of_operation, :cuisines, :dining_style, :dress_code, :parking_details, :public_transit, :payment_options, :end_hour, :executive_chef, :additional, :review_ids, :favorite_ids
    if restaurant.featured_img_url
        json.image_url image_url(restaurant.featured_img_url)
    end
    # json.photoUrls restaurant.photos.map { |file| url_for(file) }
        # json.photoUrls restaurant.photos.map { |file| file.blob.service_url }
    json.photoUrls restaurant.photos.map { |file| file.variant(resize: "242x281").processed.service_url}
