import express from "express";
import Artist from "../models/Artist";
import {imagesUpload} from "../multer";

const artistsRouter = express.Router();

artistsRouter.get('/', async (req, res, next) => {
    try{
        const artists = await Artist.find()
        res.send(artists)
    }catch (e){
        next(e)
    }
})

artistsRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
    const artistsData = {
        name: req.body.name,
        information: req.body.information,
        image: req.file ? req.file.filename : null
    }

    try{
        const artist = new Artist(artistsData)
        await artist.save()
        res.send(artist)
    }catch (e){
        next(e)
    }
})


export default artistsRouter