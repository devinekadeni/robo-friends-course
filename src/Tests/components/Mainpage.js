import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../../components/Mainpage';

let wrapper;
beforEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage { ...mockProps }/>)
})

it('renders Mainpage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filter robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false,
  }
  const wrapper2 = shallow(<MainPage { ...mockProps2 }/>)
  expect(wrapper2.instance()).filterRobots().toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }
  ])
})

it('filter robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false,
  }
  const filteredRobots = []
  const wrapper3 = shallow(<MainPage { ...mockProps3 }/>)
  expect(wrapper3.instance()).filterRobots().toEqual(filteredRobots)
})