import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()

import PegawaiRoute from "./routes/PegawaiRoute.js"
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

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
