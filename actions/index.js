import {
  ADD_MOVIE,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
  DELETE_MOVIE,
  DELETE_SUCCEEDED,
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

export const updateMovieAction = (movie) => {
  return {
    type: UPDATE_MOVIE,
    movie,
  };
};

export const updateSuccessAction = (movie) => {
  return {
    type: UPDATE_SUCCEEDED,
    movie,
  };
};

export const deleteMovieAction = (movie_id) => {
  return {
    type: DELETE_MOVIE,
    movie_id,
  };
};

export const deleteSuccessAction = (movie_id) => {
  return {
    type: DELETE_SUCCEEDED,
    movie_id,
  };
};
