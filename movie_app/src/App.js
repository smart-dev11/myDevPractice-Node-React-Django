import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//Render : componentWillMount() -> render() -> componentDidMount()
//Update : componentWillReceiveProops() -> shouldComponentUpdate() -> componentWillUpdate()
//         -> render() -> component

class App extends Component {

  state = {
  }

  componentDidMount(){
    this._getMovies();
  }
  // When It's update, render work again automatically

  _renderMovies = () => {
    //const movies = this.state.movies.map((movie, index) =>{
    const movies = this.state.movies.map(movie =>{
      //console.log(movie) //check movie factor
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })

    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
                   //await mean is that wait! when callApi finish
    this.setState({
      movies
    })
  }

  _callApi = () => {
    //fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    // work is done so go to the then.
    //.then(response => console.log(response))  //check use the response
    .then(potato => potato.json())              //change to json
    //.then(json => console.log(json))            //see the data to console
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App": "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
