class Api::SearchController < ApplicationController

    def search
        render json: {query: params[:query], res: params[:res]}
    end
end