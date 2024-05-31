import Product from '../models/prod.js';

export const addProduct = async (req, res) => {
    try {
        const { prodName, prodDetails, prodPrice } = req.body;
        const prodImg = req.file; // This will contain file metadata

        // Create a new product with the uploaded file path
        const newProduct = new Product({
            prodName,
            prodDetails,
            prodPrice,
            prodImg: prodImg.path // Save the file path to the database
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Error adding product' });
    }
};

export const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Cannot get products' });
    }
};
