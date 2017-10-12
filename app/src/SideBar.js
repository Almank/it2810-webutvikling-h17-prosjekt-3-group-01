/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import {LinkButton} from "./components/SideBar/LinkButton";
import { View, StyleSheet } from 'react-native'


export class SideBar extends React.Component {
    render(){
        return (
            <View className="sideBar" style={styles.container}>
                <LinkButton/>
                <LinkButton/>
                <LinkButton/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'grey',
        flexDirection: 'row',
    },
});