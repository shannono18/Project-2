// Search function
const { axios } = window


document.getElementById('beer-search').addEventListener('click', event => {
	event.preventDefault()

	let search = document.getElementById('beer-name').value

	axios.get(`/api/beers/${search}`)
		.then(({ data }) => {
			if (data) {
				// there is search result we will display result below searchbar



			}
			else {
				// if there is no result, we will display no result and let user add the beer into the database




			}
		})
})