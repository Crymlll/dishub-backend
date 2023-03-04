import path from "path"

const createFile = (req, res, next) => {
	const file = req.files.file
	const fileSize = file.data.length
	const ext = path.extname(file.name)
	const fileName = file.md5 + ext
	const url = `${req.protocol}://${req.get("host")}/files/${fileName}`
	const allowedType = [
		".jpg",
		".jpeg",
		".png",
		".gif",
		".pdf",
		".xlsx",
		"docx",
		"doc",
		".zip",
	]
	if (!allowedType.includes(ext.toLowerCase())) {
		return res.status(422).json({ message: "File type not allowed" })
	}
	if (fileSize > 3000000) {
		return res
			.status(422)
			.json({ message: "File size too large, must be less than 3MB" })
	}
	next()
}

export default createFile
