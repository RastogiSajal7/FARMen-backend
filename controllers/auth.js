import User from "../models/user.js";
import bcrypt from 'bcrypt';
import {getUserData} from '../routes/login.js';
//to get user data from user for registering...

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      contact,
      password,
      email,
      accountType,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      username,
      contact,
      password,
      email,
      accountType,
    });
    const user = await newUser.save();
    const userId = user._id;

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAccount = async (req, res) =>{
  try{
      res.json(getUserData);
  }catch (error) {
      console.error("Error fetching account details:" , error);
      res.status(500).josn({message: 'Cannot get user account details'});
  }
  
};





