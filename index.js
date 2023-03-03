import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import PegawaiRoute from "./routes/PegawaiRoute.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))
app.use(PegawaiRoute)

app.listen(5000, () => {
	console.log("Server started on port 3000")
})
