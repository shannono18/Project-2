
axios.get('/api/users/posts', {
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
})
	.then(({ data: { posts } }) => {
		document.getElementById('result-display-tried').innerHTML = ''
		document.getElementById('result-display-like').innerHTML = ''

		console.log('posts')

		posts.forEach(({ title, comment, rating, fav, img_url }) => {
			if (posts.length == 0) {
				// if there is no post display no result
				const postElem = document.createElement('div')
					postElem.classList = 'card is-parent'
				postElem.innerHTML = `
					NO POST
					`
				document.getElementById('result-display-tried').append(postElem)
				document.getElementById('result-display-like').append(postElem)
			}
			else {
				// fav==0 so beer I tried
				if (!fav) {
					const postElem = document.createElement('div') 
						postElem.classList = 'card is-parent'
					postElem.innerHTML = `
					<article class="card is-child box has-background-warning">
						<figure class="image">
							<img src="${img_url}">
						</figure>
						<p class="content">${title}</p>
						<p class="content">${comment}</p>
						<p class="content">${rating}</p>
						<a class="button like-btn">Like</a>
						<a class="button delete-btn">Delete</a>
					</article>
					`

					document.getElementById('result-display-tried').append(postElem)
				}

				// fav == 1 beer I like
				else {
					const postElem = document.createElement('div')
						postElem.classList = 'card is-parent'
					postElem.innerHTML = `
					<article class="card is-child box has-background-warning">
						<figure class="image">
							<img src="${img_url}">
						</figure>
						<p class="content">${title}</p>
						<p class="content">${comment}</p>
						<p class="content">${rating}</p>
						<a class="button delete-btn">Delete</a>
					</article>
					`

					document.getElementById('result-display-like').append(postElem)
				}
			}
		})
	})
	.catch(err => console.error(err))