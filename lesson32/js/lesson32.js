$(document).ready(function () {
    function addHtml(movie) {
        if (movie.Poster == "N/A") {
            movie.Poster = "/lesson32/img/poster.jpg";
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
            </div>
         `);
    };

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
                                        // this.outerText = '';
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
