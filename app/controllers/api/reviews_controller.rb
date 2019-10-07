class Api::ReviewsController < ApplicationController
    

    def index
       
        restaurant = Restaurant.find(params[:restaurant_id])
        @reviews = restaurant.reviews
        render "api/reviews/index"
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.restaurant_id = params[:id]
        @review.total_rating = @review.calc_total_rating()

        if @review.save
            render json: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:service_rating, :food_rating, :value_rating, :noise_level, :recommended,  :body)
    end
end
