import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { MenuItem } from './models/MenuItem.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const seedDatabase = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('Error: MONGODB_URI not found in .env file');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const menuData = JSON.parse(await fs.readFile(path.join(__dirname, 'menu.json'), 'utf8'));

        await MenuItem.deleteMany({}); // Clear existing items
        await MenuItem.insertMany(menuData);

        console.log('Database seeded successfully with 20 items!');
        process.exit(0);
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};

seedDatabase();
