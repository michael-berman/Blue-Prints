# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :text
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord


  belongs_to :project

end
