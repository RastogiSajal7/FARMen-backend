import mongoose from 'mongoose';
const farmSchema = new mongoose.Schema(
 {
    userId: {
        type: String,
    },
    farmName: {
        type: String
    },
 },
 {
    timestamps: true,
 }   
);
const farm = mongoose.model('Farm' , farmSchema)
export default farm;