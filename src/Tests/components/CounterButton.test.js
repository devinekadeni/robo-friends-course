import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CounterButton from '../../components/CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('correctly increments the counter' , () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state().count).toEqual(3)
})