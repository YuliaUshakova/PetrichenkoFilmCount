"use strict";

const numberOfFilms = +prompt ('How many films have you already seen?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Name one of the films you recently watched', ''),
      b = prompt ('Rate it out of 10', ''),
      c = prompt ('Name one of the films you recently watched', ''),
      d = prompt ('Rate it out of 10', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



