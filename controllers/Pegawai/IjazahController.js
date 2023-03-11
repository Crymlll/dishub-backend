import { IjazahPegawai } from "../../models/Pegawai/IjazahModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"
import fs from "fs"

export const getIjazahPegawai = async (req, res) => {
	try {
		const response = await IjazahPegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getIjazahPegawaiById = async (req, res) => {
	try {
		const response = await IjazahPegawai.findOne({
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

export const getIjazahPegawaiByPegawaiId = async (req, res) => {
	try {
		const response = await IjazahPegawai.findAll({
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

export const createIjazahPegawai = async (req, res) => {
	const data = req.body

	let file_ijazah = ""

	let ext_ijazah = ""

	let fileName_ijazah = "file.png"

	let url_ijazah = `${req.protocol}://${req.get("host")}/template/file.png`

	if (req.files != null) {
		file_ijazah = req.files.file_ijazah
		const timestamp = new Date().getTime()
		ext_ijazah = path.extname(file_ijazah.name)
		fileName_ijazah = file_ijazah.md5 + timestamp + ext_ijazah
		url_ijazah = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_ijazah}`

		file_ijazah.mv(`./public/files/${fileName_ijazah}`, async (err) => {
			if (err) return await res.status(500).json({ message: err.message })
		})
	}

	try {
		await IjazahPegawai.create({
			id_pegawai: data.id_pegawai,
			tingkat_ijazah: data.tingkat_ijazah,
			bidang_ijazah: data.bidang_ijazah,
			no_sk_ijazah: data.no_sk_ijazah,
			tgl_sk_ijazah: data.tgl_sk_ijazah,

			file_ijazah: fileName_ijazah,
			url_file_ijazah: url_ijazah,
		})
		res.status(201).json({ message: "Ijazah Pegawai Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateIjazahPegawai = async (req, res) => {
	const ijazah = await IjazahPegawai.findOne({
		where: {
			id_ijazah: req.params.id,
		},
	})

	if (!ijazah) {
		return res.status(404).json({ message: "Ijazah Pegawai Not Found" })
	}

	const data = req.body

	let fileName_ijazah = ijazah.file_ijazah

	let ext_ijazah = ""

	let url_ijazah = ijazah.url_file_ijazah

	if (req.files != null) {
		const timestamp = new Date().getTime()
		ext_ijazah = path.extname(req.files.file_ijazah.name)
		fileName_ijazah = req.files.file_ijazah.md5 + timestamp + ext_ijazah
		url_ijazah = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_ijazah}`

		req.files.file_ijazah.mv(
			`./public/files/${fileName_ijazah}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await IjazahPegawai.update(
			{
				tingkat_ijazah: data.tingkat_ijazah,
				bidang_ijazah: data.bidang_ijazah,
				no_sk_ijazah: data.no_sk_ijazah,
				tgl_sk_ijazah: data.tgl_sk_ijazah,

				file_ijazah: fileName_ijazah,
				url_file_ijazah: url_ijazah,
			},
			{
				where: {
					id_ijazah: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Ijazah Pegawai Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteIjazahPegawai = async (req, res) => {
	const ijazah = await IjazahPegawai.findOne({
		where: {
			id_ijazah: req.params.id,
		},
	})
	if (!ijazah) {
		res.status(404).json({ message: "Ijazah Pegawai Not Found" })
		return
	}
	try {
		const filepath_ijazah = `./public/files/${ijazah.file_ijazah}`

		if (fs.existsSync(filepath_ijazah)) {
			fs.unlinkSync(filepath_ijazah)
		}

		await IjazahPegawai.destroy({
			where: {
				id_ijazah: req.params.id,
			},
		})
		res.status(200).json({ message: "Ijazah Pegawai Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
