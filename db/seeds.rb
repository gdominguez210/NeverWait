# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.delete_all
# User.new(username: 'Demo', password:'test123').save!
Restaurant.delete_all
Restaurant.create({
 name: "MMMMM GOOD FOOD",
 address: "200 W 44th, New York, NY 10036",
 phone: "(212) 221-3800",
 owner_id: 5,
 location_id: 1,
 lat: 0.40757506e2,
 long: -0.73986686e2,
 description:
  "Bacon ipsum dolor amet bacon chuck kielbasa jowl fatback prosciutto short ribs spare ribs ham rump ground round corned beef hamburger doner pork loin. Strip steak pork belly pastrami tenderloin shoulder. Turducken drumstick tongue bresaola buffalo, ground round leberkas. Filet mignon pork chop chuck frankfurter venison pastrami strip steak sausage turkey brisket fatback chicken turducken biltong.",
 website: "https://allthebacon.com/",
 price_range: "cheap",
 capacity: 50,
 cross_street: nil,
 neighborhood: "Brooklyn",
 hours_of_operation:
  "Breakfast Monday to Friday 8am to11am, Brunch Saturday, and Sunday 9am to 3:45pm, Lunch Monday to Friday 11:30 to 3:30pm, Dinner Sunday to Wednesday 5 pm to 11 pm, Thursday to Saturday 5 pm to 12 Midnight.",
 cuisines: "BACON",
 dining_style: "casual",
 dress_code: "casual",
 parking_details: nil,
 public_transit: nil,
 payment_options: nil,
 executive_chef: nil,
 additional: nil,
 featured_img_url: "after-business-hours-architecture-bar.jpg"});