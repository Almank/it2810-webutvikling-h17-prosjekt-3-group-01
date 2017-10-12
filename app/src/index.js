import React from 'react';
import { View } from 'react-native';
import {SideBar} from "./SideBar";

export class Index extends React.Component {
    render() {
        return (
            <View>
                <SideBar/>
                /* Load Content here */
            </View>
        );
    }
}