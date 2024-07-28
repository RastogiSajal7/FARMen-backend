import User from "../models/user.js";
import bcryptjs from 'bcryptjs';
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
    const hashedPassword = await bcryptjs.hash(password, 10);
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
    res.status(201).json({ message: "User registered successfully", userId: user._id });

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
      res.status(500).json({message: 'Cannot get user account details'});
  }
  
};





