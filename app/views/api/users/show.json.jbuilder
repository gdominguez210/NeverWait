json.partial! "api/users/user", user: @user

@user.favorites.each do |favorite|
    json.favorites do
        json.set! favorite.id do
            json.extract! favorite, :id, :user_id, :restaurant_id
        end
    end
end

@user.reservations.each do |reservation|

    json.reservation do
        json.set! reservation.id do
            json.extract! reservation, :id, :date, :start_time, :restaurant_id, :user_id, :party_size, :first_name, :last_name, :phonenumber, :email
        end
    end
    
end