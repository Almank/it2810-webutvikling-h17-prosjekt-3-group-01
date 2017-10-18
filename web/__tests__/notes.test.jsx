import React from 'react';
import localStorage from "../__test_setup__/localstorage";

import {Notes} from '../src/views/containers/Notes';
import {NoteList} from "../src/views/components/NoteList/NoteList";
import {NoteLink} from "../src/views/components/NoteList/NoteLink";
import {NoteContent} from "../src/views/components/NoteList/NoteContent";


describe("Notes", ()=>{
    it("Should render correctly", () =>{
       const SHALLOW = shallow(<Notes/>);
       expect(SHALLOW).toMatchSnapshot();
    });

    describe("NoteList", () => {
        it("Should render correctly", () => {
            const SHALLOW = shallow(<NoteList/>);
            expect(SHALLOW).toMatchSnapshot();
        });
    });

    describe("NoteLink", () => {
        it("Should render correctly", () => {
            const SHALLOW = shallow(<NoteLink/>);
            expect(SHALLOW).toMatchSnapshot();
        });
    });


    describe("NoteContent", () => {
        it("Should render correctly", () =>{
            let data = {
                'default': {
                    title: 'default',
                    content: 'no content'
                }
            };
            const SHALLOW = render(<NoteContent data={data}/>);
            expect(SHALLOW).toMatchSnapshot();
        });
    });

});