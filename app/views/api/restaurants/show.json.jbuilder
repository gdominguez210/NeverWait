total_ratings = []
food_ratings = []
service_ratings = []
value_ratings = []
recommended = []
noise_levels = []

@restaurant.reviews.each do |review|

    total_ratings.push(review.total_rating)
    value_ratings.push(review.value_rating)
    service_ratings.push(review.service_rating)
    food_ratings.push(review.food_rating)
    recommended.push(review.recommended)
    noise_levels.push(review.noise_level)

    json.reviews do
        json.set! review.id do
            json.extract! review, :id, :restaurant_id, :user_id, :total_rating, :value_rating, :service_rating, :food_rating, :recommended, :noise_level, :body, :ambience_rating, :user_id
        end
    end
    
    json.users do
        json.set! review.user_id do
            json.extract! review.user, :fname, :lname, :id, :favorite_ids
            json.total_reviews review.user.reviews.length
        end
    end
end
@restaurant.favorites.each do |favorite|

    json.favorites do
        json.set! favorite.id do
            json.extract! favorite, :id, :user_id, :restaurant_id
        end
    end
end

json.restaurant do
    review_count = @restaurant.reviews.length
    json.partial! "api/restaurants/restaurant", restaurant: @restaurant
    json.total_reviews review_count
    json.total_rating @restaurant.calc_averages(total_ratings)
    json.value_rating @restaurant.calc_averages(value_ratings)
    json.service_rating @restaurant.calc_averages(service_ratings)
    json.food_rating @restaurant.calc_averages(food_ratings)
    json.star_ratings @restaurant.star_ratings(total_ratings)

    # json.booked_today @restaurant.reservations.where('date LIKE ?', Time.now.strftime("%a %b %e %Y") + '%').length
    json.booked_today @restaurant.reservations.select{|ele| ele.date == Time.now.strftime("%-m/%-d/%y")}.length
    if review_count > 0
    json.percent_recommended @restaurant.recommended_percentage(recommended)
    json.noise_level @restaurant.noise_level_average(noise_levels)
    end
end
