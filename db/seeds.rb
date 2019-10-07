# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.delete_all
# User.new(username: 'Demo', password:'test123').save!
require 'faker'
User.destroy_all
Restaurant.destroy_all
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
users = []
price_range = ["cheap", "moderate", "pricey"]
payment_options = ["cash", "credit", "debit"]
dress_code = ["casual", "business casual", "formal"]
dining_style = ["casual", "formal", "elegant"]
demo_user = User.create(username: 'Demo', password:'test123');

first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user1 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user1)

first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user2 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user2)

first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user3 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user3)

first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user4 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user4)

first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user5 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user5)

first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user6 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user6)

first_name = Faker::Name.unique.first_name
last_name = Faker::Name.unique.last_name
user7 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user7)


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
