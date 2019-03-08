# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, presence: { message: 'Playlist title can\'t be blank'}
  
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_one_attached :photo


    def generate_photo
      if self.photo.attached?
        self.photo
      else
        "https://upload.wikimedia.org/wikipedia/en/7/78/Dedication3wayne.jpg"
      end
    end
end

