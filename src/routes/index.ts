import express from "express"
import aboutRoutes from "./about.routes"
const router= express.Router()


router.use("/about",aboutRoutes)

export default router