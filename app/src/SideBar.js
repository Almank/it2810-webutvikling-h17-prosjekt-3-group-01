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
                <LinkButton img={imageLinks[0]}/>
                <LinkButton img={imageLinks[1]}/>
                <LinkButton img={imageLinks[2]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
});

const imageLinks = [
    require('./assets/calendar.png'),
    require('./assets/list-symbol.png'),
    require('./assets/pencil.png')
];