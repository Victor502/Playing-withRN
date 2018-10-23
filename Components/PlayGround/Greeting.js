import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Greeting extends Component {
    render() {
      return (
        <Text style={styles.main}>Hello {this.props.name}! They are {this.props.age}!</Text>
      );
    }
  }

  const styles = StyleSheet.create({
    main: {
        color: 'blue',
        fontSize: 35,
    }
});


  