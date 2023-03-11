import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

const SpesialisasiPegawai = db.define(
	"spesialisasi_pegawai",
	{
		id_spesialisasi_pegawai: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},

		bidang_pesialisasi: {
			type: DataTypes.STRING,
		},
		no_sk_pesialisasi: {
			type: DataTypes.STRING,
		},
		tgl_sk_pesialisasi: {
			type: DataTypes.DATE,
		},
	},
	{
		freezeTableName: true,
	}
)

export default SpesialisasiPegawai
;async () => {
	await db.sync()
}
