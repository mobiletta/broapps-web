import React from 'react';
import { shallow } from 'enzyme';
import Foo from './Foo';

describe('<Foo />', () => {
  test('renders', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper).toMatchSnapshot();
  });
});
