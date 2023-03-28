import { Sequelize } from "sequelize"
import db from "../../config/Database.js"
import { ABKJabatan } from "./ABKModel.js"
import { IjazahJabatan } from "./IjazahModel.js"
import { DiklatJabatan } from "./DiklatModel.js"
import { KompetensiJabatan } from "./KompetensiModel.js"
import { PengalamanJabatan } from "./PengalamanModel.js"

const { DataTypes } = Sequelize

const Jabatan = db.define(
	"jabatan",
	{
		id_jabatan: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		jenis: {
			type: DataTypes.STRING,
		},
		eselon: {
			type: DataTypes.STRING,
		},
		bidang: {
			type: DataTypes.STRING,
		},
		subbidang: {
			type: DataTypes.STRING,
		},
		nama: {
			type: DataTypes.STRING,
		},
		jumlah: {
			type: DataTypes.INTEGER,
		},
		pemangku: {
			type: DataTypes.INTEGER,
		},
		rekomendasi: {
			type: DataTypes.INTEGER,
		},
		ikhtisar: {
			type: DataTypes.STRING,
		},
		acuan_induk: {
			type: DataTypes.STRING,
		},
		instansi_induk_penilai: {
			type: DataTypes.STRING,
		},
		status_pns: {
			type: DataTypes.STRING,
		},
		pangkat: {
			type: DataTypes.STRING,
		},
		golongan: {
			type: DataTypes.STRING,
		},
		usia_maksimal: {
			type: DataTypes.INTEGER,
		},
		integritas: {
			type: DataTypes.INTEGER,
		},
		jasmani: {
			type: DataTypes.INTEGER,
		},
		tahun_terakhir: {
			type: DataTypes.INTEGER,
		},
		indeks: {
			type: DataTypes.INTEGER,
		},
	},
	{
		freezeTableName: true,
	}
)

Jabatan.hasMany(ABKJabatan, {
	foreignKey: "id_jabatan",
})
Jabatan.belongsTo(ABKJabatan, {
	foreignKey: "id_jabatan",
})

Jabatan.hasMany(IjazahJabatan, {
	foreignKey: "id_jabatan",
})
Jabatan.belongsTo(IjazahJabatan, {
	foreignKey: "id_jabatan",
})

Jabatan.hasMany(DiklatJabatan, {
	foreignKey: "id_jabatan",
})
Jabatan.belongsTo(DiklatJabatan, {
	foreignKey: "id_jabatan",
})

Jabatan.hasMany(KompetensiJabatan, {
	foreignKey: "id_jabatan",
})
Jabatan.belongsTo(KompetensiJabatan, {
	foreignKey: "id_jabatan",
})

Jabatan.hasMany(PengalamanJabatan, {
	foreignKey: "id_jabatan",
})
Jabatan.belongsTo(PengalamanJabatan, {
	foreignKey: "id_jabatan",
})

export default Jabatan
;(async () => {
	await db.sync()
})()
