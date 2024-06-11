const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: (req, file, cb) => {
		// (error, string: how our uploads will be named)
		// filnames will look like this: upload-{timestamp}-{original name}.{original extension}
		cb(
			null,
			`${req.body.title}-${req.body.user_id}.jpg`,
			//${file.fieldname}-${Date.now()}-${path.parse(file.originalname).name}${path.extname(file.originalname)}
		);
	},
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;
