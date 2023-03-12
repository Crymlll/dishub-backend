import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const IjazahJabatan = db.define(
	"ijazah_jabatan",
	{
		id_ijazah: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_jabatan: {
			type: DataTypes.INTEGER,
		},

		tingkat: {
			type: DataTypes.STRING,
		},
		bidang: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
