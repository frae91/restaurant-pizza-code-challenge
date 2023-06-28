class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all

        render json: restaurants, status: :ok
    end

    def show
        restaurant = Restaurant.find(restaurant_params[:id])

        render json: restaurant, status: :ok
    end

    def destroy
        restaurant = Restaurant.find(restaurant_params[:id])

        restaurant.destroy

        head :no_content
    end

    private
    def restaurant_params
        params.permit(:id, :name, :address)
    end
end
