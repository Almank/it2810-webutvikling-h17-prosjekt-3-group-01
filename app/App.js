import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Index } from './src/index';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Index />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: 'grey',
       flex: 1
   }
});