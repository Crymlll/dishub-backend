import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const ABKJabatan = db.define(
	"abk_jabatan",
	{
		id_abk: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_jabatan: {
			type: DataTypes.INTEGER,
		},

		uraian_tugas: {
			type: DataTypes.STRING,
		},
		satuan_hasil: {
			type: DataTypes.STRING,
		},
		waktu_penyelesaian: {
			type: DataTypes.FLOAT,
		},
		waktu_kerja_efektif: {
			type: DataTypes.FLOAT,
		},
		beban_kerja: {
			type: DataTypes.FLOAT,
		},
		kebutuhan_pegawai: {
			type: DataTypes.FLOAT,
		},
	},
	{
		freezeTableName: true,
	}
)
