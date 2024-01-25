import { Request, Response } from "express"
import { NstdProgrammes } from "../models/nstdprogramme.model"

const createNstdProgramme=async(req: Request,res: Response)=>{
    try {
     const {title, type, completed,  recordingURL, liveURL, fileURL, programId}= req.body
     const nstdProgram= await NstdProgrammes.create({
         title,
         type,
         completed,
         recordingURL,
         liveURL,
         fileURL,
         programId
     })
     res.status(200).json({
         status:"success",
         data:nstdProgram,
     })
 
    } catch (error: any) {
     console.log(error)
         res.json({
             status:"error",
             msg:error.message
         })
    }
 }

 const getAllNstdProgrammes= async(req: Request,res: Response)=>{
    try {
        const nstdPrograms= await NstdProgrammes.findAll()
        res.status(200).json({
            status:"success",
            data:nstdPrograms
        })
    } catch (error:any) {
        res.json({
            status:"error",
            msg:error.message
        })
    }
}

 export{
    createNstdProgramme,
    getAllNstdProgrammes
 }