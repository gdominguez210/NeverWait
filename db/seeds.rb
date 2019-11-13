# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.delete_all
# User.new(username: 'Demo', password:'test123').save!
require 'open-uri'
require 'faker'
User.destroy_all
Restaurant.destroy_all
Review.destroy_all
Location.destroy_all
Reservation.destroy_all

images = %w(
      chairs-coffee-shop-drinking-glasses.jpg
      bar-city-commerce.jpg
      bar-ceiling-chairs.jpg
      balcony-chairs-contemporary.jpg
      bar-cafe-chairs.jpg
      architecture-contemporary-flowers.jpg
      architecture-chair-coffee.jpg
      architecture-buildings-city.jpg
      architecture-brickwall-chairs.jpg
      after-business-hours-architecture-bar.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/architectural-design-of-a-bar-2835547-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/architecture-bar-blur-boutique-264570-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/architecture-building-chairs-city-532934-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/architecture-ceiling-chairs-chandeliers-262047-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/architecture-chairs-curtains-furniture-279835-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/bikes-inside-store-2817452-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/black-wooden-chairs-1546040-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/brown-and-black-wooden-metal-chairs-2829032-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/brown-leather-bar-stools-2442899-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/brown-pendant-lamp-2221925-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/brown-wooden-dining-tables-2220120-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/brown-wooden-table-1055058-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/building-interior-photography-2813132-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/chair-cutlery-diner-dining-941861-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/chairs-interior-design-restaurant-seats-239975-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/clean-coffee-shop-2467287-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/cull-pistol-establishment-during-nighttime-2260824-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/fixed-tables-and-chairs-2728186-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/food-inside-display-chiller-1855214-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/gray-padded-chair-2290753-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/inside-a-restaurant-2530373-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/interior-design-of-an-empty-restaurant-2923034-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/interior-of-a-building-with-lots-of-chairs-1111162-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/interior-of-modern-building-331107-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/leather-chairs-in-restaurant-2193600-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/lighted-pendant-lights-inside-bar-2079438-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/menu-restaurant-france-eating-9315-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/photo-of-room-with-orange-pendant-lamp-1002745-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/photograph-of-a-woman-in-a-coffee-shop-1002740-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/red-petaled-flowers-on-table-2959410-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/restaurant-interior-776538-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/restaurant-table-and-chairs-1581384-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/round-brown-wooden-table-1095124-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/round-white-tables-with-chairs-2649771-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/table-in-vintage-restaurant-6267-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/tables-and-chairs-2983022-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/tables-and-chairs-under-canopy-2523376-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/view-of-empty-dining-area-near-glass-windowpane-2103726-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/vintage-interior-of-restaurant-6233-min.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/banner_images/well-arranged-tables-and-chairs-inside-room-2079290-min.jpg
    )
  
price_range = ["cheap", "moderate", "pricey"]
payment_options = ["cash", "credit", "debit"]
dress_code = ["casual", "business casual", "formal"]
dining_style = ["casual", "formal", "elegant"]
recommended = [true, false]
possible_starts = Restaurant.time_slots[12..20]
possible_ends = Restaurant.time_slots[36..-1]
demo_user = User.create(username: 'Demo', password:'test123', fname: 'Demo', lname: 'User');

50.times {
first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
}
users = User.all
Location.create!(name: 'New York', lat: 40.71427, long: -74.00597)
Location.create!(name: 'Chicago', lat: 41.85003, long: -87.65005)
Location.create!(name: 'Los Angeles', lat: 34.05223, long: -118.24368)
Location.create!(name: 'San Francisco', lat: 37.77493, long: -122.41942)
Location.create!(name: 'Miami', lat: 25.77427, long: -80.19366)
Location.create!(name: 'Las Vegas', lat: 36.17497, long: -115.13722)
location_ids = Location.all.pluck(:id)

50.times {
  restaurant_name = Faker::Restaurant.name
  domain = restaurant_name.split(" ").map{|ele| ele.downcase}.join("")
  image = images.delete_at(rand(images.length))
  restaurant = Restaurant.new({
   name:restaurant_name,
   address: Faker::Address.full_address,
   owner_id: users.sample.id,
   location_id: location_ids.sample,
   phone: Faker::PhoneNumber.phone_number,
   neighborhood: Faker::Address.community,
   cross_street: Faker::Address.street_name,
   cuisines:Faker::Restaurant.type,
   description:Faker::Restaurant.description,
   capacity: (25..100).to_a.sample,
   price_range: price_range.sample,
   dining_style: dining_style.sample,
   dress_code: dress_code.sample,
   parking_details: nil,
   public_transit: nil,       
   payment_options: payment_options.sample,
   featured_img_url: image,
   executive_chef: Faker::FunnyName.name,
   start_hour: possible_starts.sample,
end_hour: possible_ends.sample
  })
  coords = RandomLocation.near_by(restaurant.location.lat, restaurant.location.long, 80467)
  restaurant.lat, restaurant.long = coords
  restaurant.hours
  restaurant.save!
  gallery_item = %w(
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-1.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-2.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-3.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-4.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-5.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-6.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-7.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-8.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-9.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-10.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-11.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-12.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-13.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-14.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-15.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-16.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-17.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-18.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-19.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-20.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-21.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-22.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-23.jpg
      https://active-storage-neverwait-seed.s3.amazonaws.com/gallery-item-24.jpg
)
  9.times {
  filename = gallery_item.delete_at(rand(gallery_item.length))
  file = open(filename)
  restaurant.photos.attach(io:file, filename: filename.split("/")[-1])
  }
}

restaurants = Restaurant.all

users.each do |user|
  new_restaurants = restaurants.dup.shuffle
  num = rand(3..15)
  num.times{
    restaurant = new_restaurants.delete_at(rand(new_restaurants.length))
    review = Review.new({
      user_id: user.id,
      restaurant_id: restaurant.id,
      food_rating: Faker::Number.between(from: 1, to: 5),
      service_rating: Faker::Number.between(from: 1, to: 5),
      value_rating: Faker::Number.between(from: 1, to: 5),
      noise_level: Faker::Number.between(from: 1, to: 5),
      ambience_rating: Faker::Number.between(from: 1, to: 5),
      body: Faker::Restaurant.review
    })
    review.total_rating > 2.5 ? review.recommended = true : review.recommended = false
    review.total_rating = review.calc_total_rating
    review.save
    }
end