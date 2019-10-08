# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  total_rating    :integer          not null
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  noise_level     :integer          not null
#  recommended     :boolean          not null
#  body            :text             not null
#  value_rating    :integer
#  ambience_rating :integer
#

class Review < ApplicationRecord

    validates :total_rating, :food_rating, :service_rating, :value_rating, :noise_level, :recommended, :body, presence: true

    belongs_to :restaurant
    belongs_to :user

    def calc_total_rating

        (self.food_rating + self.service_rating + self.value_rating) / 3.0
    end

end
