# == Schema Information
#
# Table name: restaurants
#
#  id                 :bigint           not null, primary key
#  name               :string           not null
#  address            :string           not null
#  phone              :string           not null
#  owner_id           :integer          not null
#  location_id        :integer          not null
#  lat                :decimal(, )      not null
#  long               :decimal(, )      not null
#  description        :text
#  website            :string
#  price_range        :string
#  capacity           :integer
#  cross_street       :string
#  neighborhood       :string
#  hours_of_operation :string
#  cuisines           :string
#  dining_style       :string
#  dress_code         :string
#  parking_details    :string
#  public_transit     :string
#  payment_options    :string
#  executive_chef     :string
#  additional         :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  featured_img_url   :string
#

class Restaurant < ApplicationRecord


    validates :name, :address, :phone, :owner_id, :location_id, :lat, :long, presence: true
    validates :name, uniqueness: {scope: :address}

    # belongs_to :location

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_many :reviews

end
