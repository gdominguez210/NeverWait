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
images = %w(
      /assets/chairs-coffee-shop-drinking-glasses.jpg
      /assets/bar-city-commerce.jpg
      /assets/bar-ceiling-chairs.jpg
      /assets/balcony-chairs-contemporary.jpg
      /assets/bar-cafe-chairs.jpg
      /assets/architecture-contemporary-flowers.jpg
      /assets/architecture-chair-coffee.jpg
      /assets/architecture-buildings-city.jpg
      /assets/architecture-brickwall-chairs.jpg
      /assets/after-business-hours-architecture-bar.jpg
    )
users = []
price_range = ["cheap", "moderate", "pricey"]
payment_options = ["cash", "credit", "debit"]

demo_user = User.create(username: 'Demo', password:'test123');

first_name = Fake::Name.unique.first_name
last_name = Fake::Name.unique.last_name
user1 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user1)

first_name = Fake::Name.unique.first_name
last_name = Fake::Name.unique.last_name
user2 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user2)

first_name = Fake::Name.unique.first_name
last_name = Fake::Name.unique.last_name
user3 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user3)

first_name = Fake::Name.unique.first_name
last_name = Fake::Name.unique.last_name
user4 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user4)

first_name = Fake::Name.unique.first_name
last_name = Fake::Name.unique.last_name
user5 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user5)

first_name = Fake::Name.unique.first_name
last_name = Fake::Name.unique.last_name
user6 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user6)

first_name = Fake::Name.unique.first_name
last_name = Fake::Name.unique.last_name
user7 = User.create({username: Faker::Internet.email(name: first_name), fname: first_name, lname: last_name, password: Faker::Internet.password(min_length: 6) })
users.push(user7)


restaurant_name = Faker::Restaurant.name
domain = restaurant_name.split(" ").map{|ele| ele.downcase}.join("")
restaurant = Restaurant.create({
name:restaurant_name,
 address: Faker::Address.full_address,
 owner_id: users.sample.id,
 phone: Faker::PhoneNumber.phone_number,
 website: "https://`#{domain}.com/`",
 neighborhood: Faker::Address.community,
 cross_street: Faker::Address.street_name,
 cuisines:Faker::Restaurant.type,
 lat: Faker::Address.latitude,
 long: Faker::Address.longitude,
 description:Faker::Restaurant.description,
 capacity: (25..100).to_a.sample,
 price_range: price_range.sample,
 dining_style: nil,
 dress_code: nil,
 parking_details: nil,
 public_transit: nil,       
 payment_options: payment_options.sample
 featured_img_url: images.sample,
 executive_chef: Faker::FunnyName.name
})
 # Restaurant.delete_all
 # Restaurant.create({
 #  name: "MMMMM GOOD FOOD",
 #  address: "200 W 44th, New York, NY 10036",
 #  phone: "(212) 221-3800",
 #  owner_id: 1,
 #  location_id: 1,
 #  lat: 0.40757506e2,
 #  long: -0.73986686e2,
 #  description:
 #   "Bacon ipsum dolor amet bacon chuck kielbasa jowl fatback prosciutto short ribs spare ribs ham rump ground round corned beef hamburger doner pork loin. Strip steak pork belly pastrami tenderloin shoulder. Turducken drumstick tongue bresaola buffalo, ground round leberkas. Filet mignon pork chop chuck frankfurter venison pastrami strip steak sausage turkey brisket fatback chicken turducken biltong.",
 #  website: "https://allthebacon.com/",
 #  price_range: "cheap",
 #  capacity: 50,
 #  cross_street: nil,
 #  neighborhood: "Brooklyn",
 #  hours_of_operation:
 #   "Breakfast Monday to Friday 8am to 11am, Brunch Saturday, and Sunday 9am to 3:45pm, Lunch Monday to Friday 11:30 to 3:30pm, Dinner Sunday to Wednesday 5 pm to 11 pm, Thursday to Saturday 5 pm to 12 Midnight.",
 #  cuisines: "BACON",
 #  dining_style: "casual",
 #  dress_code: "casual",
 #  parking_details: nil,
 #  public_transit: nil,
 #  payment_options: nil,
 #  executive_chef: nil,
 #  additional: nil,
 #  featured_img_url: "after-business-hours-architecture-bar.jpg"});