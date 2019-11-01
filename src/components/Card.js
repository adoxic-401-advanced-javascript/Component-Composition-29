import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ children }) => {
  return (
    <>
      {children.map(({ _id, name, image, gifLink }) => (
        <div key={_id}>
          {name && <header><h3>{name}</h3></header>}
          {image && name && <figure>
            <img src={image} alt={name} />
          </figure>}
          {gifLink && <figure>
            <img src={gifLink} />
          </figure>}
          {name && _id && <p>{name} has {_id}</p>}
        </div>
      ))}
    </>
  );
};

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    gitLink: PropTypes.string
  })).isRequired
};

export default Card;
