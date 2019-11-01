import React from 'react';
import { shallow } from 'enzyme';
import DeckOfCards from './DeckOfCards';

describe('DeckOfCards component', () => {
  it('renders DeckOfCards', () => {
    const children = [{ id: 'some stuff' }];
    const wrapper = shallow(<DeckOfCards> {children} </DeckOfCards>);
    expect(wrapper).toMatchSnapshot();
  });
});
