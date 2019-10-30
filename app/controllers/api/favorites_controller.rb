class Api::FavoritesController < ApplicationController

    def index
        @favorites = Favorite.where("user_id = ?", params[:user_id])
    end

    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
            render json: @favorite
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def show
        @favorite = Favorite.find(params[:id])
    end

    def destroy
        @favorite = current_user.favorites.find(params[:id])
        if @favorite.destroy!
            render json: @favorite
        else
            render json: ["Favorite does not exist."]
        end
    end
    def favorite_params
        params.require(:favorite).permit(:user_id, :restaurant_id) 
    end
end