//require('dotenv).config({path: './env'})
import dotenv from "dotenv"  //should be loaded first always 
import ConnectingDb from "./db/ConnectingDB.js"
import app from "./app.js";

dotenv.config({
    path: './env'
});


//async function always returns a promise
ConnectingDb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listening on PORT: ${process.env.PORT}`)
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err)
    })






























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