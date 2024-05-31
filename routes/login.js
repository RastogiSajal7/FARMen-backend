import express from 'express';
import { validateLoginInput } from '../controllers/login.js';
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import user from '../models/user.js';
import {keys} from '../config/keys.js';

const loginRouter = express.Router();

// function to send user details after logging in

    export const getUserData = ()=>{
        userDetails();
    }

// Route for login and loading input validation
loginRouter.post('/login', async(req, res) =>{
    // Form validation

const { errors, isValid} = validateLoginInput(req.body);

// Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    // To find user by email
    const foundUser = await user.findOne({email}).then(user =>{
        // To Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found"});
        }
        // To check password
        
        const match = req.body.password;
        
        bcryptjs.compare(match, user.password);
        if (match) {
            //if user matched then create jWT payload
            const payload = {
                id: user.id,
                name: user.name,

            };
    // Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds  
                },
                (err, token) => {
                    if (err) {
                        // Handle error
                        console.error(err);
                        return res.status(500).json({ error: "Internal server error" });
                    }
                    // Create a constant to store user details along with the token
                    const userDetails = {
                        token: "Bearer " + token,
                        user: {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            contact: user.contact,
                            password: user.password,
                            accountType: user.accountType,
                            profileImg: user.profileImg,
                            farmName: user.farmName,
                        }
                    };
                    // Send token and user details as response
                    res.json(userDetails);
                }
            );


            

            
        } else {
            // if passwords do not match

            return res.status(400).json({passwordincorrect: "Password incorrect"})
        }
        
    });
});

export default loginRouter;