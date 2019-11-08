class Location < ApplicationRecord

    include PgSearch::Model
    validates :name, presence: true
    has_many :restaurants
    multisearchable against: [:name],  update_if: :name_changed?, using: {
                    tsearch: { prefix: true }
                  }
end