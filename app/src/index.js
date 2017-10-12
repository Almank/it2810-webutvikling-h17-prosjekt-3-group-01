import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import {Calendar} from "./containers/Calendar";
import {Notes} from './containers/Notes';
import {Todo} from './containers/Todo';

export class Index extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Content/>
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

export const Content = TabNavigator({
    Calendar: {screen: Calendar,
            navigationOptions: {
                tabBarIcon: () => (
                    <Image
                        source={require('./assets/calendar.png')}
                        style={{width: 60, height: 60}}
                    />
                ),
            }
        },
    Notes: {screen: Notes,
            navigationOptions: {
                tabBarIcon: () => (
                    <Image
                        source={require('./assets/list-symbol.png')}
                        style={{width: 60, height: 60}}
                    />
                ),
            }
        },
    Todo: {screen: Todo,
            navigationOptions: {
                tabBarIcon: () => (
                    <Image
                        source={require('./assets/pencil.png')}
                        style={{width: 60, height: 60}}
                    />
                ),
            }
        }
}, {
    initialRouteName: 'Calendar',
    swipeEnabled: false,
    tabBarOptions: {

        showIcon: true,
        showLabel: false,
        inactiveBackgroundColor: '#8e8e8e',
        activeBackgroundColor: '#6e6e6e',
        style: {
            height: 100,
        },
        iconStyle: {
            height: 50,
            width: 50
        },
    }
});
