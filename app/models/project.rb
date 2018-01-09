# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Project < ApplicationRecord
  validates :title, :author_id, presence: true

  # accepts_nested_attributes_for :steps

  has_attached_file :cover_image, styles: { thumb: '300x300>'}
  validates_attachment_content_type :cover_image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  has_many :steps, inverse_of: :project

  has_many :photos,
    through: :steps,
    source: :photos

end
