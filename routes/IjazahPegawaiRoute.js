import express from "express"
import {
	getIjazahPegawai,
	getIjazahPegawaiById,
	getIjazahPegawaiByPegawaiId,
	createIjazahPegawai,
	updateIjazahPegawai,
	deleteIjazahPegawai,
} from "../controllers/Pegawai/IjazahController.js"

const router = express.Router()

router.get("/ijazah", getIjazahPegawai)
router.get("/ijazah/:id", getIjazahPegawaiById)
router.get("/ijazah/pegawai/:id", getIjazahPegawaiByPegawaiId)
router.post("/ijazah", createIjazahPegawai)
router.patch("/ijazah/:id", updateIjazahPegawai)
router.delete("/ijazah/:id", deleteIjazahPegawai)

export default router
