import express from "express"
import {
	getCetakDataPegawai,
	getJabatanByBidang,
} from "../../controllers/Dashboard/CetakDataController.js"

const router = express.Router()

router.get("/cetak-data-pegawai", getCetakDataPegawai)
router.get("/cetak-data-jabatan", getJabatanByBidang)

export default router
