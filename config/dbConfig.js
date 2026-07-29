import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`🚀 MongoDB Atlas Connected: ${conn.connection.host}`);
        return conn; 
    } catch (error) {
        console.error(`❌ Connection Error: ${error.message}`);
        process.exit(1); 
    }
};

export default dbConnect;