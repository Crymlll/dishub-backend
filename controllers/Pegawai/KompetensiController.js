import { KompetensiPegawai } from "../../models/Pegawai/KompetensiModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"
import fs from "fs"

export const getKompetensiPegawai = async (req, res) => {
	try {
		const response = await KompetensiPegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getKompetensiPegawaiById = async (req, res) => {
	try {
		const response = await KompetensiPegawai.findOne({
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

export const getKompetensiPegawaiByPegawaiId = async (req, res) => {
	try {
		const response = await KompetensiPegawai.findAll({
			where: {
				id_pegawai: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createKompetensiPegawai = async (req, res) => {
	const data = req.body

	let file_kompetensi = ""

	let ext_kompetensi = ""

	let fileName_kompetensi = "file.png"

	let url_kompetensi = `${req.protocol}://${req.get(
		"host"
	)}/template/file.png`

	if (req.files != null) {
		file_kompetensi = req.files.file_kompetensi
		const timestamp = new Date().getTime()
		ext_kompetensi = path.extname(file_kompetensi.name)
		fileName_kompetensi = file_kompetensi.md5 + timestamp + ext_kompetensi
		url_kompetensi = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_kompetensi}`

		file_kompetensi.mv(
			`./public/files/${fileName_kompetensi}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await KompetensiPegawai.create({
			id_pegawai: data.id_pegawai,
			nama_kompetensi: data.nama_kompetensi || "",
			tgl_kompetensi: data.tgl_kompetensi || "",

			file_kompetensi: fileName_kompetensi,
			url_file_kompetensi: url_kompetensi,
		}).then((response) => {
			res.status(201).json({
				message: "Kompetensi Pegawai Created",
				id_kompetensi: response.id_kompetensi,
			})
		})
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateKompetensiPegawai = async (req, res) => {
	const kompetensi = await KompetensiPegawai.findOne({
		where: {
			id_kompetensi: req.params.id,
		},
	})

	if (!kompetensi) {
		return res.status(404).json({ message: "Kompetensi Pegawai Not Found" })
	}

	const data = req.body

	let fileName_kompetensi = kompetensi.file_kompetensi

	let ext_kompetensi = ""

	let url_kompetensi = kompetensi.url_file_kompetensi

	if (req.files != null) {
		const timestamp = new Date().getTime()
		ext_kompetensi = path.extname(req.files.file_kompetensi.name)
		fileName_kompetensi =
			req.files.file_kompetensi.md5 + timestamp + ext_kompetensi
		url_kompetensi = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_kompetensi}`

		req.files.file_kompetensi.mv(
			`./public/files/${fileName_kompetensi}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await KompetensiPegawai.update(
			{
				nama_kompetensi: data.nama_kompetensi,
				tgl_kompetensi: data.tgl_kompetensi,

				file_kompetensi: fileName_kompetensi,
				url_file_kompetensi: url_kompetensi,
			},
			{
				where: {
					id_kompetensi: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Kompetensi Pegawai Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteKompetensiPegawai = async (req, res) => {
	const kompetensi = await KompetensiPegawai.findOne({
		where: {
			id_kompetensi: req.params.id,
		},
	})
	if (!kompetensi) {
		res.status(404).json({ message: "Kompetensi Pegawai Not Found" })
		return
	}
	try {
		const filepath_kompetensi = `./public/files/${kompetensi.file_kompetensi}`

		if (fs.existsSync(filepath_kompetensi)) {
			fs.unlinkSync(filepath_kompetensi)
		}

		await KompetensiPegawai.destroy({
			where: {
				id_kompetensi: req.params.id,
			},
		})
		res.status(200).json({ message: "Kompetensi Pegawai Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
