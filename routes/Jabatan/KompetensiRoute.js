import express from "express"
import {
	getKompetensiJabatan,
	getKompetensiJabatanById,
	createKompetensiJabatan,
	updateKompetensiJabatan,
	deleteKompetensiJabatan,
} from "../../controllers/Jabatan/KompetensiController.js"

const router = express.Router()

router.get("/kompetensi-jabatan", getKompetensiJabatan)
router.get("/kompetensi-jabatan/:id", getKompetensiJabatanById)
router.post("/kompetensi-jabatan", createKompetensiJabatan)
router.patch("/kompetensi-jabatan/:id", updateKompetensiJabatan)
router.delete("/kompetensi-jabatan/:id", deleteKompetensiJabatan)

export default router
