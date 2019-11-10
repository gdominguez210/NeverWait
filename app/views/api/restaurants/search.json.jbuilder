total_available_openings = 0;
json.restaurants do
@restaurants.each do |restaurant|
  
        total_ratings = []
        restaurant.reviews.each do |review|
            total_ratings.push(review.total_rating)
        end

        reservation_list = Reservation.where("date = ? and restaurant_id = ?", @res['date'], restaurant.id)
        taken_times = []
        reservation_list.each{|ele| taken_times.push(ele.start_time)}
        potential_openings = restaurant.available_times(@res['start_time'])
        available_openings = potential_openings.select{|ele| !taken_times.include?(ele)}
        if available_openings.length > 0
            total_available_openings += available_openings.length
            json.set! restaurant.id do
                json.partial! "api/restaurants/restaurant", restaurant: restaurant
                json.image_url image_url(restaurant.featured_img_url) if restaurant.featured_img_url
                json.total_reviews restaurant.reviews.count
                json.total_rating restaurant.calc_averages(total_ratings)

                if @res['start_time']
                    json.available_times restaurant.available_future_times(@res['start_time'])
                else
                    json.available_times restaurant.available_future_times(restaurant.current_time)
                end
                if @res['date']
                    json.booked_today restaurant.reservations.where('date LIKE ?', @res['date'] + '%').count
                else
                   json.booked_today restaurant.reservations.where('date LIKE ?', Time.now.strftime("%a %b %e %Y") + '%').count
                end
            end
        end
    end
end
json.search do
    json.total_available_openings total_available_openings
end