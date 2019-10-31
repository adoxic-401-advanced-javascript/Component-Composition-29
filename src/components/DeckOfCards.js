import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';
import { characters } from '../content.json';



const DeckOfCards = () => {

  return (
    <>
      <Deck>
        {characters}
      </Deck>
    </>
  );
};

DeckOfCards.propTypes = {
  characters: PropTypes.array.isRequired
};

export default DeckOfCards;
