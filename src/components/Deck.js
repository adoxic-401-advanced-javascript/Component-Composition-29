import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const Deck = ({ children }) => {
  const title = 'characters';
  return (
    <section>
      {title &&
      <header>
        <h2>{title}</h2>
      </header>}
      <Card>
        {children}
      </Card>
    </section>
    
  );
};

Deck.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

export default Deck;
