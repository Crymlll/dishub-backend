import { SpesialisasiPegawai } from "../../models/Pegawai/SpesialisasiModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"
import fs from "fs"

export const getSpesialisasiPegawai = async (req, res) => {
	try {
		const response = await SpesialisasiPegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getSpesialisasiPegawaiById = async (req, res) => {
	try {
		const response = await SpesialisasiPegawai.findOne({
			where: {
				id_spesialisasi: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getSpesialisasiPegawaiByPegawaiId = async (req, res) => {
	try {
		const response = await SpesialisasiPegawai.findAll({
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

export const createSpesialisasiPegawai = async (req, res) => {
	const data = req.body

	let file_spesialisasi = ""

	let ext_spesialisasi = ""

	let fileName_spesialisasi = "file.png"

	let url_spesialisasi = `${req.protocol}://${req.get(
		"host"
	)}/template/file.png`

	if (req.files != null) {
		file_spesialisasi = req.files.file_spesialisasi
		const timestamp = new Date().getTime()
		ext_spesialisasi = path.extname(file_spesialisasi.name)
		fileName_spesialisasi =
			file_spesialisasi.md5 + timestamp + ext_spesialisasi
		url_spesialisasi = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_spesialisasi}`

		file_spesialisasi.mv(
			`./public/files/${fileName_spesialisasi}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await SpesialisasiPegawai.create({
			id_pegawai: data.id_pegawai,
			bidang_spesialisasi: data.bidang_spesialisasi || "",
			no_sk_spesialisasi: data.no_sk_spesialisasi || "",
			tgl_sk_spesialisasi: data.tgl_sk_spesialisasi || "",

			file_spesialisasi: fileName_spesialisasi,
			url_file_spesialisasi: url_spesialisasi,
		})
		res.status(201).json({ message: "Spesialisasi Pegawai Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateSpesialisasiPegawai = async (req, res) => {
	const spesialisasi = await SpesialisasiPegawai.findOne({
		where: {
			id_spesialisasi: req.params.id,
		},
	})

	if (!spesialisasi) {
		res.status(404).json({ message: "Spesialisasi Pegawai Not Found" })
	}

	const data = req.body

	let fileName_spesialisasi = spesialisasi.file_spesialisasi

	let ext_spesialisasi = ""

	let url_spesialisasi = spesialisasi.url_file_spesialisasi

	if (req.files != null) {
		const timestamp = new Date().getTime()
		ext_spesialisasi = path.extname(req.files.file_spesialisasi.name)
		fileName_spesialisasi =
			req.files.file_spesialisasi.md5 + timestamp + ext_spesialisasi
		url_spesialisasi = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_spesialisasi}`

		req.files.file_spesialisasi.mv(
			`./public/files/${fileName_spesialisasi}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await SpesialisasiPegawai.update(
			{
				bidang_spesialisasi: data.bidang_spesialisasi,
				no_sk_spesialisasi: data.no_sk_spesialisasi,
				tgl_sk_spesialisasi: data.tgl_sk_spesialisasi,

				file_spesialisasi: fileName_spesialisasi,
				url_file_spesialisasi: url_spesialisasi,
			},
			{
				where: {
					id_spesialisasi: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Spesialisasi Pegawai Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteSpesialisasiPegawai = async (req, res) => {
	const spesialisasi = await SpesialisasiPegawai.findOne({
		where: {
			id_spesialisasi: req.params.id,
		},
	})
	if (!spesialisasi) {
		res.status(404).json({ message: "Spesialisasi Pegawai Not Found" })
		return
	}
	try {
		const filepath_spesialisasi = `./public/files/${spesialisasi.file_spesialisasi}`

		if (fs.existsSync(filepath_spesialisasi)) {
			fs.unlinkSync(filepath_spesialisasi)
		}

		await SpesialisasiPegawai.destroy({
			where: {
				id_spesialisasi: req.params.id,
			},
		})
		res.status(200).json({ message: "Spesialisasi Pegawai Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
