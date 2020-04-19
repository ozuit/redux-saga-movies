import {
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_MOVIE,
} from '../actions/actionTypes';
// Saga effects
import {put, takeLatest} from 'redux-saga/effects';
import Api from './Api';

function* fetchMovies() {
  try {
    const recieveMovies = yield Api.getMovieFromApi();
    yield put({
      type: FETCH_SUCCEEDED,
      recieveMovies,
    });
  } catch (error) {
    yield put({
      type: FETCH_FAILED,
      error,
    });
  }
}
export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}

function* addNewMovie(action) {
  try {
    const result = yield Api.postMovieFromApi(action.newMovie);
    if (result === true) {
      yield put({type: FETCH_MOVIES});
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddMovie() {
  yield takeLatest(ADD_MOVIE, addNewMovie);
}
