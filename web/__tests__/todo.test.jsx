import React from 'react';
import localStorag from '../__test_setup__/localstorage';

import {ToDoApp} from "../src/views/containers/TodoApp";

const RENDER = render(<ToDoApp/>);
const INST_TO_DO_APP = shallow(<ToDoApp/>).instance();


describe("TodoApp", () => {
    it("Should render correctly", () => {
        expect(RENDER).toMatchSnapshot();
    });

    describe("TodoApp.addCatalog()", () => {
        it("Should add a new catalog to state", () => {
            const PREV_LENGTH = INST_TO_DO_APP.state.Todo.length;
            INST_TO_DO_APP.AddCatalog("test");
            expect(INST_TO_DO_APP.state.Todo.length).toBe(PREV_LENGTH + 1);
        })
    });
    describe("TodoApp.setSelectedCatalog()", () => {
        it("Should set the selected catalog correctly based on the input index", () => {
            INST_TO_DO_APP.setSelectedCatalog(0);
            expect(INST_TO_DO_APP.state.selectedItem).toBe(0);
        })
    });
    describe("TodoApp.updateItems()", () => {
        it("Should add a new item to correct catalog", () => {
            const PREV_LENGTH = INST_TO_DO_APP.state.Todo[INST_TO_DO_APP.state.selectedItem].items.length;
            INST_TO_DO_APP.updateItems("newTestItem");
            expect(INST_TO_DO_APP.state.Todo[INST_TO_DO_APP.state.selectedItem].items.length).toBe(PREV_LENGTH + 1);
        });
    });
    describe("TodoApp.deleteItem()", () => {
        it("Should delete item from correct catalog", () => {
            INST_TO_DO_APP.updateItems("itemToBeDeleted");
            const PREV_LENGTH = INST_TO_DO_APP.state.Todo[INST_TO_DO_APP.state.selectedItem].items.length;
            INST_TO_DO_APP.deleteItem(PREV_LENGTH - 1);
            expect(INST_TO_DO_APP.state.Todo[INST_TO_DO_APP.state.selectedItem].items.length).toBe(PREV_LENGTH - 1);

        })
    })


});