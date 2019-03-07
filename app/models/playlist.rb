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
        "https://media.brides.com/photos/5994759d8c2b365d5c23c0c5/1:1/w_767/A.P.%2520Bio%2520rose%2520detail.png"
      end
    end
end

