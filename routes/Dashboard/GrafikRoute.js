import express from "express"
import {
	getJenisKelamin,
	getAgama,
} from "../../controllers/Dashboard/GrafikController.js"

const router = express.Router()

router.get("/count-jenis-kelamin", getJenisKelamin)
router.get("/count-agama", getAgama)

export default router
