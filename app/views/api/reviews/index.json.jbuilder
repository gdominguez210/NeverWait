@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :restaurant_id, :user_id, :total_rating, :value_rating, :service_rating, :food_rating, :recommended, :noise_level, :body
        json.set! :author do
            json.extract! review.user, :fname, :lname
            json.set! :total_reviews do
                json.extract! review.user.reviews.count
            end
        end
    end
end