import express from "express"
import {
	getPengalamanPegawai,
	getPengalamanPegawaiById,
	getPengalamanPegawaiByPegawaiId,
	createPengalamanPegawai,
	updatePengalamanPegawai,
	deletePengalamanPegawai,
} from "../../controllers/Pegawai/PengalamanController.js"

const router = express.Router()

router.get("/pengalaman", getPengalamanPegawai)
router.get("/pengalaman/:id", getPengalamanPegawaiById)
router.get("/pengalaman/pegawai/:id", getPengalamanPegawaiByPegawaiId)
router.post("/pengalaman", createPengalamanPegawai)
router.patch("/pengalaman/:id", updatePengalamanPegawai)
router.delete("/pengalaman/:id", deletePengalamanPegawai)

export default router
