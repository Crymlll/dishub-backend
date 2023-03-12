import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const KompetensiJabatan = db.define(
	"kompetensi_jabatan",
	{
		id_kompetensi: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_jabatan: {
			type: DataTypes.INTEGER,
		},

		nama_kompetensi: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
