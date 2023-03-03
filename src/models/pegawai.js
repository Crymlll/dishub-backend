const dbPool = require("../config/db")

const getAllPegawai = () => {
	const SQLQuery = "SELECT * FROM pegawai"

	return dbPool.execute(SQLQuery)
}

const createNewPegawai = (body) => {
	const SQLQuery = `INSERT INTO pegawai (nama, email, address) VALUES ('${body.nama}', '${body.email}', '${body.address}')`

	return dbPool.execute(SQLQuery)
}

const updatePegawai = (body, id) => {
	const SQLQuery = `UPDATE pegawai SET nama='${body.nama}', email='${body.email}', address='${body.address}' WHERE id=${id}`

	return dbPool.execute(SQLQuery)
}

const deletePegawai = (id) => {
	const SQLQuery = `DELETE FROM pegawai WHERE id=${id}`
	return dbPool.execute(SQLQuery)
}

module.exports = {
	getAllPegawai,
	createNewPegawai,
	updatePegawai,
	deletePegawai,
}
