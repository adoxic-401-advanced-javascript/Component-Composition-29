import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const Deck = ({ children, title }) => {
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
  children: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default Deck;
