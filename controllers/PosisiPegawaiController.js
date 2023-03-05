import { PosisiPegawai } from "../models/PosisiPegawaiModel.js"
import { allowedType, maxFileSize } from "../config/Form.js"
import path from "path"
import fs from "fs"

export const getPosisiPegawai = async (req, res) => {
	try {
		const response = await PosisiPegawai.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPosisiPegawaiById = async (req, res) => {
	try {
		const response = await PosisiPegawai.findOne({
			where: {
				id_posisi_pegawai: req.params.id,
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createPosisiPegawai = async (req, res) => {
	const data = req.body

	try {
		await PosisiPegawai.create({
			id_pegawai: data.id_pegawai,
			pangkat: data.pangkat,
			golongan: data.golongan,
			jenis_jabatan: data.jenis_jabatan,
			bidang: data.bidang,
			jabatan: data.jabatan,
			eselon: data.eselon,
		})
		res.status(201).json({ message: "Pegawai Created" })
	} catch (error) {
		console.log(error.message)
	}
}

export const updatePosisiPegawai = async (req, res) => {}
