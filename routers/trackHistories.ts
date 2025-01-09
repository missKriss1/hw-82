import express from "express";
import User from "../models/User";
import Track from "../models/Track";
import TrackHistory from "../models/TrackHistory";

const trackHistoriesRouter = express.Router();

trackHistoriesRouter.post('/', async (req, res, next) => {
  try{

      const token = req.get('Authorization');

      if(!token) {
          res.status(401).send({error: 'No token present'});
      }

      const user = await User.findOne({token});

      if(!user) {
          res.status(401).send({error: 'Wrong token'});
      }

      const track = req.body.track;

      if(!track){
          res.status(400).send({error: 'Track ID is required'});
      }

      const trackById = await Track.findById(track);

      if(!trackById){
          res.status(400).send({error: 'Track not found'});
      }

      const trackHistory = new TrackHistory({
          user,
          track,
          datetime: new Date(),
      })
      await trackHistory.save()
      res.send({message: 'Track history', trackHistory})
  }catch(error){
      next(error)
  }
})

export default trackHistoriesRouter;