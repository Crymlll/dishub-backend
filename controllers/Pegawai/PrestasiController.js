import { PrestasiPegawai } from "../../models/Pegawai/PrestasiModel.js"
import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"
import fs from "fs"

export const getPrestasiPegawai = async (req, res) => {
	try {
		const response = await PrestasiPegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPrestasiPegawaiById = async (req, res) => {
	try {
		const response = await PrestasiPegawai.findOne({
			where: {
				id_prestasi: req.params.id,
			},
		})

		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPrestasiPegawaiByPegawaiId = async (req, res) => {
	try {
		const response = await PrestasiPegawai.findAll({
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

export const createPrestasiPegawai = async (req, res) => {
	const data = req.body

	let file_prestasi = ""

	let ext_prestasi = ""

	let fileName_prestasi = "file.png"

	let url_prestasi = `${req.protocol}://${req.get("host")}/template/file.png`

	if (req.files != null) {
		file_prestasi = req.files.file_prestasi
		const timestamp = new Date().getTime()
		ext_prestasi = path.extname(file_prestasi.name)
		fileName_prestasi = file_prestasi.md5 + timestamp + ext_prestasi
		url_prestasi = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_prestasi}`

		file_prestasi.mv(`./public/files/${fileName_prestasi}`, async (err) => {
			if (err) return await res.status(500).json({ message: err.message })
		})
	}

	try {
		await PrestasiPegawai.create({
			id_pegawai: data.id_pegawai,
			tahun_prestasi: data.tahun_prestasi || "",
			indeks_prestasi: data.indeks_prestasi || "",
			nilai_prestasi: data.nilai_prestasi || "",
			tgl_skp: data.tgl_skp || "",

			file_prestasi: fileName_prestasi,
			url_file_prestasi: url_prestasi,
		}).then((response) => {
			res.status(201).json({
				message: "Prestasi Pegawai Created",
				id_prestasi: response.id_prestasi,
			})
		})
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const updatePrestasiPegawai = async (req, res) => {
	const prestasi = await PrestasiPegawai.findOne({
		where: {
			id_prestasi: req.params.id,
		},
	})

	if (!prestasi) {
		return res.status(404).json({ message: "Prestasi Pegawai Not Found" })
	}

	const data = req.body

	let fileName_prestasi = prestasi.file_prestasi

	let ext_prestasi = ""

	let url_prestasi = prestasi.url_file_prestasi

	if (req.files != null) {
		const timestamp = new Date().getTime()
		ext_prestasi = path.extname(req.files.file_prestasi.name)
		fileName_prestasi =
			req.files.file_prestasi.md5 + timestamp + ext_prestasi
		url_prestasi = `${req.protocol}://${req.get(
			"host"
		)}/files/${fileName_prestasi}`

		req.files.file_prestasi.mv(
			`./public/files/${fileName_prestasi}`,
			async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			}
		)
	}

	try {
		await PrestasiPegawai.update(
			{
				tahun_prestasi: data.tahun_prestasi,
				indeks_prestasi: data.indeks_prestasi,
				nilai_prestasi: data.nilai_prestasi,
				tgl_skp: data.tgl_skp,

				file_prestasi: fileName_prestasi,
				url_file_prestasi: url_prestasi,
			},
			{
				where: {
					id_prestasi: req.params.id,
				},
			}
		)
		res.status(201).json({ message: "Prestasi Pegawai Updated" })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
}

export const deletePrestasiPegawai = async (req, res) => {
	const prestasi = await PrestasiPegawai.findOne({
		where: {
			id_prestasi: req.params.id,
		},
	})
	if (!prestasi) {
		res.status(404).json({ message: "Prestasi Pegawai Not Found" })
		return
	}
	try {
		const filepath_prestasi = `./public/files/${prestasi.file_prestasi}`

		if (fs.existsSync(filepath_prestasi)) {
			fs.unlinkSync(filepath_prestasi)
		}

		await PrestasiPegawai.destroy({
			where: {
				id_prestasi: req.params.id,
			},
		})
		res.status(200).json({ message: "Prestasi Pegawai Deleted" })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
}
