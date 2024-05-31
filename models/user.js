import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
 {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        required: true,
    },
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
const user = mongoose.model('User' , userSchema)
export default user;