const { bootstrap } = window


document.getElementById('login').addEventListener('click', event => {
	console.log('login clicked')
	console.log(document.getElementById('lUsername').value)
	// event.preventDefault()
	// axios.post('/api/users/login', {
	// 	username: document.getElementById('lUsername').value,
	// 	password: document.getElementById('lPassword').value
	// })
	// 	.then(({ data: token }) => {
	// 		if (token) {
	// 			localStorage.setItem('token', token)
	// 			window.location = '/'
	// 		} else {
	// 			alert('Invalid username or password.')
	// 		}
	// 	})
	// 	.catch(err => console.error(err))
})