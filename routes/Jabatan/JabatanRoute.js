import express from "express"
import {
	getJabatan,
	getJabatanById,
	createJabatan,
	updateJabatan,
	deleteJabatan,
	getTableJabatan,
	getDifferentBidang,
	getDifferentSubbidang,
	getPemangkuJabatan,
	getPemetaanJabatan,
	getJabatanSummary,
} from "../../controllers/Jabatan/JabatanController.js"

const router = express.Router()

router.get("/jabatan", getJabatan)
router.get("/jabatan/:id", getJabatanById)
router.post("/jabatan", createJabatan)
router.patch("/jabatan/:id", updateJabatan)
router.delete("/jabatan/:id", deleteJabatan)
router.get("/table/jabatan", getTableJabatan)
router.get("/bidang", getDifferentBidang)
router.get("/subbidang", getDifferentSubbidang)
router.get("/pemangku/jabatan/:id", getPemangkuJabatan)
router.get("/pemetaan-jabatan", getPemetaanJabatan)
router.get("/summary-jabatan", getJabatanSummary)

export default router
