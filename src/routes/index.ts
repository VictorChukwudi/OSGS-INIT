import express from "express"
import aboutRoutes from "./about.routes"
import programmeRoutes from  "./programme.routes"
import nstdProgrameRoutes from "./nstdprogramme.routes"
const router= express.Router()


router.use("/about",aboutRoutes)
router.use("/programmes", programmeRoutes)
router.use("/programmes/nested",nstdProgrameRoutes)
export default router