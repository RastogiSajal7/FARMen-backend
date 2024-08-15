import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import passport from 'passport';
import userRoute from './routes/user.js';
import productRoute from './routes/prod.js';
import loginRoute from './routes/login.js';
import uploadRoute from './routes/user.js';
import farmRoute from './routes/farms.js';
import paymentRoute from './routes/payments.js';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Configure CORS
app.use(cors());

// Serving static files
app.use("/uploads", express.static(join(__dirname, "/uploads")));

// Middlewares
app.use(express.json()); // to parse JSON bodies
app.use(passport.initialize()); // Passport middleware

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend server is running on port", PORT);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("Error while connecting to MongoDB:", err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Middleware not Ok');
});

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// REST routes
app.use('/', userRoute); 
app.use('/', productRoute);
app.use('/', loginRoute);
app.use('/', uploadRoute);
app.use('/', farmRoute);
app.use('/', paymentRoute);
