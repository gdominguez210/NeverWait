# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord

    belongs_to :user
    belongs_to :restaurant

end
