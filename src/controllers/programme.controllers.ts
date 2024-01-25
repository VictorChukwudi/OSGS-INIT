import { Request,Response } from "express"
import { Programmes } from "../models/programme.model"
import { NstdProgrammes } from "../models/nstdprogramme.model"

const createProgramme=async(req: Request,res: Response)=>{
    try {
     const {theme, type, schedule, start_date, end_date, duration, completed, hasNstdProgram, fileURL}= req.body
     const program= await Programmes.create({
         theme,
         type,
         schedule,
         start_date,
         end_date,
         duration,
         completed,
         hasNstdProgram,
         fileURL
     })
     res.status(200).json({
         status:"success",
         data:program
     })
 
    } catch (error: any) {
         res.json({
             status:"error",
             msg:error.message
         })
    }
 }

 const getAllProgrammes=async(req: Request,res: Response)=>{
    try {
        const members= await Programmes.findAll()
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
}

const getSingleProgramme=async (req: Request,res: Response) => {
    try {
        const id= Number(req.params.id)
    
        if(!id || typeof(id) !="number"){
            res.status(400)
            throw new Error("Invalid id passed as parameter")
        }else{
            const program = await Programmes.findByPk(id)
            const nestedPrograms= await NstdProgrammes.findAll({where:{programId: id}})
            res.status(200).json({
                status:"success",
                data:{
                    program,
                    nestedPrograms
                }
            })
        }
    } catch (error:any) {
        res.json({
            status:"error",
            msg:error.message
        })
    }
}

export{
    createProgramme,
    getAllProgrammes,
    getSingleProgramme
}