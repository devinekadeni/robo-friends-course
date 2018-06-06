import React from 'react';
import { shallow } from 'enzyme';
import App from '../../containers/App';

it('expect to render App container', () => {
  expect(shallow(<App />)).toMatchSnapshot();
})