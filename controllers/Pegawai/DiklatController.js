import { DiklatPegawai } from "../../models/Pegawai/DiklatModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"
import fs from "fs"

export const getDiklatPegawai = async (req, res) => {
	try {
		const response = await DiklatPegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getDiklatPegawaiById = async (req, res) => {
	try {
		const response = await DiklatPegawai.findOne({
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

export const getDiklatPegawaiByPegawaiId = async (req, res) => {
	try {
		const response = await DiklatPegawai.findAll({
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

export const createDiklatPegawai = async (req, res) => {
	const data = req.body

	let file_diklat = ""

	let ext_diklat = ""

	let fileName_diklat = "file.png"

	let url_diklat = `${req.protocol}://${req.get("host")}/template/file.png`

	if (req.files != null) {
		file_diklat = req.files.file_diklat
		const timestamp = new Date().getTime()
		ext_diklat = path.extname(file_diklat.name)
		fileName_diklat = file_diklat.md5 + timestamp + ext_diklat
		url_diklat = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_diklat}`

		file_diklat.mv(`./public/files/${fileName_diklat}`, async (err) => {
			if (err) return await res.status(500).json({ message: err.message })
		})
	}

	try {
		await DiklatPegawai.create({
			id_pegawai: data.id_pegawai,
			nama_diklat: data.nama_diklat || "",
			tempat_diklat: data.tempat_diklat || "",
			penyelenggara: data.penyelenggara || "",
			no_sttp: data.no_sttp || "",
			tgl_sttp: data.tgl_sttp || "",

			file_diklat: fileName_diklat,
			url_file_diklat: url_diklat,
		})
		res.status(201).json({ message: "Diklat Pegawai Created" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updateDiklatPegawai = async (req, res) => {
	const diklat = await DiklatPegawai.findOne({
		where: {
			id_diklat: req.params.id,
		},
	})

	if (!diklat) {
		return res.status(404).json({ message: "Diklat Pegawai Not Found" })
	}

	const data = req.body

	let fileName_diklat = diklat.file_diklat

	let ext_diklat = ""

	let url_diklat = diklat.url_file_diklat

	if (req.files != null) {
		const timestamp = new Date().getTime()
		ext_diklat = path.extname(req.files.file_diklat.name)
		fileName_diklat = req.files.file_diklat.md5 + timestamp + ext_diklat
		url_diklat = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_diklat}`

		req.files.file_diklat.mv(
			`./public/files/${fileName_diklat}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await DiklatPegawai.update(
			{
				nama_diklat: data.nama_diklat,
				tempat_diklat: data.tempat_diklat,
				penyelenggara: data.penyelenggara,
				no_sttp: data.no_sttp,
				tgl_sttp: data.tgl_sttp,

				file_diklat: fileName_diklat,
				url_file_diklat: url_diklat,
			},
			{
				where: {
					id_diklat: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Diklat Pegawai Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deleteDiklatPegawai = async (req, res) => {
	const diklat = await DiklatPegawai.findOne({
		where: {
			id_diklat: req.params.id,
		},
	})
	if (!diklat) {
		res.status(404).json({ message: "Diklat Pegawai Not Found" })
		return
	}
	try {
		const filepath_diklat = `./public/files/${diklat.file_diklat}`

		if (fs.existsSync(filepath_diklat)) {
			fs.unlinkSync(filepath_diklat)
		}

		await DiklatPegawai.destroy({
			where: {
				id_diklat: req.params.id,
			},
		})
		res.status(200).json({ message: "Diklat Pegawai Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
