# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all
Step.destroy_all


require_relative './seeds/user_seeding.rb'
# require_relative './seeds/projects_seeding'
require_relative './seeds/projects/project_seed_1.rb'
require_relative './seeds/projects/project_seed_2.rb'
