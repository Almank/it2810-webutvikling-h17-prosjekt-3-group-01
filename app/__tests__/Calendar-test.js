/**
 * Sample React Native Snapshot Test
 */
'use strict';

import 'react-native';
import React from 'react';
import {Calendar} from '../src/containers/Calendar';
import {AppointmentForm} from '../src/components/Calendar/AppointmentForm';
import {ContentHeader} from '../src/components/Calendar/ContentHeader';
import {Day} from '../src/components/Calendar/Day';
import {Week} from '../src/components/Calendar/Week';


const wrapper = shallow(<Calendar />);
const instWrapper = wrapper.instance();
//test that the calendar view and corresponding components renders correctly as well as testing functionality regarding emptyschedule check, creating appointments and todays date
describe('<Calendar />', () => {
	//test if the view renders correctly using snapshot
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//check if appointmentForm renders correctly
	describe('<AppointmentForm />', () => {
		it('should render correctly', () => {
			const wrapper = shallow(<AppointmentForm />);
			expect(wrapper).toMatchSnapshot();
		});
	});
	//check if contentHeader renders correctly
	describe('<ContentHeader />', () => {
		it('should render correctly', () => {
			const wrapper = shallow(<ContentHeader />);
			expect(wrapper).toMatchSnapshot();
		});
	});
	//check if Week renders correctly
	describe('<Week />', () => {
		it('should render correctly', () => {
			const wrapper = shallow(<Week />);
			expect(wrapper).toMatchSnapshot();
		});
	});
	//test if the calendar's emptyScheduleCheck works
	describe('Calendar.emptyScheduleCheck()',() => {
		it('Should not be more then 0 events', () => {
			instWrapper.emptyScheduleCheck();
			const amountOfEvents = instWrapper.state.children.length;
			expect(amountOfEvents).toBe(0);
		});
	});
	//test if the calendar's createAppointment works
	describe('Calendar.createAppointment()',() => {
		it('should add one component', () => {
			instWrapper.createAppointment(['2017-10-15', '14:15', 'Title', 'Description']);
			const amountOfEvents = instWrapper.state.children.length;
			expect(amountOfEvents).toBe(1);
		});
	});
	//test if the calendars current date is todays date
	describe('Calendar.state.dateToday', () => {
		it('should match todays date', () => {
			expect(instWrapper.state.dateToday).toBe(new Date().toISOString().slice(0, 10));
		});
	});

});






