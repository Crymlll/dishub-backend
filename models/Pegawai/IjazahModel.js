import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const IjazahPegawai = db.define(
	"ijazah_pegawai",
	{
		id_ijazah: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},
		tingkat_ijazah: {
			type: DataTypes.STRING,
		},
		bidang_ijazah: {
			type: DataTypes.STRING,
		},
		no_sk_ijazah: {
			type: DataTypes.STRING,
		},
		tgl_sk_ijazah: {
			type: DataTypes.DATE,
		},

		file_ijazah: {
			type: DataTypes.STRING,
		},
		url_file_ijazah: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
