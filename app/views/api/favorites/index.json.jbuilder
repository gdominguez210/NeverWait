
    @favorites.each do |favorite|
    json.restaurants do
        total_ratings = []
        reviews = favorite.restaurant.reviews
        if reviews.length > 0
            reviews.each do |review|
                total_ratings.push(review.total_rating)
            end
        end
        json.set! favorite.restaurant.id do
            
            json.extract! favorite.restaurant, :id, :name, :address, :phone, :location, :owner_id, :lat, :long, :price_range, :favorite_ids, :review_ids
            if (favorite.restaurant.featured_img_url)
                json.image_url image_url(favorite.restaurant.featured_img_url)
            end
            json.total_reviews reviews.length
            json.total_rating favorite.restaurant.calc_averages(total_ratings)
        end
    end

    json.favorites do
        json.set! favorite.id do
            json.extract! favorite, :id, :user_id, :restaurant_id
        end
    end
end
