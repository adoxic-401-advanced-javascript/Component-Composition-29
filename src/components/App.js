import React from 'react';
import { gifs } from '../content.json';
import Deck from './Deck';

export default function App() {
  return (
    <>
      <Deck />
      <section>
        {gifs.map(({ _id, image }) => (
          <div key={_id}>
            <header><h3>{_id}</h3></header>
            <figure>
              <img src={image} alt={_id} />
            </figure>
          </div>
        ))}
      </section>
    </>
  );
}