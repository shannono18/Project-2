const { bootstrap } = window

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
				var element = document.getElementById('modal-login')
				element.classList.add('is-active')
			}
		})
		.catch(err => console.error(err))
})

// document.getElementById('register').addEventListener('click', event => {
// 	event.preventDefault()
// 	axios.post('/api/users/register', {
// 		username: document.getElementById('username').value,
// 		password: document.getElementById('password').value
// 	})
// 		.then(() => alert('User registered! Log in.'))
// 		.catch(err => console.error(err))
// })

document.addEventListener('click', event => {
	if (event.target.classList.contains('modal-close')) {
		var element = document.getElementById('modal-login')
		element.classList.remove("is-active")
	}
})