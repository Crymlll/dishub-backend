import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

export const DiklatJabatan = db.define(
	"diklat_jabatan",
	{
		id_diklat: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_jabatan: {
			type: DataTypes.INTEGER,
		},

		nama_diklat: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)
