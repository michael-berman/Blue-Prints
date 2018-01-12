require 'faker'

users = User.all

project1 = Project.new({ title: 'building a 2 dollar bird house',
                          author_id: users.sample.id,
                          image: open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/background_image.jpg')})
project1.save!
step1 = Step.create!({title: 'Materials',
                body: 'Materials
Some good 1x6 stock, at least 5 feet per house. If using Cedar Pickets, try to find some that are not badly warped and have a uniform thickness. Remember to look for wood that you can recycle!

Indoor/Outdoor wood glue, such as Elmers, nothing fancy is needed.

1&1/4 inch brads, if you plan to use a nail gun, similar sized 16-18 gauge will work very nicely.

Perch is a 1/4 inch twig or other interesting device, such as a Golf Tee, rusty screw, basically anything a small bird would be comfortable perching on.

Tools
As basic as a miter box and saw, all the way to a chop saw and table saw if you have them.

Hammer and drill for pre-drilling holes or an air powered nailer (16-18 gauge is all you need).

Eventually, you will need a hole saw, probably 1&1/4 inch, but go to 1&3/8 inch if you have Bluebirds.',
                project_id: project1.id })

p = Photo.new({ step_id: step1.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+1/step1_1.jpg')
p.save!
p = Photo.new({ step_id: step1.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+1/step1_2.jpg')
p.save!
p = Photo.new({ step_id: step1.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+1/step1_3.jpg')
p.save!

step2 = Step.create!({title: 'Getting Started & Saw Work...',
                      body: `Before getting started, consider where you want to put the birdhouse. Choose the hanging or flush mount Instructable. This Instructable is for the hanging birdhouse is the basis for the flush mount birdhouse, so you will benefit from reading on.

Saw Work: Cut four 9" pieces for the gable ends and roof pieces. Cut two 6" side pieces. Save the scrap for the floor. If you started with a 6' picket, you will have enough scrap to build a tool box - I will be working on the toolbox Instructable soon.

Optional saw work, trim one edge of one roof piece the width of the material. This will result in a symmetrical roof, but the birds won't notice!

PICTURES ARE INSTRUCTIONS, SO VIEW ALL OF THEM`,
                      project_id: project1.id })

p = Photo.new({ step_id: step2.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+2/step2_1.jpg')
p.save!
p = Photo.new({ step_id: step2.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+2/step2_2.jpg')
p.save!

step3 = Step.create!({title: 'Assembly - the Fun Part!',
                      body: `All points of attachment are glued with Elmer's indoor/outdoor Wood Glue, or equivalent, then nailed into place. VIEW ALL PICTURES AS THEY ARE THE INSTRUCTIONS...`,
                      project_id: project1.id })

p = Photo.new({ step_id: step3.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+3/step3_2.jpg')
p.save!
p = Photo.new({ step_id: step3.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+3/step3_3.jpg')
p.save!

step4 = Step.create!({title: 'A Front Door and a Perch...',
                      body: `For most urban birdhouses, an entrance of 1&1/4 inch will be good. Nuthatches, Chickadees, and Sparrows will be your most likely tenants. If you are lucky enough to have Bluebirds, you'll need to increase the hole size to 1&1/2 inches. A hole saw makes a nice smooth hole, but check for splinters inside the home.

A twig, slightly larger than the hole works great. Strip the bark off with a knife and glue in place. Usually, the perch is placed 2 inches below the centerline of the entrance.

The pictures are the instructions, so view them all...`,
                      project_id: project1.id })

p = Photo.new({ step_id: step4.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+4/step4_1.jpg')
p.save!
p = Photo.new({ step_id: step4.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+4/step4_2.jpg')
p.save!
p = Photo.new({ step_id: step4.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+4/step4_3.jpg')
p.save!

step5 = Step.create!({title: 'A Floor (clean Out Hatch) and a Wire for Hanging...',
                      body: `Although it is not completely necessary a clean out hatch is a good idea. Many birds will clean out a house themselves, but an occasional problem might render the nest unused. I have found dead birds, wasp nests, and so much nesting material that I needed access to clean.

When installing the floor, it is easiest to place the house on top of the floor and nail in from the sides. Remember to leave a gap for the action of the hinge, which consists of a nail driven in each side towards one end of the floor.

The house will need some type of hardware to hang it from. An old wire hanger, a scrap of wire, a small chain, etc... I have found that installing the hanger on alternate sides of the roof results in a stable house. (You'll understand when you see the pictures.)

VIEW ALL PICTURES AS THEY ARE THE INSTRUCTIONS.`,
                      project_id: project1.id })

p = Photo.new({ step_id: step5.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+5/step5_2.jpg')
p.save!
p = Photo.new({ step_id: step5.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+5/step_1.jpg')
p.save!

step6 = Step.create!({title: 'Final Thoughts...',
                      body: `Try to locate the birdhouse in a shaded area that is free from hazards. About eye level is high enough to keep cats away, but not so high to cause a hazard to chicks, who might make a crash landing during their first flight. Trees are a good place to hang a house, but keep an eye out for squirrels. I hope you enjoyed this Instructable. I will try to keep an eye on comments, in case you have a question. Check out my birdhouse maintenance Instructable Enjoy!`,
                      project_id: project1.id })

p = Photo.new({ step_id: step6.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/birdtreehouse/step+5/step_3.jpg')
p.save!
