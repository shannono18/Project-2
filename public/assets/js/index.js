// Search function
const { axios } = window


document.getElementById('beer-search').addEventListener('click', event => {
	event.preventDefault()

	let search = document.getElementById('beer-name').value

	axios.get(`/api/beers/${search}`)
		.then(({ data }) => {
			if (data.length !== 0) {
				// there is search result we will display result below searchbar

				console.log(data)

				document.getElementById('result-display').innerHTML = ''

				data.forEach(beer => {
					let beer_name = beer.name
					let beer_type = beer.type
					let beer_abv = beer.abv
					let beer_brewery = beer.brewery
					let img = beer.img_url

					if (img === null) {
						img = '../img/Beer-icon.png'
					}

					// Work on Design part!!
					const beerElem = document.createElement('div')
					beerElem.classList = 'card is-parent'
					beerElem.innerHTML = `
					<article class="card is-child box has-background-warning">
						<figure class="image">
							<img src="${img}">
						</figure>
						<p class="content">${beer_name}</p>
						<p class="content">${beer_type}</p>
						<p class="content">${beer_brewery}</p>
					    <p class="content">${beer_abv}</p>
						<input class="input is-rounded" type="text" placeholder="Comment">
						<a class="button">Post</a>
					</article>
					`
					document.getElementById('result-display').append(beerElem)
				})
				document.getElementById('beer-name').value = ''

			}
			else {
				// if there is no result, we will display no result and let user add the beer into the database
				console.log('No result data from db')
				document.getElementById('result-display').innerHTML = ''

				const addElem = document.createElement('div')
				addElem.classList = 'button add-btn'
				addElem.innerHTML = `
				<p>
				<button class="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">We don't have your beer in our Database! Please Add your beer into database!
				</button>
				</p>
				`

				document.getElementById('result-display').append(addElem)
			}
		})
})

document.addEventListener('click', event => {
	event.preventDefault()
	if(event.target.classList.contains('modal-button')) {
		var element = document.getElementById('modal')
		element.classList.add("is-active")
	}

	if (event.target.classList.contains('modal-close')) {
		var element = document.getElementById('modal')
		element.classList.remove("is-active")
	}

})


// new universalParallax().init({
//     speed: 6.0
// })

