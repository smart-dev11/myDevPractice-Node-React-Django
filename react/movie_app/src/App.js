import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies =[
  {
    title:"Matrix",
    poster:"https://upload.wikimedia.org/wikipedia/en/9/9a/The_Matrix_soundtrack_cover.jpg"
  },
  {
    title:"Full Metal Jacket",
    poster:"http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg"
  },
  {
    title:"lord of the rings",
    poster:"http://ticketimage.interpark.com/Movie/still_image/V16/V1602287p_s01.gif"
  },
  {
    title:"Star wars",
    poster:"http://t1.daumcdn.net/movie/469c5c4957bee98cabe85e04e630f174dc0b7670"
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
