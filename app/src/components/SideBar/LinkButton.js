/**
 * Created by martinlunde on 27.09.2017.
 */
import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image} from 'react-native';

export class LinkButton extends React.Component {
    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        console.log(this.props.img);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.onPress} style={styles.button}>
                    <Image
                        style={styles.image}
                        source={this.props.img}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#35393a',
        justifyContent: 'center',
        flex: 1,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    image: {
        width: 50,
        height: 50,
    }
});