import React from 'react';
import Categories from '../Components/Categories';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

it('renders correctly', () => {
  const tree = renderer
    .create(<Categories/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test ("when a category is clicked, the event is cancelled", () =>{
  const wrapper = shallow(<Categories/>);

  let prevented = false;

  wrapper.find("form").simulate("submit", {
    preventDefualt: () =>{
      prevented = true;
    }
  });
  expect(prevented).toBe(true);
})
