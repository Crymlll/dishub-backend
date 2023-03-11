import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

const DiklatPegawai = db.define(
	"diklat_pegawai",
	{
		id_diklat_pegawai: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},

		nama_diklat: {
			type: DataTypes.STRING,
		},
		tempat_diklat: {
			type: DataTypes.STRING,
		},
		penyelenggara: {
			type: DataTypes.STRING,
		},
		no_sttp: {
			type: DataTypes.STRING,
		},
		tgl_sttp: {
			type: DataTypes.DATE,
		},
	},
	{
		freezeTableName: true,
	}
)

export default DiklatPegawai
;async () => {
	await db.sync()
}
