/**
 * Sample React Native Snapshot Test
 */
'use strict';

import 'react-native';
import React from 'react';
import {Todo} from '../src/containers/Todo';

const wrapper = shallow(<Todo />);
const instWrapper = wrapper.instance();
//testing that the Todo view is rendered properly, currently the todo components is not fully implemented,
//and therefore the only test here is a snapshot test regarding rendering
describe('<Todo />', () => {
	//check if the wrapper matches snapshot
	it('renders correctly', () => {
	  expect(wrapper).toMatchSnapshot();
	});
});





