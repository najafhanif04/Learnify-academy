const apiKey = '105b3449e54997efc78dbad890bf50dc'; 
const moviesList = document.getElementById('movies-list');
const selectedGenreHeading = document.getElementById('selected-genre-heading');
const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';
const overlay = document.getElementById('overlay');
const trailerContainer = document.getElementById('trailer-container');
const trailer = document.getElementById('trailer');
const closeModal = document.getElementById('close-modal');

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
                    listItem.setAttribute('data-id', item.id); 
                    
                    const img = document.createElement('img');
                    img.src = imageBaseUrl + item.backdrop_path; 
                    img.alt = item.title; 
                    img.className = 'movie-poster';

                    const movieInfo = document.createElement('div');
                    movieInfo.className = 'movie-info';

                    const movieTitle = document.createElement('h3');
                    movieTitle.className = 'movie-title';
                    movieTitle.textContent = item.title;

                    const movieYear = document.createElement('p');
                    movieYear.className = 'movie-year';
                    movieYear.textContent = item.release_date.substring(0, 4);

                    const movieGenre = document.createElement('p');
                    movieGenre.className = 'movie-genre';
                    movieGenre.textContent = 'Genres not provided'; 

                    const movieRating = document.createElement('p');
                    movieRating.className = 'movie-rating';
                    movieRating.textContent = `Popularity: ${item.popularity}`;

                    movieInfo.appendChild(movieTitle);
                    movieInfo.appendChild(movieYear);
                    movieInfo.appendChild(movieGenre);
                    movieInfo.appendChild(movieRating);

                    listItem.appendChild(img);
                    listItem.appendChild(movieInfo);
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

moviesList.addEventListener('click', (event) => {
    const listItem = event.target.closest('li');
    if (listItem) {
        const movieId = listItem.getAttribute('data-id'); 
        if (movieId) {
            fetchMovieTrailer(movieId);
        }
    }
});

function fetchMovieTrailer(movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const video = data.results[0]; 
                trailer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.key}" frameborder="0" allowfullscreen></iframe>`;
                trailerContainer.style.display = 'block';
                overlay.style.display = 'block'; 
            } else {
                trailer.innerHTML = 'No trailer available.';
                trailerContainer.style.display = 'block';
                overlay.style.display = 'block'; 
            }
        });
}


closeModal.addEventListener('click', () => {
    trailerContainer.style.display = 'none';
    overlay.style.display = 'none'; 
});


overlay.addEventListener('click', () => {
    trailerContainer.style.display = 'none';
    overlay.style.display = 'none'; 
});
