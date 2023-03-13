import { DiklatJabatan } from "../../models/Jabatan/DiklatModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"

export const getDiklatJabatan = async (req, res) => {
	try {
		const response = await DiklatJabatan.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getDiklatJabatanById = async (req, res) => {
	try {
		const response = await DiklatJabatan.findOne({
			where: {
				id_diklat: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createDiklatJabatan = async (req, res) => {
	const data = req.body

	try {
		await DiklatJabatan.create({
			id_jabatan: data.id_jabatan || "",
			nama_diklat: data.nama_diklat || "",
		})
		res.status(201).json({ message: "Diklat Jabatan Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateDiklatJabatan = async (req, res) => {
	const diklat = await DiklatJabatan.findOne({
		where: {
			id_diklat: req.params.id,
		},
	})

	if (!diklat) {
		return res.status(404).json({ message: "Diklat Jabatan Not Found" })
	}

	const data = req.body

	try {
		await DiklatJabatan.update(
			{
				nama_diklat: data.nama_diklat,
			},
			{
				where: {
					id_diklat: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Diklat Jabatan Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteDiklatJabatan = async (req, res) => {
	const diklat = await DiklatJabatan.findOne({
		where: {
			id_diklat: req.params.id,
		},
	})
	if (!diklat) {
		res.status(404).json({ message: "Diklat Jabatan Not Found" })
		return
	}
	try {
		await DiklatJabatan.destroy({
			where: {
				id_diklat: req.params.id,
			},
		})
		res.status(200).json({ message: "Diklat Jabatan Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
