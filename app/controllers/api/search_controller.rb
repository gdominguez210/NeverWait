class Api::SearchController < ApplicationController

    def search
        render json: {query: params[:query], res: params[:res]}
    end

    def autocomplete

        # @results = Restaurant.joins(:location).where("restaurants.name LIKE ?", '%' + params[:autocomplete] + '%').or(Restaurant.joins(:location).where("locations.name LIKE ?", '%' + params[:autocomplete] + '%')).pluck("restaurants.name, locations.name")
        PgSearch.multisearch_options = {
        using: {
            tsearch: { prefix: true }
                }
    }
        @results = PgSearch.multisearch(params[:autocomplete]) 
        render json: @results
    end
    
end