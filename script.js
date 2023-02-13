"use strict";

const numberOfFilms = +prompt ('How many films have you already seen?', "");
// if (numberOfFilms != '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt ('Name one of the films you recently watched', ''),
      b = prompt ('Rate it out of 10', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
}




