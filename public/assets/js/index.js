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
					beerElem.classList = 'tile is-parent'
					beerElem.innerHTML = `
					<article class="tile is-child box has-background-warning">
						<figure class="image">
							<img src="${img}">
						</figure>
						<p class="title">${beer_name}</p>
						<p class="subtitle">${beer_type}</p>
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
				addElem.classList = 'modal add-modal'
				addElem.innerHTML = `
				<div class="modal-background"></div>
				<div class="modal-card">
					<header class="modal-card-head">
						<p class="modal-card-title">Add Beer</p>
						<button class="delete" aria-label="close"></button>
					</header>
					<section class="modal-card-body">
						<!-- Content ... -->
					</section>
					<footer class="modal-card-foot">
						<button class="button is-success">Save changes</button>
						<button class="button">Cancel</button>
					</footer>
				</div>
				`
				document.getElementById('modal-placeholder').append(addElem)

			}
		})
})

document.getElementById('goHome').addEventListener('click', () => {
	window.location = '/'
})

document.getElementById('aboutUs').addEventListener('click', () => {
	window.location = '/aboutus.html'
})

document.getElementById('myBrews').addEventListener('click', () => {
	window.location = '/mybrews.html'
})

document.getElementById('logOut').addEventListener('click', () => {
	localStorage.removeItem('token')
	window.location = '/login.html'
})
