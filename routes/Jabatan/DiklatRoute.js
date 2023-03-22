import express from "express"
import {
	getDiklatJabatan,
	getDiklatById,
	getDiklatJabatanById,
	createDiklatJabatan,
	updateDiklatJabatan,
	deleteDiklatJabatan,
} from "../../controllers/Jabatan/DiklatController.js"

const router = express.Router()

router.get("/diklat-jabatan", getDiklatJabatan)
router.get("/diklat-jabatan/:id", getDiklatById)
router.get("/diklat-jabatan/jabatan/:id", getDiklatJabatanById)
router.post("/diklat-jabatan", createDiklatJabatan)
router.patch("/diklat-jabatan/:id", updateDiklatJabatan)
router.delete("/diklat-jabatan/:id", deleteDiklatJabatan)

export default router
