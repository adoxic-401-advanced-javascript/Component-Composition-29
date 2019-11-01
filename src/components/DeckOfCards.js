import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck';

const DeckOfCards = ({ items, title }) => {
  return (
    <>
      <Deck title={title}>
        {items}
      </Deck>
    </>
  );
};

DeckOfCards.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default DeckOfCards;
