import express from "express"
import { createNstdProgramme, getAllNstdProgrammes } from "../controllers/nstdProgramme.controllers"
const router= express.Router()


router.post("/", createNstdProgramme)
router.get("/", getAllNstdProgrammes)




export default router
