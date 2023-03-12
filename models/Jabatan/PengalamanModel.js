import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const PengalamanJabatan = db.define(
	"pengalaman_jabatan",
	{
		id_pengalaman: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_jabatan: {
			type: DataTypes.INTEGER,
		},

		nama: {
			type: DataTypes.STRING,
		},
		lama: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
