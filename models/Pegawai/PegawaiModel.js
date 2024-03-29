import { Sequelize } from "sequelize"
import db from "../../config/Database.js"

import { DiklatPegawai } from "./DiklatModel.js"
import { IjazahPegawai } from "./IjazahModel.js"
import { KompetensiPegawai } from "./KompetensiModel.js"
import { PengalamanPegawai } from "./PengalamanModel.js"
import { PrestasiPegawai } from "./PrestasiModel.js"

const { DataTypes } = Sequelize

const Pegawai = db.define(
	"pegawai",
	{
		id_pegawai: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nama: {
			type: DataTypes.STRING,
		},
		ktp: {
			type: DataTypes.STRING,
		},
		tempat_lahir: {
			type: DataTypes.STRING,
		},
		tanggal_lahir: {
			type: DataTypes.DATE,
		},
		jenis_kelamin: {
			type: DataTypes.STRING,
		},
		agama: {
			type: DataTypes.STRING,
		},
		status_kepegawaian: {
			type: DataTypes.STRING,
		},
		status_perkawinan: {
			type: DataTypes.STRING,
		},
		golongan_darah: {
			type: DataTypes.STRING,
		},
		alamat: {
			type: DataTypes.STRING,
		},
		no_hp: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},

		nip: {
			type: DataTypes.STRING,
		},
		file_nip: {
			type: DataTypes.STRING,
		},
		url_file_nip: {
			type: DataTypes.STRING,
		},

		//CPNS
		file_cpns: {
			type: DataTypes.STRING,
		},
		url_file_cpns: {
			type: DataTypes.STRING,
		},

		//SPMT
		file_spmt: {
			type: DataTypes.STRING,
		},
		url_file_spmt: {
			type: DataTypes.STRING,
		},

		//STTP Prajabatan
		file_sttp_prajabatan: {
			type: DataTypes.STRING,
		},
		url_file_sttp_prajabatan: {
			type: DataTypes.STRING,
		},

		//PNS
		file_pns: {
			type: DataTypes.STRING,
		},
		url_file_pns: {
			type: DataTypes.STRING,
		},

		//JABATAN
		pangkat: {
			type: DataTypes.STRING,
		},
		tahun_pangkat: {
			type: DataTypes.DATE,
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

		id_jabatan: {
			type: DataTypes.INTEGER,
		},
		nama_jabatan: {
			type: DataTypes.STRING,
		},
		eselon: {
			type: DataTypes.STRING,
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
		tgl_prajabatan: {
			type: DataTypes.DATE,
		},
		no_sk_pns: {
			type: DataTypes.STRING,
		},
		tgl_sk_pns: {
			type: DataTypes.DATE,
		},

		//npwp
		no_npwp: {
			type: DataTypes.STRING,
		},
		file_npwp: {
			type: DataTypes.STRING,
		},
		url_file_npwp: {
			type: DataTypes.STRING,
		},

		//askes
		no_askes: {
			type: DataTypes.STRING,
		},
		file_askes: {
			type: DataTypes.STRING,
		},
		url_file_askes: {
			type: DataTypes.STRING,
		},

		//jasmani dan rohani
		tgl_surat_sehat_jasmani: {
			type: DataTypes.DATE,
		},
		file_surat_sehat_jasmani: {
			type: DataTypes.STRING,
		},
		url_file_surat_sehat_jasmani: {
			type: DataTypes.STRING,
		},

		//integritas
		tgl_surat_integritas: {
			type: DataTypes.DATE,
		},
		file_surat_integritas: {
			type: DataTypes.STRING,
		},
		url_file_surat_integritas: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
	}
)

// Pegawai.hasMany(DiklatPegawai, {
// 	foreignKey: "id_pegawai",
// })
// Pegawai.belongsTo(DiklatPegawai, {
// 	foreignKey: "id_pegawai",
// })

// Pegawai.hasMany(IjazahPegawai, {
// 	foreignKey: "id_pegawai",
// })
// Pegawai.belongsTo(IjazahPegawai, {
// 	foreignKey: "id_pegawai",
// })

// Pegawai.hasMany(KompetensiPegawai, {
// 	foreignKey: "id_pegawai",
// })
// Pegawai.belongsTo(KompetensiPegawai, {
// 	foreignKey: "id_pegawai",
// })

// Pegawai.hasMany(PengalamanPegawai, {
// 	foreignKey: "id_pegawai",
// })
// Pegawai.belongsTo(PengalamanPegawai, {
// 	foreignKey: "id_pegawai",
// })

// Pegawai.hasMany(PrestasiPegawai, {
// 	foreignKey: "id_pegawai",
// })
// Pegawai.belongsTo(PrestasiPegawai, {
// 	foreignKey: "id_pegawai",
// })

export default Pegawai
;(async () => {
	await db.sync()
})()
