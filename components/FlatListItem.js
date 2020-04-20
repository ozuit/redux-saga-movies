import React, {Component} from 'react';
import {Text} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const swipeoutButtons = [
      {
        text: 'Edit',
        type: 'secondary',
        onPress: () => {
          this.props.movieComponent.setState({
            currentMovie: {
              id: this.props.id,
              name: this.props.name,
              releaseYear: this.props.releaseYear,
            },
          });
          this.props.movieComponent.refs.modal.open();
        },
      },
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          this.props.movieComponent.props.onDeleteMovie(this.props.id);
        },
      },
    ];

    return (
      <Swipeout right={swipeoutButtons} autoClose={true}>
        <Text
          style={{
            padding: 10,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
            backgroundColor:
              this.props.index % 2 === 0 ? 'dodgerblue' : 'mediumseagreen',
          }}>{`${this.props.name},releaseYear=${this.props.releaseYear}`}</Text>
      </Swipeout>
    );
  }
}
