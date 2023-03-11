import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const SpesialisasiPegawai = db.define(
	"spesialisasi_pegawai",
	{
		id_spesialisasi: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},

		bidang_spesialisasi: {
			type: DataTypes.STRING,
		},
		no_sk_spesialisasi: {
			type: DataTypes.STRING,
		},
		tgl_sk_spesialisasi: {
			type: DataTypes.DATE,
		},

		file_spesialisasi: {
			type: DataTypes.STRING,
		},
		url_file_spesialisasi: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
