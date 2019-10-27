
@restaurant.reviews.each do |review|
    json.reviews do
        json.set! review.id do
            json.extract! review, :id, :restaurant_id, :user_id, :total_rating, :value_rating, :service_rating, :food_rating, :recommended, :noise_level, :body, :ambience_rating, :user_id
        end
    end
    
    json.users do
        json.set! review.user_id do
            json.extract! review.user, :fname, :lname, :id, :favorite_ids
            json.total_reviews review.user.reviews.count
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
    json.partial! "api/restaurants/restaurant", restaurant: @restaurant
    json.total_reviews @restaurant.reviews.count
    total_ratings = []
food_ratings = []
service_ratings = []
value_ratings = [] 
@restaurant.reviews.each do |review|
    total_ratings.push(review.total_rating)
    value_ratings.push(review.value_rating)
    service_ratings.push(review.service_rating)
    food_ratings.push(review.food_rating)
end



star_ratings = {
    five_stars: total_ratings.select{|rating| rating == 5}.count,
    four_stars: total_ratings.select{|rating| rating == 4}.count,
    three_stars: total_ratings.select{|rating| rating == 3}.count,
    two_stars: total_ratings.select{|rating| rating == 2}.count,
    one_star: total_ratings.select{|rating| rating == 1}.count
}
 #split into two chunks, and account for empty array
total_rating = total_ratings.reduce{|acc, ele| acc + ele} || ""
total_rating = ((total_rating / total_ratings.length) * 10.0).floor / 10.0 if total_ratings.length != 0

value_rating = value_ratings.reduce{|acc, ele| acc + ele} || ""
value_rating = ((value_rating / value_ratings.length) * 10.0).floor / 10.0 if value_ratings.length != 0

service_rating = service_ratings.reduce{|acc, ele| acc + ele} || ""
service_rating = ((service_rating / service_ratings.length) * 10.0).floor / 10.0 if service_ratings.length != 0


food_rating = food_ratings.reduce{|acc, ele| acc + ele} || ""
food_rating = ((food_rating / food_ratings.length) * 10.0).floor / 10.0 if food_ratings.length != 0

json.total_rating total_rating
json.value_rating value_rating
json.service_rating service_rating
json.food_rating food_rating
json.star_ratings star_ratings

end