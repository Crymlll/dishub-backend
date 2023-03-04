import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const Pegawai = db.define(
	"identitas_pegawai",
	{
		id_pegawai: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		no_sk_cpns: {
			type: DataTypes.STRING,
		},
		tgl_sk_cpns: {
			type: DataTypes.DATE,
		},
		no_spmt: {
			type: DataTypes.STRING,
		},
		tmt_spmt: {
			type: DataTypes.DATE,
		},
		no_sttp_prajabatan: {
			type: DataTypes.STRING,
		},
		tgl_sttp_prajabatan: {
			type: DataTypes.DATE,
		},
		no_sk_pns: {
			type: DataTypes.STRING,
		},
		tgl_sk_pns: {
			type: DataTypes.DATE,
		},

		file: {
			type: DataTypes.STRING,
		},
		url: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)

export default Pegawai
;(async () => {
	await db.sync()
})()
