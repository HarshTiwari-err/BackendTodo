import mongoose from 'mongoose'
mongoose.set("strictQuery", false);
const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MONGODBURI);
        console.log('db connection success')
    } catch (error) {
        throw new Error(error.message)
    }
}

export default connectDB