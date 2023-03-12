import express from "express"
import {
	getDiklatPegawai,
	getDiklatPegawaiById,
	getDiklatPegawaiByPegawaiId,
	createDiklatPegawai,
	updateDiklatPegawai,
	deleteDiklatPegawai,
} from "../../controllers/Pegawai/DiklatController.js"

const router = express.Router()

router.get("/diklat", getDiklatPegawai)
router.get("/diklat/:id", getDiklatPegawaiById)
router.get("/diklat/pegawai/:id", getDiklatPegawaiByPegawaiId)
router.post("/diklat", createDiklatPegawai)
router.patch("/diklat/:id", updateDiklatPegawai)
router.delete("/diklat/:id", deleteDiklatPegawai)

export default router
