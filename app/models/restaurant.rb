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
#  lat                :float            not null
#  long               :float            not null
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
#  start_hour         :string
#  end_hour           :string
#
class Time
    def round_off(seconds = 60)
        Time.at((self.to_f / seconds).round * seconds)
    end
end
class Restaurant < ApplicationRecord

 
    include PgSearch::Model
    multisearchable against: [:name],  update_if: :name_changed?
    pg_search_scope :search_by_keyword, against: [:name]
    scope :with_locations, -> {joins(:location)}
    validates :name, :address, :phone, :owner_id, :location, :lat, :long, presence: true
    validates :name, uniqueness: {scope: :address}

    # belongs_to :location

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    belongs_to :location
    has_many :reviews, dependent: :destroy
    has_many :reservations, dependent: :destroy
    has_many :favorites, dependent: :destroy
    # has_many :favorited,
    # through: :favorites,
    # source: :User
    has_many_attached :photos

    TIME_SLOTS = %w(
        12:00am
        12:30am
        1:00am
        1:30am
        2:00am
        2:30am
        3:00am
        3:30am
        4:00am
        4:30am
        5:00am
        5:30am
        6:00am
        6:30am
        7:00am
        7:30am
        8:00am
        8:30am
        9:00am
        9:30am
        10:00am
        10:30am
        11:00am
        11:30am
        12:00pm
        12:30pm
        1:00pm
        1:30pm
        2:00pm
        2:30pm
        3:00pm
        3:30pm
        4:00pm
        4:30pm
        5:00pm
        5:30pm
        6:00pm
        6:30pm
        7:00pm
        7:30pm
        8:00pm
        8:30pm
        9:00pm
        9:30pm
        10:00pm
        10:30pm
        11:00pm
        11:30pm
    )

    def self.time_slots
        TIME_SLOTS
    end
    def hours
       start = self.start_hour
       close = self.end_hour
       self.hours_of_operation = start + ' - ' + close
    end
    def current_time
        current_time = Time.new.round_off(30 * 60)
        current_time = current_time.strftime("%l:%M%P")
        current_time[1..-1]
    end
    def hours_of_operation_list
        start_hour = TIME_SLOTS.index(self.start_hour)
    end_hour = TIME_SLOTS.index(self.end_hour)
        TIME_SLOTS[start_hour..end_hour]
    end

    def available_times(time)
        hours = hours_of_operation_list
        pivot = hours.index(time)
        return [] if pivot == nil
        first_half = hours[pivot - 5...pivot]
        second_half = hours[pivot + 1..pivot + 5]
        first_half + second_half
    end

     def available_future_times(time)
        hours = hours_of_operation_list
        pivot = hours.index(time)
        return [] unless pivot
        hours[pivot..pivot + 5]
    end

    def calc_averages(array)
        return 0 if array.length == 0
        result = array.reduce{|acc, ele| acc + ele} || ""
        result = ((result / array.length) * 10.0).floor / 10.0 if array.length != 0
        result
    end

    def star_ratings(total_ratings)

        star_ratings = {
            '5' => 0,
            '4' => 0,
            '3' => 0,
            '2' => 0,
            '1' => 0
        }

        total_ratings.each do |el|
            star_ratings[el.to_i.to_s] += 1
        end

        star_ratings
    end

    def noise_level_average(noise_levels)
        noise_level = noise_levels.reduce{|acc, ele| acc + ele} || ""
        noise_level = noise_level / noise_levels.length if noise_levels.length != 0
        noise_level
    end

    def recommended_percentage(recommended)
        percent = (recommended.count{|ele| ele == true} / (recommended.length * 1.0)) * 100.0 if recommended.length != 0 || ""
        percent.round(2)
    end
end
