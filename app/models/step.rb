# == Schema Information
#
# Table name: steps
#
#  id                 :integer          not null, primary key
#  title              :string
#  body               :text
#  project_id         :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Step < ApplicationRecord
  # validates :project_id, presence: true


  belongs_to :project, inverse_of: :steps

  has_many :photos, inverse_of: :step
  accepts_nested_attributes_for :photos

end
