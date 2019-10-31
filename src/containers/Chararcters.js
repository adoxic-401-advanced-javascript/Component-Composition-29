import React, { Component } from 'react';
import PropType from 'prop-types';
import DeckOfCards from '../components/DeckOfCards';

export default class Characters extends Component {
  static propTypes = {
    count: PropType.number
  }

  static defaultProps = {
    count: 20
  }

  state = {
    characters: []
  }

  render() {
    return (
      <DeckOfCards characters={this.state.characters}/>
    )
  }

  componentDidMount() {
      this.apiCall().then(characters => {
      this.setState({characters}); 
    })
  }

  apiCall = () => {
    return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=${this.props.count}`)
      .then(res => res.json())

  }
}
