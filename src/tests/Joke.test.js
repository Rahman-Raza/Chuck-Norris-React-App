import React from 'react';
import Joke from '../Components/Joke';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Joke />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});