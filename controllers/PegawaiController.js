import Pegawai from "../models/PegawaiModel.js"
import path from "path"
import fs from "fs"

export const getPegawai = async (req, res) => {
	try {
		const response = await Pegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPegawaiById = async (req, res) => {
	try {
		const response = await Pegawai.findOne({
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

export const createPegawai = async (req, res) => {
	if (req.files === null) {
		return res.status(400).json({ message: "No file uploaded" })
	}
	const name = req.body.title
	const file = req.files.file
	const fileSize = file.data.length
	const ext = path.extname(file.name)
	const fileName = file.md5 + ext
	const url = `${req.protocol}://${req.get("host")}/files/${fileName}`
	const allowedType = [
		".jpg",
		".jpeg",
		".png",
		".gif",
		".pdf",
		".xlsx",
		"docx",
		"doc",
		".zip",
	]
	if (!allowedType.includes(ext.toLowerCase())) {
		return res.status(422).json({ message: "File type not allowed" })
	}
	if (fileSize > 3000000) {
		return res
			.status(422)
			.json({ message: "File size too large, must be less than 3MB" })
	}

	file.mv(`./public/files/${fileName}`, async (err) => {
		if (err) return res.status(500).json({ message: err.message })
		try {
			await Pegawai.create({
				name: name,
				file: fileName,
				url: url,
			})
			return res.status(201).json({ message: "File uploaded" })
		} catch (error) {
			console.log(error.message)
			return res.status(500).json({ message: error.message })
		}
	})
}

export const updatePegawai = async (req, res) => {
	const pegawai = await Pegawai.findOne({
		where: {
			id_pegawai: req.params.id,
		},
	})
	if (!pegawai) {
		return res.status(404).json({ message: "Pegawai not found" })
	}

	let fileName = ""
	if (req.files === null) {
		fileName = pegawai.file
	} else {
		const file = req.files.file
		const fileSize = file.data.length
		const ext = path.extname(file.name)
		fileName = file.md5 + ext
		const allowedType = [
			".jpg",
			".jpeg",
			".png",
			".gif",
			".pdf",
			".xlsx",
			"docx",
			"doc",
			".zip",
		]
		if (!allowedType.includes(ext.toLowerCase())) {
			return res.status(422).json({ message: "File type not allowed" })
		}
		if (fileSize > 3000000) {
			return res
				.status(422)
				.json({ message: "File size too large, must be less than 3MB" })
		}
		const filepath = `./public/files/${pegawai.file}`
		fs.unlinkSync(filepath)
		file.mv(`./public/files/${fileName}`, (err) => {
			if (err) return res.status(500).json({ message: err.message })
		})
	}

	const name = req.body.title
	const url = `${req.protocol}://${req.get("host")}/files/${fileName}`
	try {
		await Pegawai.update(
			{
				name: name,
				file: fileName,
				url: url,
			},
			{
				where: {
					id_pegawai: req.params.id,
				},
			}
		)
		res.status(200).json({ message: "Pegawai updated" })
	} catch (error) {
		console.log(error.message)
	}
}

export const deletePegawai = async (req, res) => {
	const pegawai = await Pegawai.findOne({
		where: {
			id_pegawai: req.params.id,
		},
	})
	if (!pegawai) {
		return res.status(404).json({ message: "Pegawai not found" })
	}

	try {
		const filepath = `./public/files/${pegawai.file}`
		fs.unlinkSync(filepath)
		await Pegawai.destroy({
			where: {
				id_pegawai: req.params.id,
			},
		})
		res.status(200).json({ message: "Pegawai deleted" })
	} catch (error) {
		console.log(error.message)
	}
}
