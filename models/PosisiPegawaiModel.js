import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const PosisiPegawai = db.define(
	"posisi_pegawai",
	{
		id_posisi_pegawai: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},
		pangkat: {
			type: DataTypes.STRING,
		},
		golongan: {
			type: DataTypes.STRING,
		},
		jenis_jabatan: {
			type: DataTypes.STRING,
		},
		bidang: {
			type: DataTypes.STRING,
		},
		nama_jabatan: {
			type: DataTypes.STRING,
		},
		eselon: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)

export default PosisiPegawai
;async () => {
	await db.sync()
}
