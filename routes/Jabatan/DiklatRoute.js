import express from "express"
import {
	getDiklatJabatan,
	getDiklatJabatanById,
	createDiklatJabatan,
	updateDiklatJabatan,
	deleteDiklatJabatan,
} from "../../controllers/Jabatan/DiklatController.js"

const router = express.Router()

router.get("/diklat-jabatan", getDiklatJabatan)
router.get("/diklat-jabatan/:id", getDiklatJabatanById)
router.post("/diklat-jabatan", createDiklatJabatan)
router.patch("/diklat-jabatan/:id", updateDiklatJabatan)
router.delete("/diklat-jabatan/:id", deleteDiklatJabatan)

export default router
