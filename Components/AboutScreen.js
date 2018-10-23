import React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';


class AboutScreen extends React.Component {
    render() {
      return (
        <View style={styles.button}>
          <Text style={styles.main}>Me</Text>
          <Image 
            style={styles.piOfMe}
            source={require('../assets/TestImage.png')}
            borderRadius={500}
            backgroundColor='red'
            scale={2}
          />
          <Text>About Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Home')}
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
    },
    piOfMe: {
    }
  });

  export default AboutScreen;