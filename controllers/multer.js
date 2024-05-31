import multer from 'multer';

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination directory for storing uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname); // Unique filename for the uploaded file
    }
  });

  const upload = multer({ storage: storage });
  
  export default upload;
