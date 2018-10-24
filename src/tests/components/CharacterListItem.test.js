import React from 'react';
import { shallow } from 'enzyme';
import CharacterListItem from '../../components/CharacterListItem';

test('should correctly render character list item', () => {
  const wrapper = shallow(<CharacterListItem />);
  expect(wrapper).toMatchSnapshot();
});