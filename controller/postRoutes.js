const router = require('express').Router();
const { Post, RegisteredUser, Image } = require('../model');

const siteTitle = 'Tech Blog';

router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: { all: true, nested: true },
			order: [['created_at', 'DESC']],
		});

		const posts = await postData.map((post) => post.get({ plain: true }));

		console.log('posts', posts);

		res.render('home', {
			posts: posts,
			siteTitle: siteTitle,
			testData: req.session.testing ? req.session.testData : false,
			loggedIn: req.session.loggedIn,
			loggedOut: !req.session.loggedIn,
			pageTitle: 'Posts Page',
		});
	} catch (error) {
		console.log(error);
	}
});

router.get('/new', async (req, res) => {
	if (req.session.loggedIn) {
		res.render('new-post', {
			siteTitle: siteTitle,
			testData: req.session.testing ? req.session.testData : false,
			user_id: req.session.user_id,
			loggedIn: req.session.loggedIn,
			loggedOut: !req.session.loggedIn,
			pageTitle: 'New Post',
		});
	} else res.redirect('/login');
});

router.get('/edit/:id', async (req, res) => {
	if (req.session.loggedIn) {
		const postData = await Post.findByPk(req.params.id);

		const post = postData.get({ plain: true });
		console.log(req.session.user_id);

		res.render('edit-post', {
			siteTitle: siteTitle,
			post: post,
			testData: req.session.testing ? req.session.testData : false,
			user_id: req.session.user_id,
			loggedIn: req.session.loggedIn,
			loggedOut: !req.session.loggedIn,
			pageTitle: 'Edit Post',
		});
	} else res.redirect('/login');
});

module.exports = router;
