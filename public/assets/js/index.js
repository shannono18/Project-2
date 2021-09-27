// Search function
const { axios } = window

document.getElementById('goHome').addEventListener('click', () => {
	window.location = '/'
})

document.getElementById('aboutUs').addEventListener('click', () => {
	window.location = '/aboutus.html'
})

document.getElementById('myBrews').addEventListener('click', () => {
	window.location = '/mybrews.html'
})

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
					beerElem.classList = 'tile is-parent has-background-warning'
					beerElem.innerHTML = `
					<article class="tile is-child box">
						<figure class="image">
							<img src="${img}">
						</figure>
						<p class="content">${beer_name}</p>
						<p class="content">${beer_type}</p>
						<p class="content">${beer_brewery}</p>
					  <p class="content">${beer_abv}</p>
						<a class="button post-btn">Post</a>
					</article>
					<p class="px-1">
					`
					// <input class="input is-rounded" type="text" placeholder="Comment"> deleted from line 58

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

	if (event.target.classList.contains('modal-button')) {
		var element = document.getElementById('modal')
		element.classList.add("is-active")
	}

	if (event.target.classList.contains('modal-close')) {
		var element = document.getElementById('modal')
		element.classList.remove("is-active")

		var element = document.getElementById('modal-post')
		element.classList.remove("is-active")
	}

	if (event.target.classList.contains("add-beer-btn")) {
		event.preventDefault()
		axios.post('/api/beers/add', {
			name: document.getElementById('add-beer-name').value,
			type: document.getElementById('add-beer-type').value,
			abv: document.getElementById('add-beer-abv').value,
			brewery: document.getElementById('add-beer-brewery').value,
			img_url: 'https://e7.pngegg.com/pngimages/294/63/png-clipart-two-clear-beer-steins-with-brown-liquid-illustration-beer-drawing-cartoon-euclidean-cartoon-beer-cartoon-character-food.png'
		}, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(() => {
				var element = document.getElementById('modal')
				element.classList.remove("is-active")
				alert('Beer added! Please search and post it!')
				window.location = '/'
			})

		var element = document.getElementById('modal')
		element.classList.remove("is-active")
	}

	if (event.target.classList.contains("post-btn")) {
		event.preventDefault()

		localStorage.setItem("name", event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
		localStorage.setItem("img_url", event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextSibling.src)


		var element = document.getElementById('modal-post')
		element.classList.add("is-active")
	}

	if (event.target.classList.contains('comments-post-btn')) {
		event.preventDefault()
		axios.post('/api/posts', {
			title: localStorage.getItem("name"),
			comment: document.getElementById('comments').value,
			rating: document.getElementById('rating').value,
			fav: 0,
			img_url: localStorage.getItem("img_url")
		}, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(() => {
				var element = document.getElementById('modal-post')
				element.classList.remove("is-active")

				alert("posted!")
				document.getElementById('comments').value = ""
				document.getElementById('rating').value = ""
				localStorage.removeItem("name")
				localStorage.removeItem("img_url")
			})

		var element = document.getElementById('modal-post')
		element.classList.remove("is-active")
	}
})


// new universalParallax().init({
//     speed: 6.0
// })

