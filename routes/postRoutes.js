const router = require('express').Router()
const { Post, User } = require('../models')
const passport = require('passport')

router.get('/posts', passport.authenticate('jwt'), (req, res) => {
	Post.findAll({ include: 'u' })
		.then(posts => res.json(posts))
		.catch(err => console.log(err))
})

router.post('/posts', passport.authenticate('jwt'), (req, res) => Post.create({
	title: req.body.title,
	comment: req.body.comment,
	rating: req.body.rating,
	fav: req.body.fav,
	img_url: req.body.img_url,
	uid: req.user.id
})
	.then(post => Post.findOne({ where: { id: post.id }, include: 'u' }))
	.then(post => {
		console.log(post)
		res.json(post)
	})
	.catch(err => console.log(err)))

router.delete('/posts/:id', (req, res) => Post.destroy({ where: { title: req.params.id } })
	.then(() => res.sendStatus(200))
	.catch(err => console.log(err)))

module.exports = router
