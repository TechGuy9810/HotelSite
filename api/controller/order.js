import Razorpay from "razorpay";
import Payment from "../models/payment.js";
export const ConfirmOrder = async (req,res)=>{
    const amount= req.body.amount;
    const razorpay = new Razorpay({
        key_id:process.env.razorpay_id,
        key_secret:process.env.razorpay_password,
    });
    try{
        const options = {
            amount:Number(amount*100),
            currency:"INR",
            receipt:"receipt#1"
        }
        razorpay.orders.create(options,(error,order)=>{
            if(error){
                return res.status(500).json({message:"smoething went wrong"});
            }
            res.status(200).json({data:order});
        });
    }catch(error)
    {
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const payment = async(req,res)=>{
    const { razorpay_payment_id, razorpay_signature } = req.body;
    try {
        const isAuthentic = process.env.razorpay_password === razorpay_signature;
        // Condition 
        if (isAuthentic) {
            const payment = new Payment({
                razorpay_payment_id,
                razorpay_signature
            });

            // Save Payment 
            await payment.save();

            // Send Message 
            res.json({
                message: "Payement Successfull"
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
}