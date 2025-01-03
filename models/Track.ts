import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    album_id :{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Album",
        required: true,
    }

})

const Track = mongoose.model("Track", TrackSchema);
export default Track;