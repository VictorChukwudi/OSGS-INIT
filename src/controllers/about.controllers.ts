import { Request, Response } from "express"
import { Boards } from "../models/board.model";

const createBoard =async(req:Request,res:Response)=>{
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
}

const getBoard = async(req: Request, res:Response)=>{
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
}

const getSingleBoard= async(req: Request, res: Response)=>{
    try {
        const id= Number(req.params.id)
    
        if(!id || typeof(id) !="number"){
            res.status(400)
            throw new Error("Invalid id passed as parameter")
        }else{
            const member= await Boards.findByPk(id)
            if(!member){
                res.status(400)
                throw new Error(`Board member with id: ${id} not found`)
            }else{
                res.status(200).json({
                    status:"success",
                    data:member
                })
            }
        }
    } catch (error:any) {
        res.json({
            status:"error",
            msg:error.message
        })
    }
}
export {
    createBoard,
    getBoard,
    getSingleBoard
}