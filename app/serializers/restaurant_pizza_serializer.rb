class RestaurantPizzaSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :pizza_id, :price

  belongs_to :restaurant
  belongs_to :pizza
end
