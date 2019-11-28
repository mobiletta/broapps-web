import React from 'react';
import { shallow } from 'enzyme';
import Bar from './Bar';

describe('<Bar />', () => {
  test('renders', () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper).toMatchSnapshot();
  });
});
