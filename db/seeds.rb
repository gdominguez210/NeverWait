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
    )
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
users = []
price_range = ["cheap", "moderate", "pricey"]
payment_options = ["cash", "credit", "debit"]
dress_code = ["casual", "business casual", "formal"]
dining_style = ["casual", "formal", "elegant"]
recommended = [true, false]
demo_user = User.create(username: 'Demo', password:'test123', fname: 'Demo', lname: 'User');

10.times {
first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user)
}

10.times {
  restaurant_name = Faker::Restaurant.name
  domain = restaurant_name.split(" ").map{|ele| ele.downcase}.join("")
  image = images.delete_at(rand(images.length))
  restaurant = Restaurant.create!({
    name:restaurant_name,
   address: Faker::Address.full_address,
   owner_id: users.sample.id,
   location_id: Faker::Number.digit,
   phone: Faker::PhoneNumber.phone_number,
   neighborhood: Faker::Address.community,
   cross_street: Faker::Address.street_name,
   cuisines:Faker::Restaurant.type,
   lat: Faker::Address.latitude,
   long: Faker::Address.longitude,
   description:Faker::Restaurant.description,
   capacity: (25..100).to_a.sample,
   price_range: price_range.sample,
   dining_style: dining_style.sample,
   dress_code: dress_code.sample,
   parking_details: nil,
   public_transit: nil,       
   payment_options: payment_options.sample,
   featured_img_url: image,
   executive_chef: Faker::FunnyName.name
  })
  9.times {
  filename = gallery_item.sample
  file = open(filename)
  restaurant.attach(io:file, filename: filename.split("/")[-1])
  }
}

restaurants = Restaurant.all

20.times{
review = Review.new({
  user_id: users.sample.id,
  restaurant_id: restaurants.sample.id,
  food_rating: Faker::Number.between(from: 1, to: 5),
  service_rating: Faker::Number.between(from: 1, to: 5),
  value_rating: Faker::Number.between(from: 1, to: 5),
  noise_level: Faker::Number.between(from: 1, to: 5),
  ambience_rating: Faker::Number.between(from: 1, to: 5),
  body: Faker::Restaurant.review
  })
  review.recommended = recommended.sample,
review.total_rating = review.calc_total_rating
review.save
}
