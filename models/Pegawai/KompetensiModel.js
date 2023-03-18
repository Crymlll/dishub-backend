import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const KompetensiPegawai = db.define(
	"kompetensi_pegawai",
	{
		id_kompetensi: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},

		nama_kompetensi: {
			type: DataTypes.STRING,
		},
		tgl_kompetensi: {
			type: DataTypes.DATE,
		},

		file_kompetensi: {
			type: DataTypes.STRING,
		},
		url_file_kompetensi: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
