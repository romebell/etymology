# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all

demo = User.create!({email: "robert1@test.com", username: "robert", password: "password123"})

user1 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user2 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user3 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user4 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user5 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user6 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user7 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user8 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})
user9 = User.create!({username: Faker::Name.name, email: Faker::Internet.email, password: 'password'})

artist1 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist2 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist3 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist4 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist5 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })
artist6 = Artist.create!({ name: Faker::Artist.name, biography: Faker::TvShows::TheFreshPrinceOfBelAir.quote })

album1 = Album.create!({ title: Faker::Music.album, artist_id: artist1.id})
album2 = Album.create!({ title: Faker::Music.album, artist_id: artist1.id})
album3 = Album.create!({ title: Faker::Music.album, artist_id: artist1.id})
album4 = Album.create!({ title: Faker::Music.album, artist_id: artist2.id})
album5 = Album.create!({ title: Faker::Music.album, artist_id: artist2.id})
album6 = Album.create!({ title: Faker::Music.album, artist_id: artist2.id})

playlist1 = Playlist.create!({title: "Bumping Lil Wayne", user_id: demo.id})
playlist2 = Playlist.create!({title: "Bumping to Drake", user_id: demo.id})
playlist3 = Playlist.create!({title: "Vibing to JCole", user_id: user1.id})
playlist4 = Playlist.create!({title: "Singing along to Frank Ocean", user_id: user2.id})
playlist5 = Playlist.create!({title: "Cruising to Sy Ari", user_id: user2.id})

lil_wayne    = Artist.create!({name: "Lil Wayne"}, biography: lil_wayne_biography)
drake        = Artist.create!({name: "Drake"}, biography: drake_biography)
j_cole       = Artist.create!({name: "J Cole"}, biography: j_cole_biography)
frank_ocean  = Artist.create!({name: "Frank Ocean"}, biography: frank_ocean_biography)
sy_ari       = Artist.create!({name: "Sy Ari Da Kid"}, biography: sy_ari_biography)

dedication_3 = Album.create!({ title: "Dedication 3", artist_id: lil_wayne.id})
so_far_gone = Album.create!({ title: "So Far Gone", artist_id: drake.id})
friday_night_lights = Album.create!({ title: "Friday Night Lights", artist_id: j_cole.id})
channel_orange = Album.create!({ title: "Channel Orange", artist_id: frank_ocean.id})
after_the_heartbreak = Album.create!({ title: "After The Heartbreak", artist_id: sy_ari.id})

song1 = Song.create!({ title: "Welcome Back", duration: 57, album_id: dedication_3.id })
song2 = Song.create!({ title: "Dedication 3", duration: 472, album_id: dedication_3.id })
song3 = Song.create!({ title: "What Else is There To Do", duration: 62, album_id: dedication_3.id })
song4 = Song.create!({ title: "Thingy Please", duration: 240, album_id: dedication_3.id })
song5 = Song.create!({ title: "Aint I", duration: 168, album_id: dedication_3.id })
song6 = Song.create!({ title: "You Love Me You Hate Me", duration: 100, album_id: dedication_3.id })
song7 = Song.create!({ title: "Bang Bang", duration: 237, album_id: dedication_3.id })
song8 = Song.create!({ title: "The Other Side", duration: 279, album_id: dedication_3.id })

lil_wayne_biography = "Dwayne Michael Carter Jr. (born September 27, 1982), known professionally as Lil Wayne, 
is an American rapper and singer. In 1993, at the age of 11, he was discovered by Bryan 'Birdman' Williams and 
joined Cash Money Records as the youngest member of the label, and half of the duo The B.G.'z, alongside fellow 
New Orleans-based rapper B.G.. In 1996, Lil Wayne and B.G. joined the southern hip hop group Hot Boys, with Cash 
Money label-mates Juvenile and Turk. Hot Boys debuted with Get It How U Live!, that same year. Most of the group's 
success came with their platinum-selling album Guerrilla Warfare (1999) and the 1999 single 'Bling Bling'. For many 
years, he was the flagship artist of Cash Money Records, before ending his long-tenured deal with the company in June 2018"

drake_biography = "Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper, singer, songwriter, record producer, 
actor, and entrepreneur. Drake initially gained recognition as an actor on the teen drama television series Degrassi: 
The Next Generation in the early 2000s, and intent on pursuing a career in music, he departed the series in 2007 following 
the release of his debut mixtape, Room for Improvement. He released two further independent projects, Comeback Season and 
So Far Gone, before signing to Lil Wayne's Young Money Entertainment in June 2009"

frank_ocean_biography = "Frank Ocean (born Christopher Edwin Cooksey; October 28, 1987) is an American singer, songwriter, 
rapper, record producer and photographer. Ocean began his musical career as a ghostwriter, prior to joining hip hop collective 
Odd Future in 2010, and the following year, released Nostalgia, Ultra, his debut mixtape. The mixtape was a critical success, 
and generated the single 'Novacane', which peaked at number 82 on the Billboard Hot 100 and was later certified platinum. Ocean 
subsequently secured a recording contract with Def Jam Recordings in 2012."

j_cole_biography = "Jermaine Lamar Cole (born January 28, 1985), known professionally as J. Cole, is an American rapper, singer, 
songwriter and record producer. Born on a military base in Germany but raised in Fayetteville, North Carolina, Cole initially 
gained recognition as a rapper following the release of his debut mixtape, The Come Up, in early 2007. Intent on further pursuing 
a solo career as a rapper, he went on to release two additional mixtapes, The Warm Up and Friday Night Lights after signing to 
Jay-Z's Roc Nation imprint in 2009."

sy_ari_biography = "Sy Ari Brockington (born January 8, 1986) is an American singer, songwriter and rapper. Brockington was born 
in The Bronx, New York but moved to Atlanta, Georgia at the age of nine. As a child he dreamed of being a professional basketball 
player, but soon turned to rapping after influence from his brother and cousin. He attended Robert L. Osborne High School, alongside 
rapper K Camp. After graduation, Brockington would appear in battle raps on Atlanta's HOT 107.9 FM, where he was noted for 11 consecutive victories."
