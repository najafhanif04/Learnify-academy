const apiKey = '105b3449e54997efc78dbad890bf50dc'; 
const moviesList = document.getElementById('movies-list');
const selectedGenreHeading = document.getElementById('selected-genre-heading');
const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';

function fetchMoviesByGenre(genreId, genreName) {
    moviesList.innerHTML = ''; 
    selectedGenreHeading.textContent = genreName; 
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.results && data.results.length > 0) {
                data.results.forEach(item => {
                    const listItem = document.createElement('li');
                    const img = document.createElement('img');
                    img.src = imageBaseUrl + item.backdrop_path; 
                    img.alt = item.title; 
                    img.style.width = '300px';
                    img.style.height = '300px';

                    listItem.appendChild(img);
                    listItem.appendChild(document.createTextNode(item.title));
                    moviesList.appendChild(listItem);
                });
            } 
        });
}

document.querySelectorAll('.genre').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const genreId = link.getAttribute('data-id');
        const genreName = link.textContent; 
        fetchMoviesByGenre(genreId, genreName);
    });
});
