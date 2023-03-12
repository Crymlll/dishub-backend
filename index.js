import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()

import PegawaiRoute from "./routes/Pegawai/PegawaiRoute.js"
import IjazahPegawaiRoute from "./routes/Pegawai/IjazahRoute.js"
import SpesialisasiPegawaiRoute from "./routes/Pegawai/SpesialisasiRoute.js"
import DiklatPegawaiRoute from "./routes/Pegawai/DiklatRoute.js"
import PrestasiPegawaiRoute from "./routes/Pegawai/PrestasiRoute.js"
import PengalamanPegawaiRoute from "./routes/Pegawai/PengalamanRoute.js"

import JabatanRoute from "./routes/Jabatan/JabatanRoute.js"

import LogRequest from "./middleware/logs.js"
import Config from "./config/Config.js"

const app = express()
const PORT = Config.development.PORT

// app.use(LogRequest)
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))

app.use(PegawaiRoute)
app.use(IjazahPegawaiRoute)
app.use(SpesialisasiPegawaiRoute)
app.use(DiklatPegawaiRoute)
app.use(PrestasiPegawaiRoute)
app.use(PengalamanPegawaiRoute)

app.use(JabatanRoute)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
