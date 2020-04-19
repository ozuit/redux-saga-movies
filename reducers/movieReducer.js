import {
  ADD_MOVIE,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from '../actions/actionTypes';

const movieReducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.recieveMovies;
    case FETCH_FAILED:
      return [];
    // case ADD_MOVIE:
    //   return [...movies, action.newMovie];
    default:
      return movies;
  }
};

export default movieReducer;
