const { axios } = window

function openTab(event, tabTitle) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tabconst toggleBurger = () => {
	let burgerIcon = document.getElementById('burger');
	let dropMenu = document.getElementById('menu');
	burgerIcon.classList.toggle('is-active');
	dropMenu.classList.toggle('is-active');
}

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

document.addEventListener('click', event => {
	if (event.target.classList.contains('deletePost')) {
		axios.delete(`/api/posts/${event.target.dataset.id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(() => event.target.parentNode.remove())
			.catch(err => console.error(err))
	}
})

