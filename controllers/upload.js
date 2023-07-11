const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		return cb(null, 'public/uploads/');
	},
	filename: function (req, file, cb) {
		return cb(null, `${Date.now()}-${file.originalname}`);
	},
	limits: {
		fileSize: 10 * 1024 * 1024, // 10 MB in bytes
	}
})

const upload = multer({ storage });
const uploads = async (req, res) => {
	upload.single('lostImage')(req, res, function (err, result) {
		if (err) {
			//handle multer error
			return res.status(400).json({ error: err.message });
		}

		res.send('Image upload sucessfully!');
	});
};



module.exports = { uploads };