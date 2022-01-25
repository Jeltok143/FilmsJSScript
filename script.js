"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?');
const b = prompt('На сколько ты его оценишь по 10 бальной шкале?');
const c = prompt('Один из последних просмотренных фильмов?');
const d = prompt('На сколько ты его оценишь по 10 бальной шкале?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);