require("dotenv").config()
const PORT = process.env.PORT || 5000

const express = require("express")

const app = express()

const pegawaiRoutes = require("./routes/pegawai")

const middlewareLogRequest = require("./middleware/logs")
const upload = require("./middleware/multer")

app.use(middlewareLogRequest)
app.use(express.json())
app.use("/assets", express.static("public/images"))

app.use("/pegawai", pegawaiRoutes)
app.post("/upload", upload.single("photo"), (req, res) => {
	res.json({
		message: "Upload Success",
	})
})

app.use((err, req, res, next) => {
	res.json({
		message: err.message,
	})
})

app.listen(PORT, () => {
	console.log(`Server berhasil di running di port ${PORT}`)
})
