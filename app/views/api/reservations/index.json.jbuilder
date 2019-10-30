    json.reservations do
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.partial! "api/reservations/reservation", reservation: reservation
        end

    end
end

json.restaurants do
 @reservations.each do |reservation| 
    json.set! reservation.restaurant_id do
        restaurant = reservation.restaurant
        json.extract! restaurant, :id, :name, :address, :phone, :owner_id, :location, :lat, :long, :description, :website, :price_range, :capacity, :cross_street, :neighborhood, :hours_of_operation, :cuisines, :dining_style, :dress_code, :parking_details, :public_transit, :payment_options, :executive_chef, :additional, :review_ids, :favorite_ids
        if restaurant.featured_img_url
            json.image_url image_url(restaurant.featured_img_url)
        end

    end
end
end