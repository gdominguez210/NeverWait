# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_06_211701) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "phone", null: false
    t.integer "owner_id", null: false
    t.integer "location_id", null: false
    t.decimal "lat", null: false
    t.decimal "long", null: false
    t.text "description"
    t.string "website"
    t.string "price_range"
    t.integer "capacity"
    t.string "cross_street"
    t.string "neighborhood"
    t.string "hours_of_operation"
    t.string "cuisines"
    t.string "dining_style"
    t.string "dress_code"
    t.string "parking_details"
    t.string "public_transit"
    t.string "payment_options"
    t.string "executive_chef"
    t.string "additional"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "featured_img_url"
    t.index ["name", "address"], name: "index_restaurants_on_name_and_address", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.float "total_rating", null: false
    t.float "food_rating", null: false
    t.float "service_rating", null: false
    t.integer "noise_level", null: false
    t.boolean "recommended", null: false
    t.text "body", null: false
    t.float "value_rating"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "fname"
    t.string "lname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
