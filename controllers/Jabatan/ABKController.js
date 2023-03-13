import { ABKJabatan } from "../../models/Jabatan/ABKModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"

export const getABKJabatan = async (req, res) => {
	try {
		const response = await ABKJabatan.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getABKJabatanById = async (req, res) => {
	try {
		const response = await ABKJabatan.findOne({
			where: {
				id_abk: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createABKJabatan = async (req, res) => {
	const data = req.body

	try {
		await ABKJabatan.create({
			id_jabatan: data.id_jabatan || "",
			uraian_tugas: data.uraian_tugas || "",
			satuan_hasil: data.satuan_hasil || "",
			waktu_penyelesaian: data.waktu_penyelesaian || "",
			waktu_kerja_efektif: data.waktu_kerja_efektif || "",
			beban_kerja: data.beban_kerja || "",
			kebutuhan_pegawai: data.kebutuhan_pegawai || "",
		})
		res.status(201).json({ message: "ABK Jabatan Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateABKJabatan = async (req, res) => {
	const abk = await ABKJabatan.findOne({
		where: {
			id_abk: req.params.id,
		},
	})

	if (!abk) {
		return res.status(404).json({ message: "ABK Jabatan Not Found" })
	}

	const data = req.body

	try {
		await ABKJabatan.update(
			{
				uraian_tugas: data.uraian_tugas,
				satuan_hasil: data.satuan_hasil,
				waktu_penyelesaian: data.waktu_penyelesaian,
				waktu_kerja_efektif: data.waktu_kerja_efektif,
				beban_kerja: data.beban_kerja,
				kebutuhan_pegawai: data.kebutuhan_pegawai,
			},
			{
				where: {
					id_abk: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "ABK Jabatan Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteABKJabatan = async (req, res) => {
	const abk = await ABKJabatan.findOne({
		where: {
			id_abk: req.params.id,
		},
	})
	if (!abk) {
		res.status(404).json({ message: "ABK Jabatan Not Found" })
		return
	}
	try {
		await ABKJabatan.destroy({
			where: {
				id_abk: req.params.id,
			},
		})
		res.status(200).json({ message: "ABK Jabatan Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
