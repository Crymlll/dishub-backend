import express from "express"
import {
	getKompetensiJabatan,
	getKompetensiById,
	getKompetensiJabatanById,
	createKompetensiJabatan,
	updateKompetensiJabatan,
	deleteKompetensiJabatan,
} from "../../controllers/Jabatan/KompetensiController.js"

const router = express.Router()

router.get("/kompetensi-jabatan", getKompetensiJabatan)
router.get("/kompetensi-jabatan/:id", getKompetensiById)
router.get("/kompetensi-jabatan/jabatan/:id", getKompetensiJabatanById)
router.post("/kompetensi-jabatan", createKompetensiJabatan)
router.patch("/kompetensi-jabatan/:id", updateKompetensiJabatan)
router.delete("/kompetensi-jabatan/:id", deleteKompetensiJabatan)

export default router
