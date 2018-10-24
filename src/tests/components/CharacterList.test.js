import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from '../../components/CharacterList';

test('should correctly render character list', () => {
  const wrapper = shallow(<CharacterList />);
  expect(wrapper).toMatchSnapshot();
});