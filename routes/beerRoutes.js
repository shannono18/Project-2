const router = require('express').Router()
const { Beer } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/beers/:beer', (req, res) => {
	Beer.findAll({})
		.then(beers => {
			let search = req.params.beer
			let searchResults = []

			for (let i = 0; i < beers.length; i++) {
				if (beers[i].name.includes(search)) {
					searchResults.push(beers[i])
				}
			}
			res.json(searchResults)
		})
})
//passport.authenticate('jwt'),
router.post('/beers/add', passport.authenticate('jwt'), (req, res) => Beer.create({
	name: req.body.name,
	type: req.body.type,
	abv: req.body.abv,
	brewery: req.body.brewery,
	img_url: req.body.img_url
})
	.then(beer => Beer.findOne({ where: { id: beer.id } }))
	.then(beer => res.json(beer))
	.catch(err => console.log(err)))

module.exports = router
