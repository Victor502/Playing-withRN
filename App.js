import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DetailsScreen from './Components/DetailsScreen';
import AboutScreen from './Components/AboutScreen';
import ExtraScreen from './Components/ExtraScreen';
import FoodMap from './Components/Maps/FoodMap';
import SecondMap from './Components/Maps/SecondMap';
import ThirdMap from './Components/Maps/ThirdMap';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.button}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
        <Button
          title="Go to Extra"
          onPress={() => this.props.navigation.navigate('Extra')}
        />
        <Button
          title="Go to Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
        <Button
          title="Go to 2ndMap"
          onPress={() => this.props.navigation.navigate('SecondMap')}
        />
        <Button
          title="Go to 3rdMap"
          onPress={() => this.props.navigation.navigate('ThirdMap')}
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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    About: AboutScreen,
    Extra: ExtraScreen,
    Map: FoodMap,
    SecondMap: SecondMap,
    ThirdMap: ThirdMap
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
