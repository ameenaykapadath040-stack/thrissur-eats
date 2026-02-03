import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MenuItem } from './models/MenuItem.js';
import { Order } from './models/Order.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// API Routes
app.get('/api/menu', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch menu' });
    }
});

app.post('/api/orders', async (req, res) => {
    try {
        const newOrder = new Order({
            items: req.body.items,
            subtotal: req.body.subtotal,
            total: req.body.total
        });

        const savedOrder = await newOrder.save();
        console.log('New order received:', savedOrder._id);
        res.status(201).json({ message: 'Order placed successfully', orderId: savedOrder._id });
    } catch (error) {
        console.error('Order error:', error);
        res.status(500).json({ error: 'Failed to save order' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});

