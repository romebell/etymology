class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :duration, null: false 
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps
    end

    add_index :songs, :title 
    add_index :songs, :artist_id
    add_index :songs, :album_id

  end
end
