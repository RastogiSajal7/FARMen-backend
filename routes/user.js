import express from 'express';
import {register} from '../controllers/auth.js';
import {getAccount} from '../controllers/auth.js';
import user from '../models/user.js';
import upload from '../controllers/multer.js';

const router = express.Router();

// Route for registering a new user 
router.post('/api/register', register);

router.get("/account", getAccount);

// Route to update farmName and profileImg for a registered user
router.post('/update', upload.single('profileImg'), async (req, res) => {
    try {
      const { userId } = req.body; // Assuming userId is sent from the frontend
      const { farmName } = req.body;
      const {farmDesc} = req.body;
      const profileImgPath = req.file.path; // Assuming Multer is configured correctly
  
      // Update the user document with the new farmName and profileImg
      await user.findByIdAndUpdate(userId, { farmName, farmDesc, profileImg: profileImgPath });
  
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

export default router;
