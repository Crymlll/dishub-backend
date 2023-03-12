import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const PengalamanPegawai = db.define(
	"pengalaman_pegawai",
	{
		id_pengalaman: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},

		nama_pengalaman: {
			type: DataTypes.STRING,
		},
		lama_pengalaman: {
			type: DataTypes.STRING,
		},
		no_sk: {
			type: DataTypes.STRING,
		},

		file_pengalaman: {
			type: DataTypes.STRING,
		},
		url_file_pengalaman: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
