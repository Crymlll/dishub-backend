import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

const PengalamanPegawai = db.define(
	"ijazah_pegawai",
	{
		id_ijazah_pegawai: {
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
	},
	{
		freezeTableName: true,
	}
)

export default PengalamanPegawai
;async () => {
	await db.sync()
}
