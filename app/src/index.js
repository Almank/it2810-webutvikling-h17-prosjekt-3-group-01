import React from 'react';
import { View, StyleSheet } from 'react-native';
import {SideBar} from "./SideBar";

export class Index extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SideBar/>
                <View/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flex: 1,
    }
});