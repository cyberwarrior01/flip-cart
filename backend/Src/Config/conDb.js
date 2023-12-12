import mongoose from 'mongoose'
const conn = async()=> {
    try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default conn;