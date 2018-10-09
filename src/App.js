import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
  }

    getQuote = () =>{
      fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(data => data.json())
        .then(data => {
          this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image
          })
        })
    }

  render() {
    return (
      <div className="App">
        <button onClick={this.getQuote}>Get Quote</button>
        <h1>{this.state.character}</h1>
        <img src ={this.state.image} alt ={this.state.character}/>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default App;
