import express from "express"
import {
	getJabatan,
	getJabatanById,
	createJabatan,
	updateJabatan,
	deleteJabatan,
	getTableJabatan,
} from "../../controllers/Jabatan/JabatanController.js"

const router = express.Router()

router.get("/jabatan", getJabatan)
router.get("/jabatan/:id", getJabatanById)
router.post("/jabatan", createJabatan)
router.patch("/jabatan/:id", updateJabatan)
router.delete("/jabatan/:id", deleteJabatan)
router.get("/table/jabatan", getTableJabatan)

export default router
