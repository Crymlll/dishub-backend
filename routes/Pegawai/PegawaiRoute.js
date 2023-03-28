import express from "express"
import {
	getPegawai,
	getPegawaiById,
	createPegawai,
	updatePegawai,
	deletePegawai,
	getTablePegawai,
	// getPemetaanPegawai,
} from "../../controllers/Pegawai/PegawaiController.js"

const router = express.Router()

router.get("/pegawai", getPegawai)
router.get("/pegawai/:id", getPegawaiById)
router.post("/pegawai", createPegawai)
router.patch("/pegawai/:id", updatePegawai)
router.delete("/pegawai/:id", deletePegawai)
router.get("/table/pegawai", getTablePegawai)
// router.get("pemetaan-pegawai", getPemetaanPegawai)

export default router
