"use strict";

const numberOfFilms = +prompt ('How many films have you already seen?', "");




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
        } else {
        i--;
      }

      if (personalMovieDB.count <= 10) {
        alert('Not enough data');
    } else if ( 10 < personalMovieDB.count >= 30) {
        alert('You are a classic movie goer');
    } else {
        alert('You are a true cinema fan');
    }
}
console.log(personalMovieDB);



