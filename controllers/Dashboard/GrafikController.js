import Pegawai from "../../models/Pegawai/PegawaiModel.js"
import { IjazahPegawai } from "../../models/Pegawai/IjazahModel.js"
import Sequelize from "sequelize"

export const getJenisKelamin = async (req, res) => {
	try {
		const response = await Pegawai.findAll({
			attributes: [
				"jenis_kelamin",
				[
					Sequelize.fn("COUNT", Sequelize.col("jenis_kelamin")),
					"jumlah",
				],
			],
			group: ["jenis_kelamin"],
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getAgama = async (req, res) => {
	try {
		const response = await Pegawai.findAll({
			attributes: [
				"agama",
				[Sequelize.fn("COUNT", Sequelize.col("agama")), "jumlah"],
			],
			group: ["agama"],
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

//make get Ijazah sort by tingkat

export const getIjazah = async (req, res) => {
	try {
		const response = await IjazahPegawai.findAll({
			attributes: [
				"tingkat_ijazah",
				[
					Sequelize.fn("COUNT", Sequelize.col("tingkat_ijazah")),
					"jumlah",
				],
			],
			group: ["tingkat_ijazah"],
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}
