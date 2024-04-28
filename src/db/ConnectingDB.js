import mongoose from "mongoose"

// import express from "express"

// const app = express();


const ConnectingDb = async () => {
    try {
        const res = await mongoose.connect(`${process.env.MONGODB_URI}`);

        console.log(`\n MongoDB connected !! DB HOST: ${res.connection.host}`);

        // app.on("ERROR", (error) => {
        //     console.log(error);
        //     throw error;
        // })

        // app.listen(process.env.PORT, () => {
        //     console.log(`App is Listening on the port ${process.env.PORT}`)
        // })

    } catch (error) {
        console.log("MONGODB connection error", error);
        throw error;
    }
};

export default ConnectingDb;

