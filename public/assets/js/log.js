const localStorage = window.localStorage

document.addEventListener('click', event => {
	event.preventDefault()
	if (event.target.classList.contains('signUp')) {
		console.log('singup')
		window.location = './register.html'
	}

	if (event.target.classList.contains('logIn')) {
		console.log('login')
		window.location = './login.html'
	}

	if (event.target.classList.contains('logOut')) {
		console.log('logout')
		localStorage.removeItem('token')
		window.location = './login.html'
	}
})

if (localStorage.getItem('token')) {
	console.log('login status')

	document.getElementById('signup-loginout').innerHTML = ''

	const logoutElem = document.createElement('a')
	logoutElem.classList = 'button is-warning logOut'
	logoutElem.id = "logOut"
	logoutElem.href = "./login.html"
	logoutElem.innerHTML = `
					Logout
					`

	document.getElementById('signup-loginout').append(logoutElem)

}
else {
	console.log('logout status')

	document.getElementById('signup-loginout').innerHTML = ''

	const signUpElem = document.createElement('a')
	signUpElem.classList = 'button is-warning signUp'
	signUpElem.href = "./register.html"
	signUpElem.innerHTML = `
					Sign up
					`

	const logInElem = document.createElement('a')
	logInElem.classList = 'button is-warning logIn'
	logInElem.id = "logIn"
	logInElem.href = "./login.html"
	logInElem.innerHTML = `
					LogIn
					`

	document.getElementById('signup-loginout').append(signUpElem)
	document.getElementById('signup-loginout').append(logInElem)
}

