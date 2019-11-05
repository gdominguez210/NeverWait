class Api::ReservationsController < ApplicationController

    def index
      
        @reservations = Reservation.includes(:restaurant).where("user_id = ?", params[:user_id]).order('date DESC')
    end

    def create
        @reservation = Reservation.new(reservation_params)
        #   
        # @reservation.end_time = @reservation.start_time + 
        if @reservation.save
            render "api/reservations/show"
        else
            #   
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def show
        @reservation = Reservation.find(params[:id])
    end
    def findtable
        if !current_user
            return render json: ["Please sign in to complete your reservation"], status: 403
        end
        @reservation = Reservation.find_by(start_time: params[:reservation][:start_time], date: params[:reservation][:date], restaurant_id: params[:restaurantId])
        if @reservation
            reservation_list = Reservation.where("date = ?", params[:reservation][:date])
            taken_times = []
            reservation_list.each{|ele| taken_times.push(ele.start_time)}
            restaurant = Restaurant.find_by(id: @reservation.restaurant_id)
            potential_openings = restaurant.available_times(params[:reservation][:start_time]);
            available_openings = potential_openings.select{|ele| !taken_times.include?(ele)};
            if available_openings.length > 0 
                render json: {start_time: params[:reservation][:start_time], date: params[:reservation][:date], party_size: params[:reservation][:party_size], available_openings: available_openings, restaurant_id: params[:restaurantId]}
            else
                render json: ["There are no openings within a 2 and a half hour window, please try another date and/or time."], status: 422
            end
        else
            render json: {start_time: params[:reservation][:start_time], date: params[:reservation][:date], party_size: params[:reservation][:party_size]}
        end

    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
            render "api/reservations/show"
        else
             render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        if @reservation.destroy!
            render "api/reservations/show"
        else
            render json: ["Reservation does not exist."]
        end
    end
    def reservation_params
        params.require(:reservation).permit(:date, :start_time, :end_time, :party_size, :restaurant_id, :user_id, :first_name, :last_name, :email, :phonenumber, :available_openings) 
    end
end