import {
  ADD_MOVIE,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from './actionTypes';

export const fetchMoviesAction = () => {
  return {
    type: FETCH_MOVIES,
  };
};

export const addMovieAction = (newMovie) => {
  return {
    type: ADD_MOVIE,
    newMovie,
  };
};

export const fetchSuccessAction = (recieveMovies) => {
  return {
    type: FETCH_SUCCEEDED,
    recieveMovies,
  };
};

export const fetchFailedAction = (error) => {
  return {
    type: FETCH_FAILED,
    error,
  };
};
