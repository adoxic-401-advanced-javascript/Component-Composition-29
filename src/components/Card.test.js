import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component', () => {
  it('renders Card', () => {
    const children = [{ id: 'some stuff' }];
    
    const wrapper = shallow(<Card> { children } </Card>);
    expect(wrapper).toMatchSnapshot();
  });
});
