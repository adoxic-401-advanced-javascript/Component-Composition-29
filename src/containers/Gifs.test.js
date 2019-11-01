import React from 'react';
import { shallow, mount } from 'enzyme';
import Gifs from './Gifs';

Gifs.apiCall = jest.fn();

describe('Gifs container', () => {
  it.skip('renders Gif component', () => {
    const wrapper = shallow(<Gifs />);
    expect(wrapper).toMatchSnapshot();
  });
});