import express from "express"
import {
	getPegawai,
	getPegawaiById,
	createPegawai,
	updatePegawai,
	deletePegawai,
} from "../controllers/IdentitasPegawaiController.js"

const router = express.Router()

router.get("/pegawai", getPegawai)
router.get("/pegawai/:id", getPegawaiById)
router.post("/pegawai", createPegawai)
router.patch("/pegawai/:id", updatePegawai)
router.delete("/pegawai/:id", deletePegawai)

export default router
