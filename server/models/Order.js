import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    items: [{
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
        category: String
    }],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

export const Order = mongoose.model('Order', orderSchema);
