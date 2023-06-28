class PizzasController < ApplicationController
    def index
        pizzas = Pizza.all

        render json: pizzas, status: :ok
    end

    def show
        pizza = Pizza.find(pizza_params[:id])

        render json: pizza, status: :ok
    end

    private
    def pizza_params
        params.permit(:id, :name, :ingredients)
    end
end
