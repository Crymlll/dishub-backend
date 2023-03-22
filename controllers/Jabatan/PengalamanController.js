import { PengalamanJabatan } from "../../models/Jabatan/PengalamanModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"

export const getPengalamanJabatan = async (req, res) => {
	try {
		const response = await PengalamanJabatan.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPengalamanById = async (req, res) => {
	try {
		const response = await PengalamanJabatan.findOne({
			where: {
				id_pengalaman: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPengalamanJabatanById = async (req, res) => {
	try {
		const response = await PengalamanJabatan.findAll({
			where: {
				id_jabatan: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createPengalamanJabatan = async (req, res) => {
	const data = req.body

	try {
		await PengalamanJabatan.create({
			id_jabatan: data.id_jabatan || "",
			nama: data.nama || "",
			lama: data.lama || "",
		}).then((response) => {
			res.status(201).json({
				message: "Pengalaman Jabatan Created",
				id_pengalaman: response.id_pengalaman,
			})
		})
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updatePengalamanJabatan = async (req, res) => {
	const pengalaman = await PengalamanJabatan.findOne({
		where: {
			id_pengalaman: req.params.id,
		},
	})

	if (!pengalaman) {
		return res.status(404).json({ message: "Pengalaman Jabatan Not Found" })
	}

	const data = req.body

	try {
		await PengalamanJabatan.update(
			{
				nama: data.nama,
				lama: data.lama,
			},
			{
				where: {
					id_pengalaman: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Pengalaman Jabatan Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deletePengalamanJabatan = async (req, res) => {
	const pengalaman = await PengalamanJabatan.findOne({
		where: {
			id_pengalaman: req.params.id,
		},
	})
	if (!pengalaman) {
		res.status(404).json({ message: "Pengalaman Jabatan Not Found" })
		return
	}
	try {
		await PengalamanJabatan.destroy({
			where: {
				id_pengalaman: req.params.id,
			},
		})
		res.status(200).json({ message: "Pengalaman Jabatan Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
