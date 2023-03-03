const express = require("express")

const pegawaiController = require("../controller/pegawai")

const router = express.Router()

//create new pegawai
router.post("/", pegawaiController.createNewPegawai)

router.get("/", pegawaiController.getAllPegawai)

router.patch("/:id", pegawaiController.updatePegawai)

router.delete("/:id", pegawaiController.deletePegawai)

module.exports = router
