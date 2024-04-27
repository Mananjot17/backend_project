//require('dotenv).config({path: './env'})
import dotenv from "dotenv"  //should be loaded first always 
import ConnectingDb from "./db/ConnectingDB.js"

dotenv.config({
    path: './env'
});


ConnectingDb();






























/*
import express from "express"

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)


        //database is connected but if there is some error in starting express
        app.on("error", (error) => {
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is Listening on port ${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROR: ", error)
        throw error;
    }
})();

*/