import express from "express"
import {
	getPegawai,
	getPegawaiById,
	createPegawai,
	updatePegawai,
	deletePegawai,
	getTablePegawai,
} from "../../controllers/Pegawai/PegawaiController.js"

const router = express.Router()

router.get("/pegawai", getPegawai)
router.get("/pegawai/:id", getPegawaiById)
router.post("/pegawai", createPegawai)
router.patch("/pegawai/:id", updatePegawai)
router.delete("/pegawai/:id", deletePegawai)
router.get("/table/pegawai", getTablePegawai)

export default router
