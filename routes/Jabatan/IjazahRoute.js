import express from "express"
import {
	getIjazahJabatan,
	getIjazahJabatanById,
	createIjazahJabatan,
	updateIjazahJabatan,
	deleteIjazahJabatan,
} from "../../controllers/Jabatan/IjazahController.js"

const router = express.Router()

router.get("/ijazah-jabatan", getIjazahJabatan)
router.get("/ijazah-jabatan/:id", getIjazahJabatanById)
router.post("/ijazah-jabatan", createIjazahJabatan)
router.patch("/ijazah-jabatan/:id", updateIjazahJabatan)
router.delete("/ijazah-jabatan/:id", deleteIjazahJabatan)

export default router
