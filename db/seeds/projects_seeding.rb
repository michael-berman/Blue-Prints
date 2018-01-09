require 'faker'

MAIN_PICS = [
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/asya-morgunova-136086.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/dan-ritson-213688.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/david-cohen-125049.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/evelyn-paris-95853.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/hollie-harmsworth-401692.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/ian-keefe-449093.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/jakob-puff-461647.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/janos-lamberg-liszkay-446645.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/jelle-harmen-van-mourik-226508.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/jesse-roberts-146556.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/mauricio-artieda-452526.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/michael-shannon-474809.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/pawel-nolbert-316374.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/peter-mason-433159.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/petr-stradal-334529.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/priscilla-du-preez-128958.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/sam-beasley-327822.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/scott-webb-167099.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/terrah-holly-16329.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/main_photos/timothy-eberly-311459.jpg'
]

STEP_1_DESIGN_PICS = [
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/aleks-dorohovich-26.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/brad-neathery-248309.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/damian-zaleski-843.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/daniel-mccullough-348488.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/daniel-mccullough-348489.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/dose-media-337491.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/igor-ovsyannykov-389545.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/igor-ovsyannykov-391062.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/jeff-sheldon-3220.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/josefa-ndiaz-312261.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/kelly-sikkema-251938.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/kelly-sikkema-291518.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/markus-spiske-104910.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/mia-baker-322558.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/patrick-perkins-350622.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/rawpixel-com-303965.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/tamarcus-brown-131428.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-1-images/step-1-blueprint-pics/william-iven-19843.jpg'
]

STEP_2_TOOL_PICS = [
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/annie-gray-382969.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/barn-images-12223.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/crown-agency-478899.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/elliott-stallion-481648.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/george-pastushok-383925.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/greyson-joralemon-482879.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/greyson-joralemon-482880.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/hal-gatewood-336681.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/hunter-haley-424256.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/igor-ovsyannykov-252342.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/igor-ovsyannykov-267689.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/lemur-360642.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/matt-artz-353290.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/neonbrand-357018.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/silvia-brazzoduro-431498.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/taduuda-76960.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/taduuda-76964.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-2-tool-pics/step-2-tool-pics/todd-quackenbush-701.jpg'
]

STEP_3_CONTRUCT_PICS = [
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/adi-goldstein-257316.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/agence-producteurs-locaux-damien-kuhn-97731.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/alex-radelich-318997.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/annie-gray-382969.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/christopher-burns-368617.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/evan-clark-114123.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/frank-mckenna-132740.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/greyson-joralemon-482882.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/h-e-n-g-s-t-r-e-a-m-180108.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-217309.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-219666.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-252356.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-342517.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-474439.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/kelvyn-ornettte-sol-marte-451894.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/m0851-55542.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/maique-madeira-256088.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/manki-kim-431572.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/max-larochelle-404405.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/max-larochelle-443117.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/mh-tri-259076.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/mirco-bazzani-355521.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/nathan-lemon-77062.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/nicolas-hoizey-455603.jpg',
  'https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/images/step-3-constructing-pics/step-3-building-pics/zhipeng-ya-345515.jpg'
]

# FAKE_TITLES = [
#   ''
# ]

users = User.all


(MAIN_PICS[0..7]).each do |main_pic|
  project = Project.create!({ title: Faker::Lorem.sentence(4),
                    author_id: users.sample.id})

  # step 0 creation
  step0 = Step.create!({title: Faker::Lorem.sentence(4),
                  body: Faker::Lorem.paragraphs(2).join(" "),
                  project_id: project.id})
  #photos for step 0
  p = Photo.new({ step_id: step0.id})
  p.image = open(MAIN_PICS.sample)
  p.save!

  # step 1 creation
  step1 = Step.create!({title: Faker::Lorem.sentence(4),
                  body: Faker::Lorem.paragraphs(2).join(" "),
                  project_id: project.id})
  # photos for step 1
  (rand(2) + 1).times do
    p = Photo.new({ step_id: step1.id})
    p.image = open(STEP_1_DESIGN_PICS.sample)
    p.save!
  end
  #
  # # step 2 creation
  step2 = Step.create!({title: Faker::Lorem.sentence(4),
                  body: Faker::Lorem.paragraphs(2).join(" "),
                  project_id: project.id})
  #photos for step 3
  (rand(2) + 1).times do
    p = Photo.new({ step_id: step2.id})
    p.image = open(STEP_2_TOOL_PICS.sample)
    p.save!
  end

  # # step 3 creation
  step3 = Step.create!({title: Faker::Lorem.sentence(4),
                  body: Faker::Lorem.paragraphs(2).join(" "),
                  project_id: project.id})
  #photos for step 4
  (rand(2) + 1).times do
    p = Photo.new({ step_id: step3.id})
    p.image = open(STEP_3_CONTRUCT_PICS.sample)
    p.save!
  end
end
