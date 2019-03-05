# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Playlist.destroy_all

demo = User.create!({email: "user001@test.com", username: "Robert", password: "password123"})

user1 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user2 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user3 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user4 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user5 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user6 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user7 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user8 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user9 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})

playlist1 = Playlist.create!({title: Faker::Music.album, user_id: user1.id})
playlist2 = Playlist.create!({title: Faker::Music.album, user_id: user1.id})
playlist3 = Playlist.create!({title: Faker::Music.album, user_id: user1.id})
playlist4 = Playlist.create!({title: Faker::Music.album, user_id: user2.id})
playlist5 = Playlist.create!({title: Faker::Music.album, user_id: user2.id})
playlist6 = Playlist.create!({title: Faker::Music.album, user_id: user2.id})

artist1 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist2 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist3 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist4 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist5 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist6 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })

album1 = Album.create!({ title: Faker::Music.album })
album2 = Album.create!({ title: Faker::Music.album })
album3 = Album.create!({ title: Faker::Music.album })
album4 = Album.create!({ title: Faker::Music.album })
album5 = Album.create!({ title: Faker::Music.album })
album6 = Album.create!({ title: Faker::Music.album })

song1 = Song.create!({ title: Faker::Music.album, duration: 200 })
song2 = Song.create!({ title: Faker::Music.album, duration: 200 })
song3 = Song.create!({ title: Faker::Music.album, duration: 200 })
song4 = Song.create!({ title: Faker::Music.album, duration: 200 })
song5 = Song.create!({ title: Faker::Music.album, duration: 200 })
song6 = Song.create!({ title: Faker::Music.album, duration: 200 })