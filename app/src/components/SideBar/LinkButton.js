/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

export class LinkButton extends React.Component {

    onPress(){
        console.log("test");
    }

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button} title="button" onPress={this.onPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 100,
    },
    button: {
        display: 'flex',
        flex: 1,
    }
});