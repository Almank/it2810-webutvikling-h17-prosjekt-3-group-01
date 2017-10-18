/**
 * Sample React Native Snapshot Test
 */
'use strict';

import 'react-native';
import React from 'react';
import {Notes} from '../src/containers/Notes';
import {NoteList} from '../src/components/NoteList/NoteList';

const wrapper = shallow(<Notes />);
const instWrapper = wrapper.instance();

const wrapper_noteList = shallow(<NoteList />);
const instWrapper_noteList = wrapper_noteList.instance();

//testing that the Notes view renderes correctly, aswell as testing functionality regarding adding notes, changing notes, and removing notes
describe('<Notes />', () => {
	//test if the Notes view renders correctly
	it('renders correctly', () => {
	  expect(wrapper).toMatchSnapshot();
	});
	//test if the NoteList component is rendered correctly
	describe('<NoteList />', () => {
		it('should render correctly', () => {
			const wrapper = shallow(<NoteList />);
			expect(wrapper).toMatchSnapshot();
		});
	});
	//test if change is handled correctly, making sure that the change is the title actually used when testing creation of note
	describe('NoteList.handleChange()', () => {
		it('handles change', () => {
			instWrapper_noteList.handleChange("test_data");
			expect(instWrapper_noteList.state.textfield).toBe("test_data");
		});
	});
	//test if a note is created with the title "test_data" and that it contains default content
	describe('NoteList.onSubmit()', () => {
		it('adds test_data note to notes', () => {
			instWrapper_noteList.onSubmit();
			expect(instWrapper_noteList.state.notes['test_data']['content']).toBe('Write your content here');
		});
	});
	//test if the note titled "test_data" is changed correctly, new content is "test content"
	describe('NoteList.handleNoteContentChange()', () => {
		it('changes content of test note', () => {
			instWrapper_noteList.handleNoteContentChange('test_data', 'test content');
			expect(instWrapper_noteList.state.notes['test_data']['content']).toBe('test content');
		});
	});
	//test if the note titled "test_data" is properly removed
	describe('NoteList.handleRemoveClick()', () => {
		it('removes test note', () => {
			instWrapper_noteList.handleRemoveClick('test_data');
			expect(instWrapper_noteList.state.notes['test_data']).toBe(undefined);
		});
	});

});


