import React from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';
import PlayGround from './PlayGround/PlayGround';

class ExtraScreen extends React.Component {

_onPress() {
    Alert.alert('You tapped the button!');
    }

    render() {
        return (
            <View>
                <PlayGround />
            <Button
                onPress={this._onPress}
                title="Press Me and I will popup an Alert"
                style={styles.alerterStyle}
            />
            <View style={styles.navButton}>

            </View>
            <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.navButton}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    alerterStyle: {
        padding: 25
    },
    navButton: {
        flex: 3,
        padding: 50
    }
})

export default ExtraScreen;