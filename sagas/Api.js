import {call} from 'redux-saga/effects';
const urlGetMovies = 'https://5e99d3c7bc561b0016af394c.mockapi.io/movies';
const urlPostMovies = 'https://5e99d3c7bc561b0016af394c.mockapi.io/movies';
const urlPutMovies = 'https://5e99d3c7bc561b0016af394c.mockapi.io/movies';

function* getMovieFromApi() {
  const response = yield call(fetch, urlGetMovies);
  const movies = yield call([response, response.json]);
  return movies;
}

function* postMovieFromApi(newMovie) {
  const response = yield fetch(urlPostMovies, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newMovie.name,
      releaseYear: newMovie.releaseYear,
    }),
  });
  console.log('Response = ' + JSON.stringify(response));
  return yield response.status === 201;
}

function* putMovieFromApi(movie) {
  const response = yield fetch(`${urlPutMovies}/${movie.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: movie.name,
      releaseYear: movie.releaseYear,
    }),
  });
  console.log('Response = ' + JSON.stringify(response));
  return yield response.status === 200;
}

export default {
  getMovieFromApi,
  postMovieFromApi,
  putMovieFromApi,
};
