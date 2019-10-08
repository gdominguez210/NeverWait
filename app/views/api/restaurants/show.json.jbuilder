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

total_rating = (((total_ratings.reduce{|acc, ele| acc + ele} / total_ratings.length) * 10.0).floor / 10.0) #split into two chunks, and account for empty array
value_rating = ((value_ratings.reduce{|acc, ele| acc + ele} / value_ratings.length) * 10.0).floor / 10.0
service_rating = ((service_ratings.reduce{|acc, ele| acc + ele} / service_ratings.length) * 10.0).floor / 10.0
food_rating = ((food_ratings.reduce{|acc, ele| acc + ele} / food_ratings.length) * 10.0).floor / 10.0

json.total_rating total_rating
json.value_rating value_rating
json.service_rating service_rating
json.food_rating food_rating
json.star_ratings star_ratings
# json.five_stars five_stars
# json.four_stars four_stars
# json.three_stars three_stars
# json.two_stars two_stars
# json.one_star one_star