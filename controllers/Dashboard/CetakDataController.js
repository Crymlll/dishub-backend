import Pegawai from "../../models/Pegawai/PegawaiModel.js"
import Jabatan from "../../models/Jabatan/JabatanModel.js"
import Sequelize from "sequelize"

export const getCetakDataPegawai = async (req, res) => {
	try {
		const response = await Pegawai.findAll({
			attributes: [
				"nip",
				"nama",
				"jenis_kelamin",
				"agama",
				"no_hp",
				"email",
				"nama_jabatan",
			],
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}

//make get jabatan sort by bidang_jabatan

export const getJabatanByBidang = async (req, res) => {
	try {
		const response = await Jabatan.findAll({
			order: [
				[Sequelize.col("bidang"), "ASC"],
				[Sequelize.col("nama"), "ASC"],
			],
			attributes: ["nama", "bidang"],
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		res.status(404).json({ message: error.message })
	}
}
