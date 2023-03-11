import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

const { DataTypes } = Sequelize

const PrestasiPegawai = db.define(
	"prestasi_pegawai",
	{
		id_prestasi_pegawai: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_pegawai: {
			type: DataTypes.INTEGER,
		},

		tahun_prestasi: {
			type: DataTypes.INTEGER,
		},
		indeks_prestasi: {
			type: DataTypes.INTEGER,
		},
		nilai_prestasi: {
			type: DataTypes.STRING,
		},
		tgl_skp: {
			type: DataTypes.DATE,
		},
	},
	{
		freezeTableName: true,
	}
)

export default PrestasiPegawai
;async () => {
	await db.sync()
}
