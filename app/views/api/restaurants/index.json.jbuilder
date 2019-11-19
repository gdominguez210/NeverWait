json.restaurants do
@restaurants.each do |restaurant|
  
        total_ratings = []
        reviews = restaurant.reviews
        if reviews.length > 0
            reviews.each do |review|
                total_ratings.push(review.total_rating)
            end
        end

        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :address, :phone, :owner_id, :location_id, :lat, :long, :description, :website, :price_range, :capacity, :cross_street, :neighborhood, :hours_of_operation, :cuisines, :dining_style, :dress_code, :parking_details, :public_transit, :payment_options, :end_hour, :executive_chef, :additional, :review_ids, :favorite_ids
    if restaurant.featured_img_url
        json.image_url image_url(restaurant.featured_img_url)
    end
           
            json.image_url image_url(restaurant.featured_img_url) if restaurant.featured_img_url
           
            json.total_reviews reviews.length
           
            json.total_rating restaurant.calc_averages(total_ratings)
           
            json.available_times restaurant.available_future_times(restaurant.current_time)
           
            json.booked_today restaurant.reservations.select{|ele| ele.date == Time.now.strftime("%-m/%-d/%y")}.length
            
        end

    end
end
json.search do
    json.total_available_openings 0
end