json.restaurants do
@restaurants.each do |restaurant|
  
        total_ratings = []
        restaurant.reviews.each do |review|
            total_ratings.push(review.total_rating)
        end


        json.set! restaurant.id do
            json.partial! "api/restaurants/restaurant", restaurant: restaurant
            json.image_url image_url(restaurant.featured_img_url) if restaurant.featured_img_url
            json.total_reviews restaurant.reviews.count
            json.total_rating restaurant.calc_averages(total_ratings)
            json.available_times restaurant.available_future_times(restaurant.current_time)
            json.booked_today restaurant.reservations.where('date LIKE ?', Time.now.strftime("%a %b %e %Y") + '%').count
            
        end
    end
end