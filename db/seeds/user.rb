require 'faker'

MALE__PROFILE_PICTURES = [
  'photos/images/profile-picture-seeds/profile_pics/annette-keys-42075.jpg',
  'photos/images/profile-picture-seeds/profile_pics/felix-russell-saw-113844.jpg',
  'photos/images/profile-picture-seeds/profile_pics/daniele-levis-pelusi-385076.jpg',
  'photos/images/profile-picture-seeds/profile_pics/erwan-hesry-99395.jpg',
  'photos/images/profile-picture-seeds/profile_pics/ian-dooley-407897.jpg',
  'photos/images/profile-picture-seeds/profile_pics/jessy-paston-127537.jpg',
  'photos/images/profile-picture-seeds/profile_pics/joshua-sazon-373580.jpg',
  'photos/images/profile-picture-seeds/profile_pics/katie-treadway-171141.jpg',
  'photos/images/profile-picture-seeds/profile_pics/luke-porter-98215.jpg',
  'photos/images/profile-picture-seeds/profile_pics/matheus-ferrero-350443.jpg',
  'photos/images/profile-picture-seeds/profile_pics/natalie-pedigo-306019.jpg',
  'photos/images/profile-picture-seeds/profile_pics/nathaniel-kohfield-337185.jpg',
  'photos/images/profile-picture-seeds/profile_pics/nick-karvounis-142021.jpg',
  'photos/images/profile-picture-seeds/profile_pics/paulo-brandao-1001.jpg',
  'photos/images/profile-picture-seeds/profile_pics/priscilla-du-preez-318420.jpg',
  'photos/images/profile-picture-seeds/profile_pics/remi-skatulski-101224.jpg',
  'photos/images/profile-picture-seeds/profile_pics/roland-seifert-16528.jpg',
  'photos/images/profile-picture-seeds/profile_pics/sam-manns-378189.jpg'
]

# TODO: add background pics to each user

20.times do
  User.create!({
    username: Faker::Name.name.join,
    password: Faker::Name.name.join,
    email: Faker::Internet.email
  })
end
