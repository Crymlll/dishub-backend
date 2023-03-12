import express from "express"
import {
	getPrestasiPegawai,
	getPrestasiPegawaiById,
	getPrestasiPegawaiByPegawaiId,
	createPrestasiPegawai,
	updatePrestasiPegawai,
	deletePrestasiPegawai,
} from "../../controllers/Pegawai/PrestasiController.js"

const router = express.Router()

router.get("/prestasi", getPrestasiPegawai)
router.get("/prestasi/:id", getPrestasiPegawaiById)
router.get("/prestasi/pegawai/:id", getPrestasiPegawaiByPegawaiId)
router.post("/prestasi", createPrestasiPegawai)
router.patch("/prestasi/:id", updatePrestasiPegawai)
router.delete("/prestasi/:id", deletePrestasiPegawai)

export default router
