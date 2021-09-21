const { bulma } = window


document.getElementById('login').addEventListener('click', event => {
	event.preventDefault()
	axios.post('/api/users/login', {
		username: document.getElementById('lUsername').value,
		password: document.getElementById('lPassword').value
	})
		.then(({ data: token }) => {
			if (token) {
				localStorage.setItem('token', token)
				window.location = '/'
			} else {
				alert('Invalid username or password.')
			}
		})
		.catch(err => console.error(err))
})