import express from "express"
import {
	getSpesialisasiPegawai,
	getSpesialisasiPegawaiById,
	getSpesialisasiPegawaiByPegawaiId,
	createSpesialisasiPegawai,
	updateSpesialisasiPegawai,
	deleteSpesialisasiPegawai,
} from "../../controllers/Pegawai/SpesialisasiController.js"

const router = express.Router()

router.get("/spesialisasi", getSpesialisasiPegawai)
router.get("/spesialisasi/:id", getSpesialisasiPegawaiById)
router.get("/spesialisasi/pegawai/:id", getSpesialisasiPegawaiByPegawaiId)
router.post("/spesialisasi", createSpesialisasiPegawai)
router.patch("/spesialisasi/:id", updateSpesialisasiPegawai)
router.delete("/spesialisasi/:id", deleteSpesialisasiPegawai)

export default router
