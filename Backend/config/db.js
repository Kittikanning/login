import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://6531503009:0622865058nnn@cluster0.smxzj.mongodb.net');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1); // หยุดแอปหากไม่สามารถเชื่อมต่อได้
    }
};

export default connectDB;
