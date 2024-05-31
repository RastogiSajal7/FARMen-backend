import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  payment_id: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  // cartItems: {
  //   type: String,
  //   required: true,
  // },
  date:{
    type: String,
    required: true,
  },
  time:{
    type: String,
    required: true,
  },
  
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;