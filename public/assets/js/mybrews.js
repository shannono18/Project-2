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

axios.get('/api/users/posts', {
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
})
	.then(({ data: { username, posts } }) => {
		posts.forEach(({ name, type, abv, brewery, img_url }) => {
			const postElem = document.createElement('li')
			postElem.className = 'd-flex justify-content-between align-items-start mb-2 listItem'
			postElem.innerHTML = `
        <div class="tile is-parent has-background-warning">
						  <article class="tile is-child box">
							  <figure class="image">
								  <img src="${img}">
							  </figure>
							  <p class="title">${beer_name}</p>
							  <p class="subtitle">${beer_type}</p>
							  <p class="subtitle">${beer_brewery}</p>
							  <p class="content">${beer_abv}</p>
							  <p class="content"> ?</p>
						  </article>
					  </div>
      `
			document.getElementById('Beers I tried').append(postElem)
		})
	})
	.catch(err => console.error(err))

	function openTab(event, tabTitle) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" is-active", "");
		}
		document.getElementById(tabTitle).style.display = "block";
		event.currentTarget.className += " is-active";
	}
	  
	const toggleBurger = () => {
		let burgerIcon = document.getElementById('burger');
		let dropMenu = document.getElementById('menu');
		burgerIcon.classList.toggle('is-active');
		dropMenu.classList.toggle('is-active');
	  };
