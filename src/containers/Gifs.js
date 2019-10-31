import React, { Component } from 'react';
import Deck from '../components/Deck';

export default class Gifs extends Component {

  state = {
    number: 10,
    image: []
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            name='number'
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
          <button>Submit</button>
        </form>
        <Deck title="Gifs">
          {this.state.image}
        </Deck>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.apiCall();
  }

  handleNumberChange = ({ target }) =>  {
    this.setState({ number: +target.value });
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall = () => {
    return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=${this.state.number}`)
      .then(res => res.json())
      .then((image) => {
        this.setState({ image }); 
      });
  }
}
