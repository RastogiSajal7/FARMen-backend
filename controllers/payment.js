import Payment from '../models/paymentModel.js';

export const addPayment = async (req, res) =>{
    try {
        const{
          payment_id,
          totalPrice,
        //   cartItems,
          date,
          time,
          } = req.body;
        
        const newPayment = new Payment({
            payment_id,
            totalPrice,
            // cartItems,
            date,
            time,
        });
        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error) {
        console.error('Error adding payment:', error);
        res.status(500).json({ message: 'Error adding payment' });
    }
};