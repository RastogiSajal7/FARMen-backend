import mongoose from 'mongoose';
const farmSchema = new mongoose.Schema(
 {
    farmName: {
        type: String
    },
    farmDesc: {
        type: String
    },
    profileImg: {
        type: String
    },
 },
 {
    timestamps: true,
 }   
);
const farm = mongoose.model('Farm' , farmSchema)
export default farm;