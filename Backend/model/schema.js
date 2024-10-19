// model/schema.js
import mongoose from 'mongoose';

// สร้าง schema ของผู้ใช้
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User',userSchema);

// ส่งออก schema แบบ named export
export {User};

