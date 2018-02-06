# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  author_id  :integer
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ApplicationRecord
  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id

end
