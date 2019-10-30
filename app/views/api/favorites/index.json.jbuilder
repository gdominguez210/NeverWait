@favorites.each do |favorite|

    json.restaurants do
        json.set! favorite.restaurant.id do
  
            json.extract! favorite.restaurant, :id, :name, :address, :phone, :location, :owner_id, :lat, :long, :price_range, :favorite_ids, :review_ids
            if (favorite.restaurant.featured_img_url)
                json.image_url image_url(favorite.restaurant.featured_img_url)
            end
        end
    end

end