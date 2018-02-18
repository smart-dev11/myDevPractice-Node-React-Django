import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//Render : componentWillMount() -> render() -> componentDidMount()
//Update : componentWillReceiveProops() -> shouldComponentUpdate() -> componentWillUpdate()
//         -> render() -> component

class App extends Component {

  state = {
    greeting: 'hello!',
    movies: [
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
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies:[
          ...this.state.movies, // If you delete this, only you can show under movie.
          {
            title: "Trainspotting",
            poster: "http://image.cine21.com/IMGDB/poster/2001/0706/large/172352_18.jpg"
          }
        ]
      })
    },3000) //after 3 sec, show you new movies
  }
  // When It's update, render work again automatically

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
