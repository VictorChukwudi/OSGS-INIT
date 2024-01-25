import express from "express"
import { createProgramme, getAllProgrammes, getSingleProgramme } from "../controllers/programme.controllers"
const router= express.Router()



router.post("/", createProgramme)
router.get("/", getAllProgrammes)
router.get("/:id", getSingleProgramme)




export default router
