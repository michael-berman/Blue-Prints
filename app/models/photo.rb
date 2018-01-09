# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  step_id            :integer          not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Photo < ApplicationRecord
  # validates :step_id, null: false

  has_attached_file :image, styles: {
                                avatar: '100x100#',
                                thumb: '300x300>'}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :step, inverse_of: :photos
end
