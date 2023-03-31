import Jabatan from "../../models/Jabatan/JabatanModel.js"
import Pegawai from "../../models/Pegawai/PegawaiModel.js"

import { ABKJabatan } from "../../models/Jabatan/ABKModel.js"
import { DiklatJabatan } from "../../models/Jabatan/DiklatModel.js"
import { IjazahJabatan } from "../../models/Jabatan/IjazahModel.js"
import { KompetensiJabatan } from "../../models/Jabatan/KompetensiModel.js"
import { PengalamanJabatan } from "../../models/Jabatan/PengalamanModel.js"

import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"

import Sequelize, { Op } from "sequelize"

export const getJabatan = async (req, res) => {
	try {
		const response = await Jabatan.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getJabatanById = async (req, res) => {
	try {
		const response = await Jabatan.findOne({
			where: {
				id_jabatan: req.params.id,
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const createJabatan = async (req, res) => {
	const data = req.body

	try {
		await Jabatan.create({
			jenis: data.jenis || "",
			eselon: data.eselon || "",
			bidang: data.bidang || "",
			subbidang: data.subbidang || "",
			nama: data.nama || "",
			status_jabatan: "aktif",
			jumlah: "",
			pemangku: "",
			rekomendasi: "",
			ikhtisar: data.ikhtisar || "",
			acuan_induk: "",
			instansi_induk_penilai: "",
			status_pns: "",
			pangkat: "",
			golongan: "",
			usia_maksimal: "",
			integritas: "",
			jasmani: "",
			tahun_terakhir: "",
			indeks: "",
		}).then((response) => {
			res.status(201).json({
				message: "Jabatan created",
				id_jabatan: response.id_jabatan,
			})
		})
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			message: error.message,
		})
	}
}

export const updateJabatan = async (req, res) => {
	const jabatan = await Jabatan.findOne({
		where: {
			id_jabatan: req.params.id,
		},
	})
	if (!jabatan) {
		return res.status(404).json({ message: "Jabatan not found" })
	}

	const data = req.body

	try {
		await Jabatan.update(
			{
				jenis: data.jenis,
				eselon: data.eselon,
				bidang: data.bidang,
				subbidang: data.subbidang,
				nama: data.nama,
				status_jabatan: data.status_jabatan,
				jumlah: data.jumlah,
				pemangku: data.pemangku,
				rekomendasi: data.rekomendasi,
				ikhtisar: data.ikhtisar,
				acuan_induk: data.acuan_induk,
				instansi_induk_penilai: data.instansi_induk_penilai,
				status_pns: data.status_pns,
				pangkat: data.pangkat,
				golongan: data.golongan,
				usia_maksimal: data.usia_maksimal,
				integritas: data.integritas,
				jasmani: data.jasmani,
				tahun_terakhir: data.tahun_terakhir,
				indeks: data.indeks,
			},
			{
				where: {
					id_jabatan: req.params.id,
				},
			}
		)
		res.status(201).json({
			message: "Jabatan updated",
		})
	} catch (error) {
		console.log(error.message)
		return res.status(400).json({ message: "Internal server error" })
	}
}

export const deleteJabatan = async (req, res) => {
	const jabatan = await Jabatan.findOne({
		where: {
			id_jabatan: req.params.id,
		},
	})
	if (!jabatan) {
		return res.status(404).json({ message: "Jabatan not found" })
	}

	try {
		await Jabatan.destroy({
			where: {
				id_jabatan: req.params.id,
			},
		})
		res.status(200).json({ message: "Jabatan deleted" })
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getTableJabatan = async (req, res) => {
	try {
		const response = await Jabatan.findAll({
			attributes: [
				"id_jabatan",
				"eselon",
				"bidang",
				"subbidang",
				"nama",
				"jumlah",
				"pemangku",
				"rekomendasi",
			],
			where: {
				status_jabatan: "aktif",
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getDifferentBidang = async (req, res) => {
	try {
		const response = await Jabatan.findAll({
			attributes: [
				"bidang",
				[Sequelize.fn("COUNT", Sequelize.col("bidang")), "jumlah"],
			],

			group: ["bidang"],
			where: {
				[Op.not]: [{ bidang: "" }],
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getDifferentSubbidang = async (req, res) => {
	try {
		const response = await Jabatan.findAll({
			attributes: ["subbidang"],
			group: ["subbidang"],
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPemangkuJabatan = async (req, res) => {
	try {
		const response = await Pegawai.findAll({
			attributes: ["nama", "nip", "email"],
			where: {
				id_jabatan: req.params.id,
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getPemetaanJabatan = async (req, res) => {
	try {
		const response = await Jabatan.findAll({
			include: [
				// {
				// 	model: ABKJabatan,
				// },
				{
					model: DiklatJabatan,
					attributes: ["nama_diklat"],
				},
				{
					model: IjazahJabatan,
					attributes: ["tingkat", "bidang"],
				},
				{
					model: KompetensiJabatan,
					attributes: ["nama_kompetensi"],
				},
				{
					model: PengalamanJabatan,
					attributes: ["nama", "lama"],
				},
			],
			where: {
				eselon: "noneselon",
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getJabatanSummary = async (req, res) => {
	try {
		const response = await Jabatan.findAll({
			attributes: [
				"id_jabatan",
				"eselon",
				"bidang",
				"subbidang",
				"nama",
				"jumlah",
				"pemangku",
				"rekomendasi",
			],
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getJabatanAktif = async (req, res) => {
	try {
		const response = await Jabatan.findAll({
			where: {
				status_jabatan: "aktif",
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}
