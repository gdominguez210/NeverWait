class Reservation < ApplicationRecord

    belongs_to :restaurant,
    belongs_to :user

    validates :date, :start_time, :end_time, :party_size presence: true
    validates :user_id, uniqueness: {scope: :restaurant_id}
    validates :start_time, uniqueness: {scope: [:date, :restaurant_id]}
    
end