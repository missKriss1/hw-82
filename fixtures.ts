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
            image:"fixtures/artist.2.jpg"
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
            date: 2019,
            image: 'fixtures/artist_1_album2.jpg'
        },
        {
            title: 'test',
            artist: Jane._id,
            date: 2005,
            image: 'fixtures/artist_2_album1.jpg'
        },
        {
            title: 'test',
            artist: Jane._id,
            date: 2009,
            image: 'fixtures/artist_2_album2.jpg'
        })
     await Track.create(
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: ' 1:23',
            number: 1
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: ' 2:22',
            number: 2
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: ' 3:11',
            number: 3
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: ' 5:74',
            number: 4
        },
        {
            title: 'Music by john1',
            album: albumJohn1._id,
            continuance: '1:25',
            number: 5
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: '6:86',
            number: 1
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: ' 1:27',
            number: 2
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: ' 2:28',
            number: 3
        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: ' 1:09',
            number: 4

        },
        {
            title: 'Music by john2',
            album: albumJohn2._id,
            continuance: ' 1:10',
            number: 5
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: ' 3:11',
            number: 1
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: ' 4:12',
            number: 2
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: '5:13',
            number: 3
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: ' 3:14',
            number: 4
        },
        {
            title: 'Music by jane1',
            album: albumJane1._id,
            continuance: '2:15',
            number: 5
        },
        {
            title: 'Music by jane2',
            album: albumJane2._id,
            continuance: '2:16',
            number: 1
        },
        {
            title: 'Music by jane2',
            album: albumJane2._id,
            continuance: '1:17',
            number: 2
        },
        {
            title: 'Music by jane2',
            album: albumJane2._id,
            continuance: '2:18',
            number: 3
        },
        {
            title: 'Music by jane2',
            album: albumJane2._id,
            continuance: '11:19',
            number: 4
        },
        {
            title: 'Music by jane2',
            album: albumJane2._id,
            continuance: '15:20',
            number: 5
        },
        )
    await db.close()

}

run().catch(console.error)