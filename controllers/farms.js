import user from "../models/user.js";
import farm from "../models/farms.js";

export const createFarms = async (req, res) => {
  try {
    const {userId, farmName} = req.body;

    const newFarm = new farm({
      userId,
      farmName,
    });

    console.log('FarmName: ', newFarm);

    const savedFarm = await newFarm.save();
    res.status(201).json(savedFarm);
    console.log(savedFarm);
  } catch (error) {
    console.error("Error creating farm:", error);
    throw error;
  }
};

export const getFarms = async (req, res)=>{
  try {
    const farms = await user.find({ accountType: 'Farmer'});
    res.json(farms);
  } catch (error) {
    console.error('Error fetching farms: ', error);
    res.status(500).json({ message: 'Unable to fetch farms'})
  }
};
