# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ApplicationRecord
  validates :title, :author_id, presence: true

  accepts_nested_attributes_for :steps, :photos

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  has_many :steps, inverse_of: :project

  has_many :photos,
    through: :steps,
    source: :photos

end
