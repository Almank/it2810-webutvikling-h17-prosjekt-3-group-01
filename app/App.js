import React from 'react';
import { View } from 'react-native';
import { Index } from './src/index';
import { index_style } from './src/assets/index_style';

export default class App extends React.Component {
  render() {
    return (
      <View style={index_style.container}>
        <Index/>
      </View>
    );
  }
}