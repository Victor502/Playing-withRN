import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

export default class SecondMap extends Component {
  state = {
    mapRegion: {
        latitude: 38.2574904,
        longitude: -85.7515811,
        latitudeDelta: 10.0122,
        longitudeDelta: 
        Dimensions.get("window").width /
        Dimensions.get("window").height *
        10.0122
    },
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    // this.setState({ mapRegion });
    this.map.animateToCoordinate({
        ...this.state.mapRegion,
        latitude: mapRegion.latitude,
        longitude: mapRegion.longitude 
    });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { 
        latitude: location.coords.latitude, 
        longitude: location.coords.longitude, 
        latitudeDelta: 0.0122, 
        longitudeDelta: 
        Dimensions.get("window").width /
        Dimensions.get("window").height * 0.0122 }});
  };

  render() {
    // let marker = <MapView.Marker 
    //       coordinate={this.state.mapRegion}
    //     />
    return (
      <View style={styles.container}>
        {
          this.state.locationResult === null ?
          <Text>Finding your current location...</Text> :
          this.state.hasLocationPermissions === false ?
            <Text>Location permissions are not granted.</Text> :
            this.state.mapRegion === null ?
            <Text>Map region doesn't exist.</Text> :
            <Text>Here you Are!</Text>
        }
            <MapView
              style={styles.map}
              region={this.state.mapRegion}
              onRegionChange={this._handleMapRegionChange}
              ref={ref => this.map = ref}
              showsUserLocation= {true}
            >
            {/* {marker} */}
            </MapView>

      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  map: {
    alignSelf: 'stretch',
    height: 500
  }
});
