"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?');
  const b = prompt('На сколько ты его оценишь по 10 бальной шкале?');

  if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if(personalMovieDB.count < 10) {
  console.log('Мало фильмов ты посмотрел');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Ты классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Ты киноман!');
} else {
  console.log('Произошла ошибка!');
}

console.log(personalMovieDB);