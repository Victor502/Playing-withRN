import React from 'react';
import { MapView, Location, Permissions } from 'expo';
import { StyleSheet, Button, View, Text, Dimensions} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            myLonLat: {
                latitude: 38.2574904,
                longitude: -85.7515811,
                latitudeDelta: 0.0122,
                longitudeDelta: 
                Dimensions.get("window").width /
                Dimensions.get("window").height *
                0.0122
            },
            locationChosen: false
        };
      }
      pickLocationHandler = e => {
        const coords = e.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.myLonLat,
            latitude: coords.latitude,
            longitude: coords.longitude 
        });
        this.setState(prevState => {
            return{
                myLonLat: {
                    ...prevState.myLonLat,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        })
      }

      
  render() {
      let marker = null;
      if (this.state.locationChosen) {
          marker = <MapView.Marker 
            coordinate={this.state.myLonLat}
          />
      }

    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={this.state.myLonLat}
                onPress={this.pickLocationHandler}
                ref={ref => this.map = ref}
                showsMyLocationButton={true}
            >
            {marker}
            </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    map: {
        height: 450
    }
  });