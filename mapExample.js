/* *********************************
* Third-party libraries ***********/
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class MapTracking extends Component {

  render() {
    return (
      <View>
        {/* implementing Google map onto the screen */}
        <MapView
          initialRegion={{
            latitude: 2.945,
            longitude: 101.874,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
        }}
          style={styles.map}
          zoomControlEnabled={true}
        >

          <MapView.Marker 
            coordinate={{
                latitude: 2.945,
                longitude: 101.874,
            }} 
          >

          </MapView.Marker> 

        </MapView>
      </View>

    );
  }
}

/* --------------------------
    StyleSheet
-------------------------- */

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
});

