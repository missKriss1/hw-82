import express from 'express';
import mongoose from "mongoose";
import artistsRouter from "./routers/artists";

const app = express();
const port = 8000;
app.use(express.json());
app.use(express.static("public"));

app.use('/artists', artistsRouter)

const run = async () => {
    await mongoose.connect('mongodb://localhost/spotify');

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

run().catch(console.error);