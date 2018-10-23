import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={styles.button}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    main: {
        color: 'blue',
        fontSize: 35,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center' 
    }
  });

  export default DetailsScreen;