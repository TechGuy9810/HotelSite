import mongoose from "mongoose";
const {Schema} = mongoose;

// const RoomSchema = new mongoose.Schema({

//     wifi:{
//         type:String
//     },
//     Freefood:{
//         type:String
//     },
//     Price:{
//         type:String,
//         required:true
//     },
//     maxPeople:{
//         type:Number,
//         required:true
//     },
//     roomNumbers:[{number:Number,booking:{type:[String]}}]
// },
// {timestamps:true});
// export default mongoose.model("Room",RoomSchema)

const RoomSchema = new mongoose.Schema({

    // wifi:{
    //     type:String
    // },
    // Freefood:{
    //     type:String
    // },
    // Price:{
    //     type:String,
    //     required:true
    // },
    // maxPeople:{
    //     type:Number,
    //     required:true
    // },
    // roomNumbers:[{number:Number,booking:{type:[String]}}]

// roomid: {type:String},
roomNumber:{
    type:Number
},
hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel'
},
price: {type:Number},
capacity: {type:Number},
wifi:{type:Boolean},
food:{type:Boolean},
img: [String]
},
{timestamps:true});
export default mongoose.model("Room",RoomSchema);