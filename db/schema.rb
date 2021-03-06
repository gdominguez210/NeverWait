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

ActiveRecord::Schema.define(version: 2019_11_08_022949) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.float "lat", null: false
    t.float "long", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text "content"
    t.string "searchable_type"
    t.bigint "searchable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.string "date", null: false
    t.string "start_time", null: false
    t.string "end_time", null: false
    t.integer "restaurant_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "party_size", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phonenumber", null: false
    t.string "email", null: false
    t.index ["restaurant_id", "date", "start_time", "end_time"], name: "unique reservations", unique: true
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "phone", null: false
    t.integer "owner_id", null: false
    t.integer "location_id", null: false
    t.float "lat", null: false
    t.float "long", null: false
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
    t.string "start_hour"
    t.string "end_hour"
    t.index ["name", "address"], name: "index_restaurants_on_name_and_address", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.float "total_rating", null: false
    t.integer "food_rating", null: false
    t.integer "service_rating", null: false
    t.integer "noise_level", null: false
    t.boolean "recommended", null: false
    t.text "body", null: false
    t.integer "value_rating"
    t.integer "ambience_rating"
    t.index ["restaurant_id", "user_id"], name: "index_reviews_on_restaurant_id_and_user_id", unique: true
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
