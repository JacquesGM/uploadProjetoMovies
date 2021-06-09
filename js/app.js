		
const minhaReq = new Request(`http://www.omdbapi.com/?i=tt3896198&apikey=f1374d94`)

fetch(minhaReq)
	.then(response => response.json())
	.then(dados => {
		const title = dados.Title

		preencher(dados)

		})

function preencher(dados){
	const h5_title_movie = document.getElementById('title_movie')
	const img_poster = document.getElementById('poster')

	const poster = dados.Poster
	const title = dados.Title

	img_poster.src = poster
	h5_title_movie.innerText = title
}

carregar()