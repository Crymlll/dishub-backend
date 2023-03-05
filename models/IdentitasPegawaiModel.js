import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const Pegawai = db.define(
	"pegawai",
	{
		id_pegawai: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nama: {
			type: DataTypes.STRING,
		},
		ktp: {
			type: DataTypes.STRING,
		},
		tempat_lahir: {
			type: DataTypes.STRING,
		},
		tanggal_lahir: {
			type: DataTypes.DATE,
		},
		jenis_kelamin: {
			type: DataTypes.STRING,
		},
		agama: {
			type: DataTypes.STRING,
		},
		status_kepegawaian: {
			type: DataTypes.STRING,
		},
		status_perkawinan: {
			type: DataTypes.STRING,
		},
		golongan_darah: {
			type: DataTypes.STRING,
		},
		alamat: {
			type: DataTypes.STRING,
		},
		no_hp: {
			type: DataTypes.STRING,
		},
		nip: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},

		//CPNS
		file_cpns: {
			type: DataTypes.STRING,
		},
		url_file_cpns: {
			type: DataTypes.STRING,
		},

		//SPMT
		file_spmt: {
			type: DataTypes.STRING,
		},
		url_file_spmt: {
			type: DataTypes.STRING,
		},

		//STTP Prajabatan
		file_sttp_prajabatan: {
			type: DataTypes.STRING,
		},
		url_file_sttp_prajabatan: {
			type: DataTypes.STRING,
		},

		//PNS
		file_pns: {
			type: DataTypes.STRING,
		},
		url_file_pns: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)

export default Pegawai
;(async () => {
	await db.sync()
})()
