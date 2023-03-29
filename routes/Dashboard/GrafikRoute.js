import express from "express"
import {
	getJenisKelamin,
	getAgama,
	getIjazah,
} from "../../controllers/Dashboard/GrafikController.js"

const router = express.Router()

router.get("/count-jenis-kelamin", getJenisKelamin)
router.get("/count-agama", getAgama)
router.get("/count-ijazah", getIjazah)

export default router
