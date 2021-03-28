// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directors = movies.map(function (movie) {
        return movie.director
    });
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramaSpielberg = movies.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
            return movie.director;
    });
    return dramaSpielberg.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const average = movies.reduce(function (acc, val) {
        if (val.rate !== "" && ('rate' in val)) {
            return acc + val.rate / movies.length
        } else {
            return acc
        }
    }, 0);
    return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function (movie) {
        if (movie.genre.includes('Drama')) return true;
    });
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedYear = [...movies].sort(function(a, b) {
        return (a.year - b.year || a.title.localeCompare(b.title))
    });
    return sortedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const orderAlph = [...movies].sort(function(a, b){
        return a.title.localeCompare(b.title);
    }).slice(0, 20).map(function (movie) {
        return movie.title;
    })
    return orderAlph;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average