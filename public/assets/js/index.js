// Search function
const { axios } = window


document.getElementById('beer-search').addEventListener('click', event => {
	event.preventDefault()

	let search = document.getElementById('beer-name').value

	axios.get(`/api/beers/${search}`)
		.then(({ data }) => {
			if (data.length !== 0) {
				// there is search result we will display result below searchbar
				console.log(data.length)


			}
			else {
				// if there is no result, we will display no result and let user add the beer into the database
				


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
