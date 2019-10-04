class Restaurant < ApplicationRecord


    validates :name, :address, :phone, :owner_id, :location_id, :lat, :long, presence: true
    validates :name, uniqueness: {scope: :address}

    # belongs_to :location

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User


end