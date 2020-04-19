import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, FlatList, SafeAreaView, TextInput} from 'react-native';

export default class MovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      releaseYear: '',
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
                alert('You must enter movie name and release year!')
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
          keyExtractor={(item) => item.name}
          renderItem={({item, index}) => (
            <Text
              style={{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 17,
                color: 'white',
                backgroundColor:
                  index % 2 === 0 ? 'dodgerblue' : 'mediumseagreen',
              }}>{`${item.name},releaseYear=${item.releaseYear}`}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}
