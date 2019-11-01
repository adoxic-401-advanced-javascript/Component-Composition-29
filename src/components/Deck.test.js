import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';

describe('Deck component', () => {
  it('renders Deck', () => {
    const children = [{ id: 'some stuff', key: 'thing' }];
    const wrapper = shallow(<Deck> { children } </Deck>);
    expect(wrapper).toMatchSnapshot();
  });
});
