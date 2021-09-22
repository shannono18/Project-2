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

module.exports = router
