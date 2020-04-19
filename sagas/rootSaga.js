import {fork} from 'redux-saga/effects';
import {watchFetchMovies, watchAddMovie} from './movieSaga';

export default function* rootSaga() {
  yield fork(watchFetchMovies);
  yield fork(watchAddMovie);
}
