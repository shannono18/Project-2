// Search function
const { axios } = window


document.getElementById('beer-search').addEventListener('click', event => {
	event.preventDefault()

	let search = document.getElementById('beer-name').value

	axios.get(`/api/beers/${search}`)
		.then(({ data: name, abv }) => {
			if (name) {
				console.log(name)
				console.log(abv)
			}
			else {
				alert('No Beer data found')
			}
		})
})

new universalParallax().init({
    speed: 6.0
});

