import {
  ADD_MOVIE,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
} from '../actions/actionTypes';

const movieReducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.recieveMovies;
    case FETCH_FAILED:
      return [];
    // case ADD_MOVIE:
    //   return [...movies, action.newMovie];
    case UPDATE_SUCCEEDED:
      return [...movies].map((item) => {
        return item.id == action.movie.id ? action.movie : item;
      });
    default:
      return movies;
  }
};

export default movieReducer;
