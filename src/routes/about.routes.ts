import express from "express"
import { Boards } from "../models/board.model"
const router= express.Router()



router.post("/",async(req,res)=>{
   try {
    const {name, email, description, imageURL}=req.body
    const [member, created]= await Boards.findOrCreate({
        where: { email},
        defaults: {name, email, description,imageURL},
      });
      if (!created) {
        res.status(400);
        throw new Error("Email already registered.");
      }else{
        res.status(200).json({
            status:"success",
            data:member
        })
      }

   } catch (error: any) {
        res.json({
            status:"error",
            msg:error.message
        })
   }
})


router.get("/", async(req,res)=>{
    try {
        const members= await Boards.findAll()
        res.status(200).json({
            status:"success",
            data:members
        })
    } catch (error:any) {
        res.json({
            status:"error",
            msg:error.message
        })
    }
})




export default router
