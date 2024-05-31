import mongoose from 'mongoose';
const prodSchema = new mongoose.Schema(
    {
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