import React from 'react';
import { shallow } from 'enzyme';
import BetSlip from './BetSlip';

describe('<BetSlip />', () => {
  test('renders', () => {
    const wrapper = shallow(<BetSlip />);
    expect(wrapper).toMatchSnapshot();
  });
});
