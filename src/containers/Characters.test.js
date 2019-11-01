import React from 'react';
import { shallow, mount } from 'enzyme';
import Characters from './Characters';



describe('Characters container', () => {

  it('renders Character component', () => {

    global.fetch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<Characters />);
    expect(wrapper).toMatchSnapshot();
  });

});
