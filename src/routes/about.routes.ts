import express from "express"
import { createBoard, getBoard, getSingleBoard } from "../controllers/about.controllers"
const router= express.Router()



router.post("/", createBoard)
router.get("/", getBoard)
router.get("/:id", getSingleBoard)




export default router
