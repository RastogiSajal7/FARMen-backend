import user from "../models/user.js";

// export const createFarms = async (req, res) => {
//   try {
//     const {farmName, farmDesc} = req.body;
//     const profileImg = req.file;

//     const newFarm = new user({
//       farmName,
//       farmDesc,
//       profileImg: profileImg.path
//     });

//     const savedFarm = await newFarm.save();
//     res.status(201).json(savedFarm);
//   } catch (error) {
//     console.error("Error creating farm:", error);
//     throw error;
//   }
// };

export const getFarms = async (req, res)=>{
  try {
    const farms = await user.find({ accountType: 'Farmer'});
    res.json(farms);
  } catch (error) {
    console.error('Error fetching farms: ', error);
    res.status(500).json({ message: 'Unable to fetch farms'})
  }
};
