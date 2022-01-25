"use strict";

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {

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

}

rememberMyFilms();



function detectPersonalLevel() {

  if(personalMovieDB.count < 10) {
    console.log('Мало фильмов ты посмотрел');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ты классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Ты киноман!');
  } else {
    console.log('Произошла ошибка!');
  }

}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
    console.log(personalMovieDB);
    console.log("У вас открытая БД");
   } else {
     console.log("У вас закрытая БД");
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(genres) {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres(personalMovieDB.genres);
