

class Api::RestaurantsController < ApplicationController

    
    def index
        @restaurants = Restaurant.includes(:reviews, :reservations, :favorites).with_attached_photos.all
    end

    def search
        if params[:query] == nil || params[:query][:name].length == 0
             @restaurants = Restaurant.with_attached_photos.all 
             @res = params[:res]
             return
        end
        params[:query].permit!

        if params[:query][:price_range]
            @restaurants = Restaurant.joins(:location).with_attached_photos.where("restaurants.name LIKE ? AND restaurants.price_range LIKE ?", params[:query][:name], params[:query][:price_range]).or(Restaurant.joins(:location).with_attached_photos.where("locations.name LIKE ? AND restaurants.price_range LIKE ?", params[:query][:name], params[:query][:price_range]))
            @res = params[:res]
            @rating = params[:query][:rating]
        else
            @restaurants = Restaurant.joins(:location).with_attached_photos.where("restaurants.name LIKE ?", params[:query][:name]).or(Restaurant.joins(:location).with_attached_photos.where("locations.name LIKE ?", params[:query][:name]))
            @res = params[:res]
            @rating = params[:query][:rating]
        end
        
    end
    def feature
        @restaurants = Restaurant.limit(15).order("RANDOM()");
        render "api/restaurants/index"
    end

    def show
        @restaurant = Restaurant.includes(:reviews, :favorites, :reservations, reviews: {user: :favorites}).with_attached_photos.find(params[:id])
    end

    def create
        @restaurant = Restaurant.new(restaurant_params)
        @restaurant.hours
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
        params.permit(
            :name,
            :address,
            :phone,
            :lat,
            :long,
            :owner_id, :location, :description, :website, :price_range, :capacity, :neighborhood, :hours_of_operation, :cuisines, :dining_style, :dress_code, :parking_details, :public_transit, :payment_options, :executive_chef, :additional
        )
    end

end