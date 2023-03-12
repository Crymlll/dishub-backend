import express from "express"
import {
	getJabatan,
	getJabatanById,
	createJabatan,
	updateJabatan,
	deleteJabatan,
} from "../../controllers/Jabatan/JabatanController.js"

const router = express.Router()

router.get("/jabatan", getJabatan)
router.get("/jabatan/:id", getJabatanById)
router.post("/jabatan", createJabatan)
router.patch("/jabatan/:id", updateJabatan)
router.delete("/jabatan/:id", deleteJabatan)

export default router
