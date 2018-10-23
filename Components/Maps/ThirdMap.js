import React from 'react';
import { Marker, MapView } from 'expo';
import { StyleSheet, Button, View, Text, Dimensions} from 'react-native';

export default class ThirdMap extends React.Component {


    // 38.257617, -85.752929 ; 38.256924, -85.749743 ; 38.257137, -85.749694

    render() {

        const markers = [
            {
                latitude: 38.255579,
                longitude:  -85.753391,
                title: 'Johns truck',
                description: "Best Truck in town"
            },
            {
                title: "Bob's taco truck",
                latitude: 38.257202, 
                longitude: -85.753955
            },
            {
                title: "Bill's Dogs",
                latitude: 38.257617,
                longitude:  -85.752929
            },
            {
                title: "Hamburger Heven",
                latitude: 38.256924, 
                longitude: -85.749743
            },
            {
                latitude: 38.257137,
                longitude: -85.745694,
                title: "Good Ole Food",
            }
            
        ]
        
    // image={{uri: object.imageURI}} {require('../assets/customMarker')}
        const foodTruck = markers.map((c, i) => {
            return <MapView.Marker 
                    title={c.title}
                    key={i}
                    coordinate={c}
                    description={c.description}
                    pinColor={"green"}
                    image={c.image}
                     />
                    
        })

        return(
            <View>
                <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 38.2574904,
                    longitude: -85.7515811,
                    latitudeDelta: 0.0122,
                    longitudeDelta: 
                    Dimensions.get("window").width /
                    Dimensions.get("window").height *
                    0.0122
                }}
                ref={ref => this.map = ref}
                >
                {foodTruck}
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