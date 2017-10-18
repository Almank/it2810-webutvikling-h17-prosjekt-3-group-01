import React from 'react';
import {SideBar} from "../src/views/SideBar";
import {Button} from "../src/views/components/SideBar/Button";

describe("SideBar", ()=> {
    it("Should render correctly", ()=> {
        const SHALLOW = shallow(<SideBar/>);
        expect(SHALLOW).toMatchSnapshot();
    })
});
describe("Button", ()=>{
    it("Should render correctly", ()=> {
        const SHALLOW = shallow(<Button link={"/"} icon={"image"}/>);
        expect(SHALLOW).toMatchSnapshot();
    })
});