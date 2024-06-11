const router = require('express').Router();
const upload = require('../../utils/upload');
const { Post, RegisteredUser, Image } = require('../../model');

async function createPost(req, res, postDetails) {
	console.log('req body', req.body);
	try {
		const postCreated = await Post.create(postDetails, {});
		if (postCreated) {
			req.session.loggedIn = true;
			res.status(201).json({
				message: ` Created for post: ${postDetails.title}`,
			});
		} else {
			res.status(500).json({
				message: `Creation failed for post: ${postDetails.title}. We think its something to do with the database`,
			});
		}

		if (req.file) {
			console.log(req.filename);
			const newImage = await Image.create({
				location: req.file.path.replace('public/', ''),
				post_id: postCreated.id,
			});
			console.log(newImage);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: `Account Creation failed for post: ${postDetails.title}. We think it is not the database but the database error may also appear.`,
		});
	}
}

async function updatePost(req, res, postDetails) {
	console.log('req body', req.body);
	try {
		const post = await Post.findByPk(req.params.post_id);
		post.title = req.body.title;
		post.content = req.body.content;

		if (postCreated) {
			res.status(201).json({
				message: ` Updated post ${req.params.post_id} with: ${postDetails.title}`,
			});
		} else {
			res.status(500).json({
				message: `Update failed for post: ${postDetails.title}. We think its something to do with the database`,
			});
		}

		if (req.file) {
			console.log(req.filename);
			const newImage = await Image.create({
				location: req.file.path.replace('public/', ''),
				post_id: postCreated.id,
			});
			console.log(newImage);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: `Account Creation failed for post: ${postDetails.title}. We think it is not the database but the database error may also appear.`,
		});
	}
}

router.post('/', upload.single('upload'), async (req, res) => {
	if (!req.session.loggedIn) return;
	if (!req.session.user_id == req.body.user_id) return;

	const postDetails = {
		registered_user_id: req.session.user_id,
		title: req.body.title,
		content: req.body.content,
	};

	console.log('req.file', req.file);

	try {
		await createPost(req, res, postDetails);
	} catch (error) {
		console.log(error);
		res.json({ message: 'an error occured', error: error });
	}
});

router.put('/edit/:post_id', upload.single('upload'), async (req, res) => {
	console.log('req.session.loggedIn', req.session.loggedIn);
	if (!req.session.loggedIn) return;
	console.log('req.session.user_id', req.session.user_id);
	console.log('req.body.user_id', req.body.user_id);

	if (!req.session.user_id == req.body.user_id) return;

	const postDetails = {
		post_id: req.params.post_id,
		registered_user_id: req.session.user_id,
		title: req.body.title,
		content: req.body.content,
	};

	console.log('req.file', req.file);

	try {
		await updatePost(req, res, postDetails);
	} catch (error) {
		console.log(error);
		res.json({ message: 'an error occured', error: error });
	}
});

module.exports = router;
