json.partial! "api/restaurants/restaurant", restaurant: @restaurant
json.total_reviews @restaurant.reviews.count
total_ratings = []
food_ratings = []
service_ratings = []
value_ratings = [] 
@restaurant.reviews.each {|review|
    total_ratings.push(review.total_rating)
    value_ratings.push(review.value_rating)
    service_ratings.push(review.service_rating)
    food_ratings.push(review.food_rating)
}

total_rating = ((total_ratings.reduce{|acc, ele| acc + ele} / total_ratings.length) * 10).floor / 10.0
value_rating = ((value_ratings.reduce{|acc, ele| acc + ele} / value_ratings.length) * 10).floor / 10.0
service_rating = ((service_ratings.reduce{|acc, ele| acc + ele} / service_ratings.length) * 10).floor / 10.0
food_rating = ((food_ratings.reduce{|acc, ele| acc + ele} / food_ratings.length) * 10).floor / 10.0

json.total_rating total_rating
json.value_rating value_rating
json.service_rating service_rating
json.food_rating food_rating