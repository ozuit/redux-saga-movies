import {fork} from 'redux-saga/effects';
import {
  watchFetchMovies,
  watchAddMovie,
  watchUpdateMovie,
  watchDeleteMovie,
} from './movieSaga';

export default function* rootSaga() {
  yield fork(watchFetchMovies);
  yield fork(watchAddMovie);
  yield fork(watchUpdateMovie);
  yield fork(watchDeleteMovie);
}
