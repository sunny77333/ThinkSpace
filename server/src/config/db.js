import mongoose from "mongoose"

export const connectDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB conected successfully")
    } catch (error) {
        console.log("Error connectiong to Mongodb, error")
        process.exit(1) // exit with failure

}

}