import express from "express"
import {
	getPengalamanJabatan,
	getPengalamanJabatanById,
	createPengalamanJabatan,
	updatePengalamanJabatan,
	deletePengalamanJabatan,
} from "../../controllers/Jabatan/PengalamanController.js"

const router = express.Router()

router.get("/pengalaman-jabatan", getPengalamanJabatan)
router.get("/pengalaman-jabatan/:id", getPengalamanJabatanById)
router.post("/pengalaman-jabatan", createPengalamanJabatan)
router.patch("/pengalaman-jabatan/:id", updatePengalamanJabatan)
router.delete("/pengalaman-jabatan/:id", deletePengalamanJabatan)

export default router
