import mongoose from 'mongoose';
import { type } from 'os';
const prodSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        farmName: {
            type: String,
            required: true,
        },
        prodName: {
            type: String,
            required: true,
        },
        prodDetails: {
            type: String,
            required: true,
        },
        prodPrice: {
            type: String,
            required: true,
        },
        prodImg: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);
const product = mongoose.model('Product' , prodSchema)
export default product;