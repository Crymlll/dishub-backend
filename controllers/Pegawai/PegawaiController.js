import Pegawai from "../../models/Pegawai/PegawaiModel.js"
import { DiklatPegawai } from "../../models/Pegawai/DiklatModel.js"
import { IjazahPegawai } from "../../models/Pegawai/IjazahModel.js"
import { KompetensiPegawai } from "../../models/Pegawai/KompetensiModel.js"
import { PengalamanPegawai } from "../../models/Pegawai/PengalamanModel.js"
import { PrestasiPegawai } from "../../models/Pegawai/PrestasiModel.js"

import { allowedType, maxFileSize } from "../../config/Form.js"
import path from "path"
import fs from "fs"
import { time } from "console"

import { Op } from "sequelize"

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
	const data = req.body

	let file_cpns = ""
	let file_spmt = ""
	let file_sttp_prajabatan = ""
	let file_pns = ""
	let file_nip = ""

	let ext_cpns = ""
	let ext_spmt = ""
	let ext_sttp_prajabatan = ""
	let ext_pns = ""
	let ext_nip = ""

	let fileName_cpns = ""
	let fileName_spmt = ""
	let fileName_sttp_prajabatan = ""
	let fileName_pns = ""
	let fileName_nip = ""

	let url_cpns = `${req.protocol}://${req.get("host")}/template/file.png`
	let url_spmt = `${req.protocol}://${req.get("host")}/template/file.png`
	let url_sttp_prajabatan = `${req.protocol}://${req.get(
		"host"
	)}/template/file.png`
	let url_pns = `${req.protocol}://${req.get("host")}/template/file.png`
	let url_nip = `${req.protocol}://${req.get("host")}/template/file.png`

	if (req.files != null) {
		if (req.files.file_cpns != null) {
			file_cpns = req.files.file_cpns
			const timestamp = new Date().getTime()
			ext_cpns = path.extname(file_cpns.name)
			fileName_cpns = file_cpns.md5 + timestamp + ext_cpns
			url_cpns = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_cpns}`

			file_cpns.mv(`./public/files/${fileName_cpns}`, async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			})
		}

		if (req.files.file_spmt != null) {
			file_spmt = req.files.file_spmt
			const timestamp = new Date().getTime()
			ext_spmt = path.extname(file_spmt.name)
			fileName_spmt = file_spmt.md5 + timestamp + ext_spmt
			url_spmt = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_spmt}`

			file_spmt.mv(`./public/files/${fileName_spmt}`, async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			})
		}

		if (req.files.file_sttp_prajabatan != null) {
			file_sttp_prajabatan = req.files.file_sttp_prajabatan
			const timestamp = new Date().getTime()
			ext_sttp_prajabatan = path.extname(file_sttp_prajabatan.name)
			fileName_sttp_prajabatan =
				file_sttp_prajabatan.md5 + timestamp + ext_sttp_prajabatan
			url_sttp_prajabatan = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_sttp_prajabatan}`

			file_sttp_prajabatan.mv(
				`./public/files/${fileName_sttp_prajabatan}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_pns != null) {
			file_pns = req.files.file_pns
			const timestamp = new Date().getTime()
			ext_pns = path.extname(file_pns.name)
			fileName_pns = file_pns.md5 + timestamp + ext_pns
			url_pns = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_pns}`

			file_pns.mv(`./public/files/${fileName_pns}`, async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			})
		}

		if (req.files.file_nip != null) {
			file_nip = req.files.file_nip
			const timestamp = new Date().getTime()
			ext_nip = path.extname(file_nip.name)
			fileName_nip = file_nip.md5 + timestamp + ext_nip
			url_nip = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_nip}`

			file_nip.mv(`./public/files/${fileName_nip}`, async (err) => {
				if (err)
					return await res.status(500).json({ message: err.message })
			})
		}
	}

	try {
		await Pegawai.create({
			nama: data.nama || "",
			ktp: data.ktp || "",
			tempat_lahir: data.tempat_lahir || "",
			tanggal_lahir: data.tanggal_lahir || "",
			jenis_kelamin: data.jenis_kelamin || "",
			agama: data.agama || "",
			status_kepegawaian: data.status_kepegawaian || "",
			status_perkawinan: data.status_perkawinan || "",
			golongan_darah: data.golongan_darah || "",
			alamat: data.alamat || "",
			no_hp: data.no_hp || "",
			nip: data.nip || "",
			no_sk_cpns: data.no_sk_cpns || "",
			tgl_sk_cpns: data.tgl_sk_cpns || "",
			no_spmt: data.no_spmt || "",
			tmt_spmt: data.tmt_spmt || "",
			no_sttp_prajabatan: data.no_sttp_prajabatan || "",
			tgl_prajabatan: data.tgl_prajabatan || "",
			no_sk_pns: data.no_sk_pns || "",
			tgl_sk_pns: data.tgl_sk_pns || "",
			email: data.email || "",

			file_cpns: fileName_cpns || "file.png",
			file_spmt: fileName_spmt || "file.png",
			file_sttp_prajabatan: fileName_sttp_prajabatan || "file.png",
			file_pns: fileName_pns || "file.png",
			file_nip: fileName_nip || "file.png",

			url_file_cpns:
				url_cpns || "http://localhost:5000/template/file.png",
			url_file_spmt:
				url_spmt || "http://localhost:5000/template/file.png",
			url_file_sttp_prajabatan:
				url_sttp_prajabatan ||
				"http://localhost:5000/template/file.png",
			url_file_pns: url_pns || "http://localhost:5000/template/file.png",
			url_file_nip: url_nip || "http://localhost:5000/template/file.png",

			pangkat: data.pangkat || "",
			tahun_pangkat: data.tahun_pangkat || "",
			golongan: data.golongan || "",
			id_jabatan: data.id_jabatan || "",
			jenis_jabatan: data.jenis_jabatan || "",
			bidang: data.bidang || "",
			nama_jabatan: data.nama_jabatan || "",
			eselon: data.eselon || "",

			no_npwp: "",
			file_npwp: "file.png",
			url_file_npwp: "http://localhost:5000/template/file.png",

			no_askes: "",
			file_askes: "file.png",
			url_file_askes: "http://localhost:5000/template/file.png",

			tgl_surat_sehat_jasmani: "",
			file_surat_sehat_jasmani: "file.png",
			url_file_surat_sehat_jasmani:
				"http://localhost:5000/template/file.png",

			tgl_surat_integritas: "",
			file_surat_integritas: "file.png",
			url_file_surat_integritas:
				"http://localhost:5000/template/file.png",
		}).then((response) => {
			res.status(201).json({
				message: "Pegawai created successfully",
				id_pegawai: response.id_pegawai,
			})
		})
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			message: error.message,
		})
	}
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

	const data = req.body

	let fileName_cpns = pegawai.file_cpns
	let fileName_spmt = pegawai.file_spmt
	let fileName_sttp_prajabatan = pegawai.file_sttp_prajabatan
	let fileName_pns = pegawai.file_pns
	let fileName_npwp = pegawai.file_npwp
	let fileName_askes = pegawai.file_askes
	let fileName_surat_sehat_jasmani = pegawai.file_surat_sehat_jasmani
	let fileName_surat_integritas = pegawai.file_surat_integritas
	let fileName_nip = pegawai.file_nip

	let ext_cpns = ""
	let ext_spmt = ""
	let ext_sttp_prajabatan = ""
	let ext_pns = ""
	let ext_npwp = ""
	let ext_askes = ""
	let ext_surat_sehat_jasmani = ""
	let ext_surat_integritas = ""
	let ext_nip = ""

	let url_cpns = pegawai.url_file_cpns
	let url_spmt = pegawai.url_file_spmt
	let url_sttp_prajabatan = pegawai.url_file_sttp_prajabatan
	let url_pns = pegawai.url_file_pns
	let url_npwp = pegawai.url_file_npwp
	let url_askes = pegawai.url_file_askes
	let url_surat_sehat_jasmani = pegawai.url_file_surat_sehat_jasmani
	let url_surat_integritas = pegawai.url_file_surat_integritas
	let url_nip = pegawai.url_file_nip

	if (req.files != null) {
		if (req.files.file_cpns == null) {
			fileName_cpns = pegawai.file_cpns
			url_cpns = pegawai.url_file_cpns
		} else {
			// const filepath_cpns = `./public/files/${fileName_cpns}`
			// fs.unlinkSync(filepath_cpns)

			const timestamp = new Date().getTime()
			ext_cpns = path.extname(req.files.file_cpns.name)
			fileName_cpns = req.files.file_cpns.md5 + timestamp + ext_cpns
			url_cpns = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_cpns}`

			req.files.file_cpns.mv(
				`./public/files/${fileName_cpns}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_spmt == null) {
			fileName_spmt = pegawai.file_spmt
			url_spmt = pegawai.url_file_spmt
		} else {
			// const filepath_spmt = `./public/files/${fileName_spmt}`
			// fs.unlink(filepath_spmt)

			const timestamp = new Date().getTime()
			ext_spmt = path.extname(req.files.file_spmt.name)
			fileName_spmt = req.files.file_spmt.md5 + timestamp + ext_spmt
			url_spmt = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_spmt}`

			req.files.file_spmt.mv(
				`./public/files/${fileName_spmt}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_sttp_prajabatan == null) {
			fileName_sttp_prajabatan = pegawai.file_sttp_prajabatan
			url_sttp_prajabatan = pegawai.url_file_sttp_prajabatan
		} else {
			// const filepath_sttp_prajabatan = `./public/files/${pegawai.fileName_sttp_prajabatan}`
			// fs.unlinkSync(filepath_sttp_prajabatan)

			const timestamp = new Date().getTime()
			ext_sttp_prajabatan = path.extname(
				req.files.file_sttp_prajabatan.name
			)
			fileName_sttp_prajabatan =
				req.files.file_sttp_prajabatan.md5 +
				timestamp +
				ext_sttp_prajabatan
			url_sttp_prajabatan = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_sttp_prajabatan}`

			req.files.file_sttp_prajabatan.mv(
				`./public/files/${fileName_sttp_prajabatan}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_pns == null) {
			fileName_pns = pegawai.file_pns
			url_pns = pegawai.url_file_pns
		} else {
			// const filepath_file_pns = `./public/files/${pegawai.fileName_pns}`
			// fs.unlinkSync(filepath_file_pns)

			const timestamp = new Date().getTime()
			ext_pns = path.extname(req.files.file_pns.name)
			fileName_pns = req.files.file_pns.md5 + timestamp + ext_pns
			url_pns = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_pns}`

			req.files.file_pns.mv(
				`./public/files/${fileName_pns}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_npwp == null) {
			fileName_npwp = pegawai.file_npwp
			url_npwp = pegawai.url_file_npwp
		} else {
			const timestamp = new Date().getTime()
			ext_npwp = path.extname(req.files.file_npwp.name)
			fileName_npwp = req.files.file_npwp.md5 + timestamp + ext_npwp
			url_npwp = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_npwp}`

			req.files.file_npwp.mv(
				`./public/files/${fileName_npwp}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_askes == null) {
			fileName_askes = pegawai.file_askes
			url_askes = pegawai.url_file_askes
		} else {
			const timestamp = new Date().getTime()
			ext_askes = path.extname(req.files.file_askes.name)
			fileName_askes = req.files.file_askes.md5 + timestamp + ext_askes
			url_askes = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_askes}`

			req.files.file_askes.mv(
				`./public/files/${fileName_askes}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_surat_sehat_jasmani == null) {
			fileName_surat_sehat_jasmani = pegawai.file_surat_sehat_jasmani
			url_surat_sehat_jasmani = pegawai.url_file_surat_sehat_jasmani
		} else {
			const timestamp = new Date().getTime()
			ext_surat_sehat_jasmani = path.extname(
				req.files.file_surat_sehat_jasmani.name
			)
			fileName_surat_sehat_jasmani =
				req.files.file_surat_sehat_jasmani.md5 +
				timestamp +
				ext_surat_sehat_jasmani
			url_surat_sehat_jasmani = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_surat_sehat_jasmani}`

			req.files.file_surat_sehat_jasmani.mv(
				`./public/files/${fileName_surat_sehat_jasmani}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_surat_integritas == null) {
			fileName_surat_integritas = pegawai.file_surat_integritas
			url_surat_integritas = pegawai.url_file_surat_integritas
		} else {
			const timestamp = new Date().getTime()
			ext_surat_integritas = path.extname(
				req.files.file_surat_integritas.name
			)
			fileName_surat_integritas =
				req.files.file_surat_integritas.md5 +
				timestamp +
				ext_surat_integritas
			url_surat_integritas = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_surat_integritas}`

			req.files.file_surat_integritas.mv(
				`./public/files/${fileName_surat_integritas}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}

		if (req.files.file_nip == null) {
			fileName_nip = pegawai.file_nip
			url_nip = pegawai.url_file_nip
		} else {
			const timestamp = new Date().getTime()
			ext_nip = path.extname(req.files.file_nip.name)
			fileName_nip = req.files.file_nip.md5 + timestamp + ext_nip
			url_nip = `${req.protocol}://${req.get(
				"host"
			)}/files/${fileName_nip}`

			req.files.file_nip.mv(
				`./public/files/${fileName_nip}`,
				async (err) => {
					if (err)
						return await res
							.status(500)
							.json({ message: err.message })
				}
			)
		}
	}

	try {
		await Pegawai.update(
			{
				nip: data.nip,
				nama: data.nama,
				ktp: data.ktp,
				tempat_lahir: data.tempat_lahir,
				tanggal_lahir: data.tanggal_lahir,
				jenis_kelamin: data.jenis_kelamin,
				agama: data.agama,
				status_kepegawaian: data.status_kepegawaian,
				status_perkawinan: data.status_perkawinan,
				golongan_darah: data.golongan_darah,
				alamat: data.alamat,
				no_hp: data.no_hp,
				nip: data.nip,
				no_sk_cpns: data.no_sk_cpns,
				tgl_sk_cpns: data.tgl_sk_cpns,
				no_spmt: data.no_spmt,
				tmt_spmt: data.tmt_spmt,
				no_sttp_prajabatan: data.no_sttp_prajabatan,
				tgl_prajabatan: data.tgl_prajabatan,
				no_sk_pns: data.no_sk_pns,
				tgl_sk_pns: data.tgl_sk_pns,
				email: data.email,

				file_cpns: fileName_cpns,
				file_spmt: fileName_spmt,
				file_sttp_prajabatan: fileName_sttp_prajabatan,
				file_pns: fileName_pns,
				file_nip: fileName_nip,

				url_file_cpns: url_cpns,
				url_file_spmt: url_spmt,
				url_file_sttp_prajabatan: url_sttp_prajabatan,
				url_file_pns: url_pns,
				url_file_nip: url_nip,

				pangkat: data.pangkat,
				tahun_pangkat: data.tahun_pangkat,
				golongan: data.golongan,
				jenis_jabatan: data.jenis_jabatan,
				bidang: data.bidang,
				id_jabatan: data.id_jabatan,
				nama_jabatan: data.nama_jabatan,
				eselon: data.eselon,

				no_npwp: data.no_npwp,
				file_npwp: fileName_npwp,
				url_file_npwp: url_npwp,

				no_askes: data.no_askes,
				file_askes: fileName_askes,
				url_file_askes: url_askes,

				tgl_surat_sehat_jasmani: data.tgl_surat_sehat_jasmani,
				file_surat_sehat_jasmani: fileName_surat_sehat_jasmani,
				url_file_surat_sehat_jasmani: url_surat_sehat_jasmani,

				tgl_surat_integritas: data.tgl_surat_integritas,
				file_surat_integritas: fileName_surat_integritas,
				url_file_surat_integritas: url_surat_integritas,
			},
			{
				where: {
					id_pegawai: req.params.id,
				},
			}
		)
		res.status(201).json({
			message: "Pegawai updated",
		})
	} catch (error) {
		console.log(error.message)
		return res.status(400).json({ message: "Internal server error" })
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
		const filepath_cpns = `./public/files/${pegawai.file_cpns}`
		const filepath_spmt = `./public/files/${pegawai.file_spmt}`
		const filepath_sttp_prajabatan = `./public/files/${pegawai.file_sttp_prajabatan}`
		const filepath_pns = `./public/files/${pegawai.file_pns}`

		if (fs.existsSync(filepath_cpns)) {
			fs.unlinkSync(filepath_cpns)
		}

		if (fs.existsSync(filepath_spmt)) {
			fs.unlinkSync(filepath_spmt)
		}

		if (fs.existsSync(filepath_sttp_prajabatan)) {
			fs.unlinkSync(filepath_sttp_prajabatan)
		}

		if (fs.existsSync(filepath_pns)) {
			fs.unlinkSync(filepath_pns)
		}

		await Pegawai.destroy({
			where: {
				id_pegawai: req.params.id,
			},
		})
		res.status(200).json({ message: "Pegawai deleted" })
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getTablePegawai = async (req, res) => {
	try {
		const response = await Pegawai.findAll({
			attributes: [
				"id_pegawai",
				"nama",
				"nip",
				"nama_jabatan",
				"email",
				"no_hp",
				"jenis_kelamin",
				"agama",
				"status_kepegawaian",
			],
			where: {
				[Op.not]: [{ status_kepegawaian: "tidak" }],
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		return res.status(404).json({ message: error.message })
	}
}

// export const getPemetaanPegawai = async (req, res) => {
// 	try {
// 		const response = await Pegawai.findAll({
// 			include: [
// 				{
// 					model: DiklatPegawai,
// 				},
// 				{
// 					model: IjazahPegawai,
// 				},
// 				{
// 					model: KompetensiPegawai,
// 				},
// 				{
// 					model: PengalamanPegawai,
// 				},
// 				{
// 					model: PrestasiPegawai,
// 				},
// 			],
// 		})
// 		res.status(200).json(response)
// 	} catch (error) {
// 		console.log(error.message)
// 		res.status(404).json({ message: error.message })
// 	}
// }

export const getPegawaiAktif = async (req, res) => {
	try {
		const response = await Pegawai.findAll({
			where: {
				[Op.not]: [{ status_kepegawaian: "tidak" }],
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}
