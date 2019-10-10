class Api::ReservationsController < ApplicationController

    def index
        @reservations = Reservation.includes(:restaurants).where("user_id = ?", params[:userId])
    end

    def create
        @reservation = Reservation.new(reservation_params)
        debugger
        # @reservation.end_time = @reservation.start_time + 
        if @reservation.save
            render "api/reservations/show"
        else
            debugger
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def show
        @reservation = Reservation.find(params[:id])
    end
    def findtable

        @reservation = Reservation.find_by(start_time: params[:reservation][:start_time], date: params[:reservation][:date])

        if @reservation
            render json: ["reservation already exists at this time"], status: 422
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
        params.require(:reservation).permit(:date, :start_time, :end_time, :party_size, :restaurant_id, :user_id, :first_name, :last_name, :email, :phonenumber) 
    end
end