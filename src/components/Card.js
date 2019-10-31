import React from 'react';


const Card = (props) => {
 
  return (
    <>
      {props.characters.map(({ _id, name, image }) => (
          <div key={_id}>
            <header><h3>{name}</h3></header>
            <figure>
              <img src={image} alt={name} />
            </figure>
            <p>{name} has {_id}</p>
          </div>
        ))}
    </>
  );
}

export default Card;
