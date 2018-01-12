require 'faker'

profile_pictures = [
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/felix-russell-saw-113844.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/daniele-levis-pelusi-385076.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/erwan-hesry-99395.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/ian-dooley-407897.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/jessy-paston-127537.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/katie-treadway-171141.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/luke-porter-98215.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/natalie-pedigo-306019.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/nathaniel-kohfield-337185.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/nick-karvounis-142021.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/paulo-brandao-1001.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/priscilla-du-preez-318420.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/remi-skatulski-101224.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/roland-seifert-16528.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/sam-manns-378189.jpg'
]

# TODO: add background pics to each user
demo = User.new({email: 'mike@example.com',
                username: 'guest demo',
                password: 'hunter12'})

demo.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/profile-picture-seeds/profile_pics/gary-bendig-288538.jpg')
demo.save!

profile_pictures.shuffle!

profile_pictures[0..5].each do |pro_picture|
  user = User.new({
    username: Faker::Name.name,
    password: "password123",
    email: Faker::Internet.email
  })
  user.image = open(pro_picture)
  user.save!
end
