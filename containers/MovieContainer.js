import {connect} from 'react-redux';
import MovieComponent from '../components/MovieComponent';

import {
  addMovieAction,
  fetchMoviesAction,
  updateMovieAction,
  deleteMovieAction,
} from '../actions';

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: () => {
      dispatch(fetchMoviesAction());
    },
    onAddMovie: (newMoive) => {
      dispatch(addMovieAction(newMoive));
    },
    onUpdateMovie: (moive) => {
      dispatch(updateMovieAction(moive));
    },
    onDeleteMovie: (movie_id) => {
      dispatch(deleteMovieAction(movie_id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
