import {model, Schema } from "mongoose"

const moviesSchema = new Schema({
    title: {type:String},
    rating: {type:Number},
    description: {type:String},
    derictor: {type:String},
    stars:{type:Array},
    poster:{type:String},
    
},
{
        timestamps: true

       })
       export const MovieModel = model("movie", moviesSchema)