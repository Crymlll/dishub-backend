import { IjazahJabatan } from "../../models/Jabatan/IjazahModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"

export const getIjazahJabatan = async (req, res) => {
	try {
		const response = await IjazahJabatan.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getIjazahJabatanById = async (req, res) => {
	try {
		const response = await IjazahJabatan.findOne({
			where: {
				id_ijazah: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createIjazahJabatan = async (req, res) => {
	const data = req.body

	try {
		await IjazahJabatan.create({
			id_jabatan: data.id_jabatan,
			tingkat: data.tingkat,
			bidang: data.bidang,
		})
		res.status(201).json({ message: "Ijazah Jabatan Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateIjazahJabatan = async (req, res) => {
	const ijazah = await IjazahJabatan.findOne({
		where: {
			id_ijazah: req.params.id,
		},
	})

	if (!ijazah) {
		return res.status(404).json({ message: "Ijazah Jabatan Not Found" })
	}

	const data = req.body

	try {
		await IjazahJabatan.update(
			{
				tingkat: data.tingkat,
				bidang: data.bidang,
			},
			{
				where: {
					id_ijazah: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Ijazah Jabatan Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteIjazahJabatan = async (req, res) => {
	const ijazah = await IjazahJabatan.findOne({
		where: {
			id_ijazah: req.params.id,
		},
	})
	if (!ijazah) {
		res.status(404).json({ message: "Ijazah Jabatan Not Found" })
		return
	}
	try {
		await IjazahJabatan.destroy({
			where: {
				id_ijazah: req.params.id,
			},
		})
		res.status(200).json({ message: "Ijazah Jabatan Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
