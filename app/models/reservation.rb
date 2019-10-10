# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  date          :string           not null
#  start_time    :string           not null
#  end_time      :string           not null
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  party_size    :integer          not null
#  first_name    :string           not null
#  last_name     :string           not null
#  phonenumber   :string           not null
#  email         :string           not null
#

class Reservation < ApplicationRecord

    belongs_to :restaurant
    belongs_to :user

    validates :date, :start_time, :party_size, presence: true
    #   validates :date, :start_time, :end_time, :party_size presence: true
    # validates :user_id, uniqueness: {scope: :restaurant_id}
    validates :start_time, uniqueness: {scope: [:date, :restaurant_id]}
    
end
