require 'faker'

MAIN_PICS = [
  'photos/images/main_photos/asya-morgunova-136086.jpg',
  'photos/images/main_photos/dan-ritson-213688.jpg',
  'photos/images/main_photos/david-cohen-125049.jpg',
  'photos/images/main_photos/evelyn-paris-95853.jpg',
  'photos/images/main_photos/hollie-harmsworth-401692.jpg',
  'photos/images/main_photos/ian-keefe-449093.jpg',
  'photos/images/main_photos/jakob-puff-461647.jpg',
  'photos/images/main_photos/janos-lamberg-liszkay-446645.jpg',
  'photos/images/main_photos/jelle-harmen-van-mourik-226508.jpg',
  'photos/images/main_photos/jesse-roberts-146556.jpg',
  'photos/images/main_photos/mauricio-artieda-452526.jpg',
  'photos/images/main_photos/michael-shannon-474809.jpg',
  'photos/images/main_photos/pawel-nolbert-316374.jpg',
  'photos/images/main_photos/peter-mason-433159.jpg',
  'photos/images/main_photos/petr-stradal-334529.jpg',
  'photos/images/main_photos/priscilla-du-preez-128958.jpg',
  'photos/images/main_photos/sam-beasley-327822.jpg',
  'photos/images/main_photos/scott-webb-167099.jpg',
  'photos/images/main_photos/terrah-holly-16329.jpg',
  'photos/images/main_photos/timothy-eberly-311459.jpg'
]

STEP_1_DESIGN_PICS = [
  'photos/images/step-1-images/step-1-blueprint-pics/aleks-dorohovich-26.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/brad-neathery-248309.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/damian-zaleski-843.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/daniel-mccullough-348488.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/daniel-mccullough-348489.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/dose-media-337491.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/igor-ovsyannykov-389545.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/igor-ovsyannykov-391062.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/jeff-sheldon-3220.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/josefa-ndiaz-312261.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/kelly-sikkema-251938.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/kelly-sikkema-291518.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/markus-spiske-104910.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/mia-baker-322558.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/patrick-perkins-350622.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/rawpixel-com-303965.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/tamarcus-brown-131428.jpg',
  'photos/images/step-1-images/step-1-blueprint-pics/william-iven-19843.jpg'
]

STEP_2_TOOL_PICS = [
  'photos/images/step-2-tool-pics/step-2-tool-pics/annie-gray-382969.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/barn-images-12223.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/crown-agency-478899.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/elliott-stallion-481648.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/george-pastushok-383925.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/greyson-joralemon-482879.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/greyson-joralemon-482880.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/hal-gatewood-336681.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/hunter-haley-424256.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/igor-ovsyannykov-252342.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/igor-ovsyannykov-267689.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/lemur-360642.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/matt-artz-353290.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/neonbrand-357018.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/silvia-brazzoduro-431498.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/taduuda-76960.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/taduuda-76964.jpg',
  'photos/images/step-2-tool-pics/step-2-tool-pics/todd-quackenbush-701.jpg'
]

STEP_3_CONTRUCT_PICS = [
  'photos/images/step-3-constructing-pics/step-3-building-pics/adi-goldstein-257316.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/agence-producteurs-locaux-damien-kuhn-97731.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/alex-radelich-318997.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/annie-gray-382969.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/christopher-burns-368617.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/evan-clark-114123.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/frank-mckenna-132740.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/greyson-joralemon-482882.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/h-e-n-g-s-t-r-e-a-m-180108.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-217309.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-219666.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-252356.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-342517.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/igor-ovsyannykov-474439.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/kelvyn-ornettte-sol-marte-451894.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/m0851-55542.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/maique-madeira-256088.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/manki-kim-431572.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/max-larochelle-404405.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/max-larochelle-443117.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/mh-tri-259076.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/mirco-bazzani-355521.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/nathan-lemon-77062.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/nicolas-hoizey-455603.jpg',
  'photos/images/step-3-constructing-pics/step-3-building-pics/zhipeng-ya-345515.jpg'
]

Project.destroy_all
Step.destroy_all
users = User.all

15.times do

end
