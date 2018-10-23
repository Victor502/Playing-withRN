import React from 'react';
import { AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  Alert, } from 'react-native';
import Greeting from './Greeting';


class PlayGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.enterName}>Your Name:</Text>
          
          <TextInput
            style={styles.nameInput}
            onChangeText={(text) => this.setState({text})}
            placeholder="Type Your name here!"
            clearTextOnFocus={true}
            ref={input => { this.textInput = input }}
            onEndEditing={() => this.textInput.clear()}
          />
          <Button 
            title='Press to save name'
            onPress={() => this.textInput.clear()}
          />
        <View style={styles.greeting}>
          <Greeting name={this.state.text} age='37'></Greeting>
          <Button 
            title='Press to reset name'
            onPress={() => this.setState({text: ''})}
          />
        </View>
          <Greeting name='Alyssa' age='22'></Greeting>
        </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 75
  },
  nameInput: {
    fontSize: 40,
  },
  greeting: {
    margin: 25,
  },
  enterName: {
    fontSize: 25,
    color: 'red'
  }
});

export default PlayGround;
// skip this line if using Create React Native App
// AppRegistry.registerComponent('louFoodTrucks', () => App);
