import mongoose from "mongoose";
const {Schema} = mongoose;

// const BookingSchema = new mongoose.Schema({

//     userid:{
//         type:String
//     },
//     roomnum:{type:[Number]},
//     dates:{type:[Date]},
//     hotelid:{type:String},
//     hotelname:{type:String},
// },
// {timestamps:true});
const BookingSchema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    start: {type:Date},
    end: {type:Date}

});
export default mongoose.model("Booking",BookingSchema)