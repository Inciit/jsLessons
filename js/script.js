"use srtict" 

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмоы вы уже посмотрели?', '');
  }
};

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 1; i < 3; i++) {
    const a = prompt(`Вопрос №${i} Один из последних просмотренных фильмов?`, ''),
      b = prompt('Насколько оцените его?', '');

    if (a == null || b == null || a == '' || b == '' || a.length > 51 || b.length > 51) {
      console.log('Ошибка в ответе "Кол-во фильмов"');
      i--;
    } else {
      console.log('done');
      personalMovieDB.movies[a] = b;
    }
  };
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Ошибка в ответе "Левел"');
  };

}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log('Дб зыкрыта');
    console.log(personalMovieDB);
  } else console.log(`Вот ваша база фильмов: ${personalMovieDB}`);
}

showMyDB();

function writeYourGenres() {
  let userGenres;
  for (let i = 1; i < 4; i++) {
    userGenres = prompt('Ваш любимый жанр', '');
    if (userGenres == '' || userGenres == null) {
      console.log('Ошибка в ответее "Жанры"');
      i--;
    }else {
      console.log('Жанр добавлен');
      personalMovieDB.genres[i - 1] = userGenres;
      console.log(`Ваш любимый жанр №${i} ${personalMovieDB.genres[i - 1]}`)
    }
  }
  return userGenres;
}

writeYourGenres();