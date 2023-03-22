import express from "express"
import {
	getABKJabatan,
	getABKJabatanById,
	getABKJabatanByJabatanId,
	createABKJabatan,
	updateABKJabatan,
	deleteABKJabatan,
} from "../../controllers/Jabatan/ABKController.js"

const router = express.Router()

router.get("/abk", getABKJabatan)
router.get("/abk/:id", getABKJabatanById)
router.get("/abk/jabatan/:id", getABKJabatanByJabatanId)
router.post("/abk", createABKJabatan)
router.patch("/abk/:id", updateABKJabatan)
router.delete("/abk/:id", deleteABKJabatan)

export default router
