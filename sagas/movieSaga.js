import {
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_MOVIE,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
  DELETE_SUCCEEDED,
  DELETE_MOVIE,
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

function* updateMovie(action) {
  try {
    const result = yield Api.putMovieFromApi(action.movie);
    if (result === true) {
      yield put({
        type: UPDATE_SUCCEEDED,
        movie: action.movie,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateMovie() {
  yield takeLatest(UPDATE_MOVIE, updateMovie);
}

function* deleteMovie(action) {
  try {
    const result = yield Api.deleteMovieFromApi(action.movie_id);
    if (result === true) {
      yield put({
        type: DELETE_SUCCEEDED,
        movie_id: action.movie_id,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchDeleteMovie() {
  yield takeLatest(DELETE_MOVIE, deleteMovie);
}
