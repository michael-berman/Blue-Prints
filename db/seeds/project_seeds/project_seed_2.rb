require 'faker'

users = User.all

project1 = Project.new({ title: 'building a bird trap',
                          author_id: users.sample.id,
                          image: open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/backgroundimage.jpg')})

step1 = Step.create!({title: '',
                body: 'I have been raising rabbits for nearly two years and in that time I have built several hutches.  Some of my designs for these hutches originated from the books I have read on raising rabbits and over the course of the years I have come up with different designs.  Every time I build a hutch I refine my design and incorporate the new features in future builds.  The hutch I am building now is the eighth in my series of builds.  It is designed so that I can keep 3-6 young rabbits within and move the hutch every day to new areas of grass.

This is my first attempt at an Instructable.    I would welcome any constructive feedback.

If you are interested in my work please check out my blog at Little Tassie Prepper.',
                project_id: project1.id })

p = Photo.new({ step_id: step1.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step+1/step1_1.jpg')
p.save!
p = Photo.new({ step_id: step1.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step+1/step1_2.jpg')
p.save!
p = Photo.new({ step_id: step1.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step+1/step1_3.jpg')
p.save!

step2 = Step.create!({title: '',
                      body: `I cut four lengths of wood to 150cm.  These would form the long sections of the frame. Behind the four pieces I have set two lengths of wood to show their original form.  These sections of wood were sourced from some very long pallets.  I selected the length of 150cm as this would mean that the original lengths of wood could be cut in half (they were three meters long) and I decided that this length would allow a suitable area for the rabbits.`,
                      project_id: project1.id })

p = Photo.new({ step_id: step2.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step+2/step2_1.jpg')
p.save!

step3 = Step.create!({title: '',
                      body: `Next I cut 1 meter sections from the structural parts of pallets.  These structural pieces form the solid part of the pallet (to which the planks are nailed).  I felt that these were strong pieces of wood that would be useful as the vertical and horizontal pieces to join the longer beams.

I required 8 pieces to complete the structural parts of the hutch.`,
                      project_id: project1.id })

p = Photo.new({ step_id: step3.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step+3/step3_1.jpg')
p.save!

step4 = Step.create!({title: '',
                      body: `I began attaching the vertical sections of wood, still using the bottom as a template.  This assisted in making sure the pieces were a suitable fit.  As I was building on uneven ground I could not use a spirit level to make sure the vertical sections were at the correct angle.  Using the bottom assisted in this.

`,
                      project_id: project1.id })

p = Photo.new({ step_id: step4.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step4.jpg')
p.save!

step5 = Step.create!({title: '',
                      body: `Once all the vertical sections were attached to the bottom I lifted the top section (which had been sitting on the bottom section) and nailed it to the vertical parts.  They fitted perfectly.

You can now see that the structure is essentially complete.  Time to furnish it.`,
                      project_id: project1.id })

p = Photo.new({ step_id: step5.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step5_1.jpg')
p.save!
p = Photo.new({ step_id: step5.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step5_2.jpg')
p.save!
p = Photo.new({ step_id: step5.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step5_3.jpg')
p.save!

step6 = Step.create!({title: '',
                      body: `Using a staple gun I attached a section of wire which was previously used in fencing.  I used wire with a large opening to allow the rabbits good access to the grass that will be under the hutch.

For some reason, between steps, my children felt that the structure needed to be filled with rocks. `,
                      project_id: project1.id })

p = Photo.new({ step_id: step6.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step6.jpg')
p.save!

step6 = Step.create!({title: '',
                      body: `Now I add panels to the roof section of the Rabbits sleeping area.  These need to fit well to keep the rain out.

Finally comes the lid to the hutch.  I decide upon a 2/3 sized lid, as I do not need to access their sleeping area, and I am also out of wood to fit this whole length.  It is a simple matter of making a rectangle from the wood and nailing it into shape.  I used the hutch top as a template to make sure it fit while I nailed it.  Once created, I attach wire to the lid and then screw the hinges into place.

Finished... one rabbit hutch.`,
                      project_id: project1.id })

p = Photo.new({ step_id: step6.id})
p.image = open('https://s3.amazonaws.com/BLUE-PRINTS-DEV/photos/bird+trap/step7.jpg')
p.save!
