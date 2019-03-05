class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps
    end
    
    add_index :playlists, :user_id
    add_index :playlists, :title

  end
end
