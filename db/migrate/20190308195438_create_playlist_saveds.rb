class CreatePlaylistSaveds < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_saveds do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps
    end

    add_index :playlist_saveds, :playlist_id
    add_index :playlist_saveds, :song_id	

  end
end