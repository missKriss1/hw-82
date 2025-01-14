import express from "express";
import Track from "../models/Track";
import mongoose from "mongoose";

const tracksRouter = express.Router();

tracksRouter.post('/', async (req, res, next) => {
    const numberTrack = Number(req.body.number)

    const tracksData = {
        title: req.body.title,
        album: req.body.album,
        number: numberTrack,
        continuance:req.body.continuance,
    }

    try {
        const track = new Track(tracksData);
        await track.save();
        res.send(track);
    } catch (e) {
        if(e instanceof mongoose.Error.ValidationError){
            const ValidationError = Object.keys(e.errors).map(key =>({
                field: key,
                message: e.errors[key].message,
            }))
            res.status(400).send({error: ValidationError});
        }
        next(e);
    }
});

tracksRouter.get('/', async (req, res, next) => {
    try {
        const albumById = req.query.album;
        let track
        if (albumById) {
            track = await Track.find({album: albumById}).populate('album');
        }else{
            track = await Track.find().populate('album', 'title')
        }
        res.send(track);
    }catch (e){
        next(e);
    }
})


export default tracksRouter;