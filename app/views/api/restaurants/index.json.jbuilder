    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :address, :phone, :location_id, :owner_id, :lat, :long, :price_range
            if (restaurant.featured_img_url)
                json.image_url image_url(restaurant.featured_img_url)
            end
            
        end
    end
