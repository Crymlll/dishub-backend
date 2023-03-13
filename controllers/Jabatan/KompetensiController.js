import { KompetensiJabatan } from "../../models/Jabatan/KompetensiModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"

export const getKompetensiJabatan = async (req, res) => {
	try {
		const response = await KompetensiJabatan.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getKompetensiJabatanById = async (req, res) => {
	try {
		const response = await KompetensiJabatan.findOne({
			where: {
				id_kompetensi: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createKompetensiJabatan = async (req, res) => {
	const data = req.body

	try {
		await KompetensiJabatan.create({
			id_jabatan: data.id_jabatan || "",
			nama_kompetensi: data.nama_kompetensi || "",
		})
		res.status(201).json({ message: "Kompetensi Jabatan Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateKompetensiJabatan = async (req, res) => {
	const kompetensi = await KompetensiJabatan.findOne({
		where: {
			id_kompetensi: req.params.id,
		},
	})

	if (!kompetensi) {
		return res.status(404).json({ message: "Kompetensi Jabatan Not Found" })
	}

	const data = req.body

	try {
		await KompetensiJabatan.update(
			{
				nama_kompetensi: data.nama_kompetensi,
			},
			{
				where: {
					id_kompetensi: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Kompetensi Jabatan Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteKompetensiJabatan = async (req, res) => {
	const kompetensi = await KompetensiJabatan.findOne({
		where: {
			id_kompetensi: req.params.id,
		},
	})
	if (!kompetensi) {
		res.status(404).json({ message: "Kompetensi Jabatan Not Found" })
		return
	}
	try {
		await KompetensiJabatan.destroy({
			where: {
				id_kompetensi: req.params.id,
			},
		})
		res.status(200).json({ message: "Kompetensi Jabatan Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
