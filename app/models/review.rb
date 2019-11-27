# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  total_rating    :float            not null
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  noise_level     :integer          not null
#  recommended     :boolean          not null
#  body            :text             not null
#  value_rating    :integer
#  ambience_rating :integer
#

class Review < ApplicationRecord

    validates :total_rating, :food_rating, :service_rating, :value_rating, :noise_level, :body, presence: true
    validates :user_id, uniqueness: {scope: :restaurant_id, message: "You have already left a review for this restaurant!" }

    
    belongs_to :restaurant
    belongs_to :user

    def calc_total_rating

        calc = ((self.food_rating * 1.0) + (self.service_rating * 1.0)  + (self.value_rating * 1.0) + (self.ambience_rating * 1.0)) / 4
        calc.ceil
    end

    def recommended?
         self.total_rating > 2.5 ? self.recommended = true : self.recommended = false
    end

end
