# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

u1 = User.create!({email: 'mike@example.com', username: 'guest demo', password: 'hunter12'})
u2 = User.create!({email: 'hunter12@example.com', username: 'hunter12', password: 'hunter12'})
u3 = User.create!({email: 'starwars@example.com', username: 'starwars', password: 'starwars'})

p1 = Project.create!({ title: "how to build a house", body: "This is a guide to build a house", author_id: u1.id })
p1 = Project.create!({ title: "how to build a shed", body: "This is a guide to build a shed", author_id: u2.id })
p1 = Project.create!({ title: "how to build the death star", body: "This is a guide to build the death star", author_id: u3.id })
p1 = Project.create!({ title: "how to build a car", body: "This is a guide to build a car", author_id: u1.id })
p1 = Project.create!({ title: "how to build a desk", body: "This is a guide to build a desk", author_id: u2.id })
p1 = Project.create!({ title: "how to build the garage", body: "This is a guide to build the garage", author_id: u3.id })
