# json.reviews do
#     @reviews.each do |review|
#         json.set! review.id do
#             json.extract! review, :id, :restaurant_id, :user_id, :total_rating, :value_rating, :service_rating, :food_rating, :recommended, :noise_level, :body, :ambience_rating, :user_id
#         end
#     end
# end

# json.users do
#     @reviews.each do |review|
#         json.set! review.user_id do
#             json.extract! review.user, :fname, :lname, :id
#             json.total_reviews review.user.reviews.count
#         end
#     end
# end