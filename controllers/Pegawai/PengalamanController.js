import { PengalamanPegawai } from "../../models/Pegawai/PengalamanModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"
import fs from "fs"

export const getPengalamanPegawai = async (req, res) => {
	try {
		const response = await PengalamanPegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPengalamanPegawaiById = async (req, res) => {
	try {
		const response = await PengalamanPegawai.findOne({
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

export const getPengalamanPegawaiByPegawaiId = async (req, res) => {
	try {
		const response = await PengalamanPegawai.findAll({
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

export const createPengalamanPegawai = async (req, res) => {
	const data = req.body

	let file_pengalaman = ""

	let ext_pengalaman = ""

	let fileName_pengalaman = "file.png"

	let url_pengalaman = `${req.protocol}://${req.get(
		"host"
	)}/template/file.png`

	if (req.files != null) {
		file_pengalaman = req.files.file_pengalaman
		const timestamp = new Date().getTime()
		ext_pengalaman = path.extname(file_pengalaman.name)
		fileName_pengalaman = file_pengalaman.md5 + timestamp + ext_pengalaman
		url_pengalaman = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_pengalaman}`

		file_pengalaman.mv(
			`./public/files/${fileName_pengalaman}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await PengalamanPegawai.create({
			id_pegawai: data.id_pegawai,
			nama_pengalaman: data.nama_pengalaman,
			lama_pengalaman: data.lama_pengalaman,
			no_sk: data.no_sk,

			file_pengalaman: fileName_pengalaman,
			url_file_pengalaman: url_pengalaman,
		})
		res.status(201).json({ message: "Pengalaman Pegawai Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updatePengalamanPegawai = async (req, res) => {
	const pengalaman = await PengalamanPegawai.findOne({
		where: {
			id_pengalaman: req.params.id,
		},
	})

	if (!pengalaman) {
		return res.status(404).json({ message: "Pengalaman Pegawai Not Found" })
	}

	const data = req.body

	let fileName_pengalaman = pengalaman.file_pengalaman

	let ext_pengalaman = ""

	let url_pengalaman = pengalaman.url_file_pengalaman

	if (req.files != null) {
		const timestamp = new Date().getTime()
		ext_pengalaman = path.extname(req.files.file_pengalaman.name)
		fileName_pengalaman =
			req.files.file_pengalaman.md5 + timestamp + ext_pengalaman
		url_pengalaman = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_pengalaman}`

		req.files.file_pengalaman.mv(
			`./public/files/${fileName_pengalaman}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await PengalamanPegawai.update(
			{
				nama_pengalaman: data.nama_pengalaman,
				lama_pengalaman: data.lama_pengalaman,
				no_sk: data.no_sk,

				file_pengalaman: fileName_pengalaman,
				url_file_pengalaman: url_pengalaman,
			},
			{
				where: {
					id_pengalaman: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Pengalaman Pegawai Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deletePengalamanPegawai = async (req, res) => {
	const pengalaman = await PengalamanPegawai.findOne({
		where: {
			id_pengalaman: req.params.id,
		},
	})
	if (!pengalaman) {
		res.status(404).json({ message: "Pengalaman Pegawai Not Found" })
		return
	}
	try {
		const filepath_pengalaman = `./public/files/${pengalaman.file_pengalaman}`

		if (fs.existsSync(filepath_pengalaman)) {
			fs.unlinkSync(filepath_pengalaman)
		}

		await PengalamanPegawai.destroy({
			where: {
				id_pengalaman: req.params.id,
			},
		})
		res.status(200).json({ message: "Pengalaman Pegawai Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
