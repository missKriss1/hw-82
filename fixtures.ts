import mongoose from "mongoose";
import config from "./config";
import Artist from "./models/Artist";
import Album from "./models/Album";
import Track from "./models/Track";

const run = async () => {
    await mongoose.connect(config.db);

    const db = mongoose.connection;

    try{
        await db.dropCollection('artists');
        await db.dropCollection('tracks');
        await db.dropCollection('albums');
        await db.dropCollection('trackHistories');
        await db.dropCollection('users');
    }catch(err){
        console.log(err);
    }

    const [John, Jane] = await Artist.create(
        {
            name: 'John',
            information: 'hello',
            image:"fixtures/artist_1.jpg"
        },
        {
            name: 'Jane',
            information: 'hello Jane',
            image:"fixtures/artist_2.jpg"
        })
    const [albumJohn1, albumJohn2, albumJane1,  albumJane2] = await Album.create(
        {
            title: 'test',
            artist: John._id,
            date: 2023,
            image: 'fixtures/artist_1_album1.jpg'
        },
        {
            title: 'test',
            artist: John._id,
            date: 2020,
            image: 'fixtures/artist_1_album2.jpg'
        },
        {
            title: 'test',
            artist: Jane._id,
            date: 2020,
            image: 'fixtures/artist_2_album1.jpg'
        },
        {
            title: 'test',
            artist: Jane._id,
            date: 2020,
            image: 'fixtures/artist_2_album2.jpg'
        })
     await Track.create(
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: 'track 1',
            number: 1
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: 'track 2',
            number: 2
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: 'track 3',
            number: 3
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: 'track 4',
            number: 4
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: 'track 5',
            number: 5
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: 'track 6',
            number: 6
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: 'track 7',
            number: 7
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: 'track 8',
            number: 8
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: 'track 9',
            number: 9
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: 'track 10',
            number: 10
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: 'track 11',
            number: 11
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: 'track 12',
            number: 12
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: 'track 13',
            number: 13
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: 'track 14',
            number: 14
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: 'track 15',
            number: 15
        },
        {
            title: 'Music by jane2',
            album: albumJane2._id,
            continuance: 'track 16',
            number: 16
        },
        {
            title: 'Music by jane2',
            album: albumJane1._id,
            continuance: 'track 17',
            number: 17
        },
        {
            title: 'Music by jane2',
            album: albumJane1._id,
            continuance: 'track 18',
            number: 18
        },
        {
            title: 'Music by jane2',
            album: albumJane1._id,
            continuance: 'track 19',
            number: 19
        },
        {
            title: 'Music by jane2',
            album: albumJane1._id,
            continuance: 'track 20',
            number: 20
        },
        )
    await db.close()

}

run().catch(console.error)