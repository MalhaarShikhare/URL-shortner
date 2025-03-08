import mongoose from "mongoose";
import { nanoid } from "nanoid";



const shortUrlSchema= new mongoose.Schema({
    fullUrl:{
        type:String,
        required:true 
    },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    shortUrl:{
        type:String,
      required:true,
      unique: true,
      default:()=>nanoid().substring(0,10),
    },  
    clicks: { 
        type: [{ city: String, country: String, device: String, timestamp: { type: Date, default: Date.now } }],
        default: [] 
      }
},{
    timestamps:true,
})

export const urlModel=mongoose.model("ShortUrl",shortUrlSchema)




