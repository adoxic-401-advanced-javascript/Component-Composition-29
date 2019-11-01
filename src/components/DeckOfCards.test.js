import React from 'react';
import { shallow } from 'enzyme';
import DeckOfCards from './DeckOfCards';

describe('DeckOfCards component', () => {
  it('renders DeckOfCards', () => {
    const items = [{ id: 'some stuff' }];
   
    const wrapper = shallow(<DeckOfCards items={items} title='string'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
