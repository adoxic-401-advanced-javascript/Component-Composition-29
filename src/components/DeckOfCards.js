import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';

const DeckOfCards = ({ characters }) => {
  
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
