/**
 * Created by almank on 14.10.2017.
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class ContentHeader extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.item}>When</Text>
                <Text style={styles.item}>Title</Text>
                <Text style={styles.item}>About</Text>
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
        borderBottomWidth:1.5,
        borderBottomColor: 'black',
    },
    item: {
        flexBasis:'33%',
        textAlign:'center',
        fontSize:18,
        marginBottom: 20,
    }
});
