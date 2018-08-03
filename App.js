import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/logo';
import Form from './src/components/form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
