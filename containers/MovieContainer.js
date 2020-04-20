import {connect} from 'react-redux';
import MovieComponent from '../components/MovieComponent';

import {addMovieAction, fetchMoviesAction, updateMovieAction} from '../actions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
