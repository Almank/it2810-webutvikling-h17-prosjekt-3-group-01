/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class ContentHeader extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.item}>When</Text>
                <Text style={styles.item}>Title</Text>
                <Text style={styles.item}>About</Text>
                <TouchableOpacity onPress={this.props.closeForm} title="press here">
                    <Text>Hey</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    item: {
        flexBasis:'33%',
        textAlign:'center',
        fontSize:16,
    }

});