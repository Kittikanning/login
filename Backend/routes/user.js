// routes/user.js
import express from 'express';
import { User } from '../model/schema.js'; // ใช้ named export แทน default export
import { OAuth2Client } from 'google-auth-library';

const router = express.Router();

const clientId = "8418327083-p7tn24iohhc2f0m1k444dqp3go9clma4.apps.googleusercontent.com";
const authClient = new OAuth2Client(clientId);

// ตั้งค่า route ที่นี่
// Endpoint สำหรับค้นหาผู้ใช้
router.get('/user/:id', (req, res) => {
    User.findById(req.params.id)
        .exec((err, user) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        });
});

// Endpoint สำหรับเพิ่มผู้ใช้
router.post('/user', (req, res) => {
    const newUser = new User(req.body);
    
    newUser.save()
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(400).json({ error: err });
        });
});

// Endpoint สำหรับแก้ไขผู้ใช้
router.put('/user/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .exec()
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// Endpoint สำหรับลบผู้ใช้
router.delete('/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .exec()
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(204).json(); // No Content
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});


export default router;