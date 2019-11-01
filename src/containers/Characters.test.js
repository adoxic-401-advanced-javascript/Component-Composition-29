import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';



describe('Characters container', () => {

  it('renders Character component', () => {

    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<Characters />);
    expect(wrapper).toMatchSnapshot();
  });

});
