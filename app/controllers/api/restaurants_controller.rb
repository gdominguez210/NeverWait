class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all

    end

    def show
        @restaurant = Restaurant.find(params[:id])
    end

    def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
            render "api/restaurants/show"
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end

    def update
        @restaurant = Restaurant.find(params[:id])
        if current_user.id == @restaurant.owner_id
            if @restaurant.update(restaurant_params)
                render "api/restaurants/show"
            else
                render json: @restaurant.errors.full_messages, status: 422
            end
        end
    end


    def destroy
        restaurant = current_user.restaurants.find(params[:id])
        if restaurant
            restaurant.destroy
        else
            render json: ["404 Not Found"], status: 404
        end
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(
            :name,
            :address,
            :phone,
            :lat,
            :long,
        )
    end

end