import mongoose from "mongoose";
const {Schema} = mongoose;

// const HotelSchema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true
    // },
    // type:{
    //     type:String,
    //     required:true
    // },
    // city:{
    //     type:String,
    //     required:true
    // },
    // address:{
    //     type:String,
    //     required:true
    // },
    // photos:{
    //     type:String,
    //     required:true
    // },
    // desc:{
    //     type:String,
    //     required:true
    // },
    // rooms:{
    //     type:[String],
    // },
    // Price:{
    //     type:Number,
    //     required:true
    // },
    // rating:{
    //  type: Number,
    //  min:0,
    //  max:5
    // },
    // featured:{
    //     type:Boolean,
    //     default:false,
    // },
    // country:{
    //     type:String,
    //     required:true
    // },
// });
// export default mongoose.model("Hotel",HotelSchema)



const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    photos:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
     type: Number,
     min:0,
     max:5
    },
    featured:{
        type:Boolean,
        default:false,
    },
    country:{
        type:String,
        required:true
    },
});
export default mongoose.model("Hotel",HotelSchema)