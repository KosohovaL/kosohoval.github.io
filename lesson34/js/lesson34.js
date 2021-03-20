$(document).ready(function () {
    function addHtml(movie) {
        if (movie.Poster == "N/A") {
            movie.Poster = "/lesson34/img/poster.jpg";
        }
        $('.movie-container').append(`
            <div class="movie-card shadow-box border">
                <div class="movie-title"> ${movie.Title} </div>
                <div class="poster">
                    <img class="movie-poster" src="${movie.Poster}" alt="Poster"></img>
                </div>
                <button class="btn more">More info</button>
                <div class="movie-text">
                <div class="movie-text-more">Year: ${movie.Year}</div>
                <div class="movie-text-more">IMDB: ${movie.imdbID}</div>
                <div class="movie-text-more">Type: ${movie.Type}</div>
                </div>
                <p class="imdbID">${movie.imdbID}</p>
                <button class="favorite-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 19.242 18.151">
                    <defs>
                        <style>
                            .a {
                                fill: #ffdd3f;
                                }
                        </style>
                    </defs>
                    <path class="a"
                    d="M299.335,594.3l4.716-2.235,4.815,2.26c-.607-.285,1.565,1.24,1.365-.877l-.5-5.306,3.487-3.884c-.56.623,1.54-1.079-.414-1.448-1.977-.372-5.52-.634-5.52-.634s-1.409-3.255-2.449-5.055c.484.838-.548-1.851-1.586-.039s-2.544,5.108-2.544,5.108-3.436.268-5.414.647c.775-.148-1.81-.08-.5,1.375l3.57,3.953-.484,5.319C297.925,592.961,297.2,595.313,299.335,594.3Z"
                    transform="translate(-294.412 -576.443)" />
                </svg>
            </button>
            </div>
         `);
    };

    function addFavoritesFilms(newFavorite) {
        const favoritesFilms = window.localStorage.getItem('imdbID');
        const favoritesFilmsList = JSON.parse(favoritesFilms || JSON.stringify([]));

        if (favoritesFilmsList.length == 0) {
            favoritesFilmsList.push(newFavorite);
        } else {
            if (favoritesFilms.includes(newFavorite)) {
                console.log(`Film imdbID:${newFavorite} already added!`);
            } else favoritesFilmsList.push(newFavorite);
        }
        const favoritesFilmsString = JSON.stringify(favoritesFilmsList);
        window.localStorage.setItem('imdbID', favoritesFilmsString);
    }

    function sendDataToAPI(title, year, type) {
        const link = `http://www.omdbapi.com/?s=${title}&y=${year}&type=${type}&apikey=13d869df`;
        fetch(link)
            .then((response) => {
                let myresult = response.json()
                return myresult;
            })
            .then((result) => {
                if (result.Response === "True") {
                    const resultSearch = result.Search;
                    const totalResults = result.totalResults;
                    let pages = 0;
                    (totalResults % 10 === 0) ? (pages = totalResults / 10) : (pages = Math.trunc(totalResults / 10) + 1);
                    $('.myForm').after(`
                        <div id="result">
                            <h2 class="header-result border shadow-text">Search result: ${result.totalResults} results</h2>
                            <div class="pagination-container"></div>
                            <div class="movie-container">
                            </div>
                        </div>
                        `);
                    for (let i = 0; i < result.Search.length; i++) {
                        addHtml(resultSearch[i]);
                    }
                    if (pages > 1) {
                        let pagesId = '';
                        for (let j = 1; j < (pages + 1); j++) {
                            $('.pagination-container').append(`
                            <div class="pagination shadow-box" id="${j}">${j}</div>
                            `);
                            pagesId = pagesId + '#' + String(j) + ', ';
                        };
                        var res = pagesId.slice(0, -2);
                        $(res).click(function (event) {
                            $('.pagination').removeClass('active')
                            $(this).addClass('active');
                            console.log(`Page open: ${event.target.id}`);
                            $('.movie-container').empty();
                            let linkPage = `${link}&page=${event.target.id}`;
                            fetch(linkPage)
                                .then((response) => {
                                    let myresult = response.json()
                                    return myresult;
                                })
                                .then((res) => {
                                    for (let i = 0; i < res.Search.length; i++) {
                                        addHtml(res.Search[i]);
                                    }
                                    $('.more').click(function () {
                                        $(this).next().toggleClass('more-text');
                                    })
                                    $('.favorite-btn').click(function () {
                                        const newFavoritesFilms = $(this).prev().text();
                                        addFavoritesFilms(newFavoritesFilms);
                                    })
                                })
                        });
                    }
                } else {
                    $('.myForm').after(`
                    <div id="result">
                        <h2 class="border shadow-text result"> ${result.Error} </h2>
                    </div>   
                        `);
                }
                $('.more').click(function () {
                    $(this).next().toggleClass('more-text');
                })
                $('.favorite-btn').click(function () {
                    const newFavoritesFilms = $(this).prev().text();
                    addFavoritesFilms(newFavoritesFilms);
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    $('.myForm').on('submit', (event) => {
        $('#result').remove();
        console.log('Start');
        event.preventDefault();
        const title = $('#mytitle').val();
        const year = $('#year').val();
        const type = $('#type option:selected').val();
        sendDataToAPI(title, year, type);
    })
})
