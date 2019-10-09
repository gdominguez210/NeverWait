class Api::ReservationsController < ApplicationController

    def index
        @reservations = Reservation.includes(:restaurants).where("user_id = ?", params[:userId])
    end

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render "api/reservations/show"
        else
            render json: @reservation.errors.full_messages, status: 422
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
        params.require(:reservation).permit(:date, :start_time, :end_time, :restaurant_id, :user_id) 
    end
end