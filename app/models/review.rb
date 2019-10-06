class Review < ApplicationRecord

    validates :total_rating, :food_rating, :service_rating, :value_rating, :noise_level, :recommended, :body, presence: true

    belongs_to :restaurant
    belongs_to :user

    def calc_total_rating

        (self.food_rating + self.service_rating + self.value_rating) / 3.0
    end

end