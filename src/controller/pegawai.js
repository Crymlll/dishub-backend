const pegawaiModel = require("../models/pegawai")

const getAllPegawai = async (req, res) => {
	try {
		const [data] = await pegawaiModel.getAllPegawai()

		res.json({
			message: "Get All Pegawai Success",
			data: data,
		})
	} catch (error) {
		res.status(500).json({
			message: "Get All Pegawai Failed",
			serverMessage: error,
		})
	}
}

const createNewPegawai = async (req, res) => {
	const { body } = req

	if (!body.nama || !body.email || !body.address)
		return res
			.status(400)
			.json({ message: "Data Kurang Lengkap", data: null })

	try {
		await pegawaiModel.createNewPegawai(body)
		res.status(201).json({
			message: "Create New Pegawai Success",
			data: body,
		})
	} catch (error) {
		res.status(500).json({
			message: "Create New Pegawai Failed",
			serverMessage: error,
		})
	}
}

const updatePegawai = async (req, res) => {
	const { id } = req.params
	const { body } = req

	try {
		await pegawaiModel.updatePegawai(body, id)
		res.json({
			message: "Update Pegawai Success",
			data: {
				id: id,
				...body,
			},
		})
	} catch (error) {
		res.status(500).json({
			message: "Update Pegawai Failed",
			serverMessage: error,
		})
	}
}

const deletePegawai = async (req, res) => {
	const { id } = req.params
	try {
		await pegawaiModel.deletePegawai(id)
		res.json({
			message: "Delete Pegawai Success",
			data: null,
		})
	} catch (error) {
		res.status(500).json({
			message: "Delete Pegawai Failed",
			serverMessage: error,
		})
	}
}

module.exports = {
	getAllPegawai,
	createNewPegawai,
	updatePegawai,
	deletePegawai,
}
