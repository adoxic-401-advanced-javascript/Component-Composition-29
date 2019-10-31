import React from 'react';
import Card from './Card';
import { characters } from '../content.json';

const Deck = () => {
  const title = characters;
  return (
  <section>
      <header>
        <h2>Characters</h2>
      </header>
      <Card characters={characters}/>
    </section>
    
  );
}

export default Deck;