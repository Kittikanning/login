import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.js';
import connectDB from './config/db.js';
import authRoutes from'./routes/user.js'

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(authRoutes)

// เชื่อมต่อฐานข้อมูล
connectDB();


// เชื่อมต่อ route ของผู้ใช้
app.use('/api', userRoutes); // ใช้เส้นทางนี้เพื่อเข้าถึง route ของผู้ใช้

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


