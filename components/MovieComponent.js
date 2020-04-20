import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, FlatList, SafeAreaView, TextInput} from 'react-native';
import FlatListItem from './FlatListItem';
import Modal from 'react-native-modalbox';

export default class MovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      releaseYear: '',
      currentMovie: {
        id: '',
        name: '',
        releaseYear: '',
      },
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={{fontSize: 20, margin: 10}}>New movie information</Text>
        <TextInput
          style={{margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1}}
          placeholder="Enter new movie name"
          value={this.state.movieName}
          onChangeText={(value) => this.setState({movieName: value})}
        />
        <TextInput
          style={{margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1}}
          placeholder="Enter release year"
          value={this.state.releaseYear}
          onChangeText={(value) => this.setState({releaseYear: value})}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
            }}
            style={{fontSize: 18, color: 'white'}}
            onPress={() => {
              this.props.onFetchMovies();
            }}>
            Fetch Movies
          </Button>
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
            }}
            style={{fontSize: 18, color: 'white'}}
            onPress={() => {
              const {movieName, releaseYear} = this.state;
              if (!movieName.length && !releaseYear) {
                alert('You must enter movie name and release year!');
                return;
              }
              this.props.onAddMovie({
                name: movieName,
                releaseYear: releaseYear,
              });
            }}>
            Add Movie
          </Button>
        </View>
        <FlatList
          data={this.props.movies}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => (
            <FlatListItem {...item} index={index} movieComponent={this} />
          )}
        />
        <Modal
          ref={'modal'}
          style={{
            padding: 20,
            paddingTop: 50,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, margin: 10}}>Edit movie information</Text>
          <TextInput
            style={{
              width: '100%',
              margin: 5,
              padding: 10,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            placeholder="Enter new movie name"
            value={this.state.currentMovie.name}
            onChangeText={(value) =>
              this.setState({
                currentMovie: {...this.state.currentMovie, name: value},
              })
            }
          />
          <TextInput
            style={{
              width: '100%',
              margin: 5,
              padding: 10,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            placeholder="Enter release year"
            value={this.state.currentMovie.releaseYear.toString()}
            onChangeText={(value) =>
              this.setState({
                currentMovie: {...this.state.currentMovie, releaseYear: value},
              })
            }
          />
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: '100%',
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
            }}
            style={{fontSize: 18, color: 'white'}}
            onPress={() => {
              const {currentMovie} = this.state;
              if (!currentMovie.name && !currentMovie.releaseYear) {
                alert('You must enter movie name and release year!');
                return;
              }
              this.props.onUpdateMovie(this.state.currentMovie);
              this.refs.modal.close();
            }}>
            Save
          </Button>
        </Modal>
      </SafeAreaView>
    );
  }
}
