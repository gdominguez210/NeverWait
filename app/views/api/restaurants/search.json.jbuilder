total_available_openings = 0;

json.restaurants do
@restaurants.each do |restaurant|
  
        total_ratings = []
        restaurant.reviews.each do |review|
            total_ratings.push(review.total_rating)
        end

        # reservation_list = Reservation.where("date = ? and restaurant_id = ?", @res['date'], restaurant.id)
        reservation_list = restaurant.reservations.select{|ele| ele.date === @res['date']}
        taken_times = []
        reservation_list.each{|ele| taken_times.push(ele.start_time)}
        potential_openings = restaurant.available_times(@res['start_time'])
        available_openings = potential_openings.select{|ele| !taken_times.include?(ele)}
        total_rating = restaurant.calc_averages(total_ratings)
        filtered = true
     
        if @rating && @rating != "false"
            if @rating == "5"
                filtered = false unless @rating.to_i * 1.0 == total_rating * 1.0
            elsif @rating == "4"
                filtered = false unless total_rating.between?(4, 5)
            elsif @rating == "3"
                filtered = false unless total_rating.between?(3, 4)
            elsif @rating == "2"
                 filtered = false unless total_rating.between?(2, 3)
            elsif @rating == "1"
                filtered = false unless total_rating.between?(0, 1)
            else
                filtered = false
            end
        end

        if available_openings.length > 0 && filtered
            total_available_openings += available_openings.length
            json.set! restaurant.id do
                json.partial! "api/restaurants/restaurant", restaurant: restaurant
                json.image_url image_url(restaurant.featured_img_url) if restaurant.featured_img_url
                json.total_reviews restaurant.reviews.length
                json.total_rating restaurant.calc_averages(total_ratings)

                if @res['start_time']
                    json.available_times restaurant.available_future_times(@res['start_time'])
                else
                    json.available_times restaurant.available_future_times(restaurant.current_time)
                end
                if @res['date']
                    # json.booked_today restaurant.reservations.where('date LIKE ?', @res['date'] + '%').count
                    json.booked_today restaurant.reservations.select{|ele| ele.date === @res['date']}.length
                else
                #    json.booked_today restaurant.reservations.where('date LIKE ?', Time.now.strftime("%a %b %e %Y") + '%').count
                   json.booked_today restaurant.reservations.select{|ele| ele.date == Time.now.strftime("%-m/%-d/%y")}.length
                   
                end
            end
        end
    end
end
json.search do
    json.total_available_openings total_available_openings
end