import express from "express"
import {
	getKompetensiPegawai,
	getKompetensiPegawaiById,
	getKompetensiPegawaiByPegawaiId,
	createKompetensiPegawai,
	updateKompetensiPegawai,
	deleteKompetensiPegawai,
} from "../../controllers/Pegawai/KompetensiController.js"

const router = express.Router()

router.get("/kompetensi", getKompetensiPegawai)
router.get("/kompetensi/:id", getKompetensiPegawaiById)
router.get("/kompetensi/pegawai/:id", getKompetensiPegawaiByPegawaiId)
router.post("/kompetensi", createKompetensiPegawai)
router.patch("/kompetensi/:id", updateKompetensiPegawai)
router.delete("/kompetensi/:id", deleteKompetensiPegawai)

export default router
