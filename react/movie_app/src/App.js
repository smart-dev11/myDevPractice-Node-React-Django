import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const moviesTitles = [
  "Matrix",
  "Full Metal Jacket",
  "lord of the rings",
  "Star wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Matrix_soundtrack_cover.jpg",
  "http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg",
  "http://ticketimage.interpark.com/Movie/still_image/V16/V1602287p_s01.gif",
  "http://t1.daumcdn.net/movie/469c5c4957bee98cabe85e04e630f174dc0b7670"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={moviesTitles[0]} poster={movieImages[0]}/>
        <Movie title={moviesTitles[1]} poster={movieImages[1]}/>
        <Movie title={moviesTitles[2]} poster={movieImages[2]}/>
        <Movie title={moviesTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
