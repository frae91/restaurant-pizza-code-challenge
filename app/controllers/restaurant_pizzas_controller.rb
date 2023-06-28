class RestaurantPizzasController < ApplicationController
    def index
        restaurant_pizzas = RestaurantPizza.all

        render json: restaurant_pizzas, status: :ok
    end

    def show
        restaurant_pizza = Restaurant.find(restaurant_pizza_params[:id])

        render json: restaurant_pizza, status: :ok
    end

    def create
        restaurant_pizza = RestaurantPizza.create!(restaurant_pizza_params)
        
        pizza = restaurant_pizza.pizza

        render json: pizza, status: :created
    end

    private
    def restaurant_pizza_params
        params.permit(:id, :restaurant_id, :pizza_id, :price)
    end
end
