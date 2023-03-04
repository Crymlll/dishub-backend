const logRequest = (req, res, next) => {
	console.log(`${req.method} ${req.url} ${req.ip}`)
	next()
}

export default logRequest
