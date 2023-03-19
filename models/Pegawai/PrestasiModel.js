import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const PrestasiPegawai = db.define(
	"prestasi_pegawai",
	{
		id_prestasi: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},

		tahun_prestasi: {
			type: DataTypes.INTEGER,
		},
		indeks_prestasi: {
			type: DataTypes.STRING,
		},
		nilai_prestasi: {
			type: DataTypes.INTEGER,
		},
		tgl_skp: {
			type: DataTypes.DATE,
		},

		file_prestasi: {
			type: DataTypes.STRING,
		},
		url_file_prestasi: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
