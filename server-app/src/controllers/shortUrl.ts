import express from "express";
import { urlModel } from "../model/shortUrl";

export const createUrl=async (req:express.Request,res:express.Response) => {

    try{  
        const { fullUrl }=req.body;
        console.log("the fullUrl is :",fullUrl);
        const urlFound=await urlModel.find({
            fullUrl
        });
        if(urlFound.length>0)
        {
            res.status(409) // url already exists conflict
            res.send(urlFound)
        }
        else{
            const shortUrl= await urlModel.create({fullUrl})
            res.status(201).send(shortUrl) // 201 -record has been created 
        }
    } catch(error)
    {
        res.status(500).send({message:"Something went wrong"})
    }
    
    
} ;
export const getUrl=async (req:express.Request,res:express.Response) => {
     
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
        if(!shortUrl)
            {
                res.status(404).send({"message":"Full Url not found"});
            }
            else
            {
                shortUrl.clicks.push({ city: "Unknown", country: "Unknown", device: req.headers["user-agent"] || "Unknown" });
                await shortUrl.save();
              res.redirect(`${shortUrl.fullUrl}`);

            }
    } catch (error) {
        res.status(500).send({message:"Something went wrong"})
    }
    
} ;
export const getAllUrl=async (req:express.Request,res:express.Response) => {
    try {
        const shortUrls=await urlModel.find().sort({createdAt:-1});
        if(shortUrls.length<0)
            res.status(404).send({message:"Short Url not found"});
        else
        {
            res.status(200).send(shortUrls);
        }

    } catch (error) {
        res.status(500).send({message:"Something went wrong"})
    }
} ;
export const deleteUrl=async (req:express.Request,res:express.Response) => {

    try {
        const shortUrl = await urlModel.findByIdAndDelete({ _id: req.params.id });
        if(shortUrl)
            {
                res.status(200).send({message:"Requested UrL sucessfully deleted!"}); // 204= no content(Cannot send any message with it ),200-OK
            }
            else{
                 res.status(404).send("Short URL not found");
            }
    } catch (error) {
        res.status(500).send({message:"Something went wrong"})
    } 
    
} ;