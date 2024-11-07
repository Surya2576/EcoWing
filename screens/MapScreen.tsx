// screens/MapScreen.tsx

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';

const vertiports = [
  { label: 'Shekou Ferry Port', value: 'Shekou Ferry Port', latitude: 22.4911, longitude: 113.9297 },
  { label: 'Shenzhen Airport', value: 'Shenzhen Airport', latitude: 22.6393, longitude: 113.812 },
  { label: 'Hong Kong Airport', value: 'Hong Kong Airport', latitude: 22.308, longitude: 113.9185 },
  { label: 'The Peninsula', value: 'The Peninsula', latitude: 22.295, longitude: 114.173 },
  { label: 'Sai Kung Pier', value: 'Sai Kung Pier', latitude: 22.3833, longitude: 114.2734 },
  { label: 'Four Seasons', value: 'Four Seasons', latitude: 22.2878, longitude: 114.1571 },
  { label: 'Aberdeen Marina Hotel', value: 'Aberdeen Marina Hotel', latitude: 22.2475, longitude: 114.1585 },
  { label: 'Hong Kong Disneyland Hotel', value: 'Hong Kong Disneyland Hotel', latitude: 22.313, longitude: 114.0419 },
];

const MapScreen = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: vertiports[0].latitude,
    longitude: vertiports[0].longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [pickupOpen, setPickupOpen] = useState(false);
  const [dropoffOpen, setDropoffOpen] = useState(false);
  const mapRef = useRef(null);

  const handlePickupChange = (value) => {
    const selectedLocation = vertiports.find((v) => v.value === value);
    if (selectedLocation) {
      setPickup(selectedLocation);
      setRegion({
        ...region,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
      });
    }
  };

  const handleDropoffChange = (value) => {
    const selectedLocation = vertiports.find((v) => v.value === value);
    if (selectedLocation) {
      setDropoff(selectedLocation);
    }
  };

  useEffect(() => {
    if (pickup && dropoff && mapRef.current) {
      const coordinates = [
        { latitude: pickup.latitude, longitude: pickup.longitude },
        { latitude: dropoff.latitude, longitude: dropoff.longitude },
      ];
      setTimeout(() => {
        mapRef.current.fitToCoordinates(coordinates, {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        });
      }, 300);
    }
  }, [pickup, dropoff]);

  const showRoute = pickup && dropoff && pickup.latitude && dropoff.latitude;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {pickup && pickup.latitude && pickup.longitude && (
          <Marker
            coordinate={{ latitude: pickup.latitude, longitude: pickup.longitude }}
            title="Pickup Location"
            pinColor="green"
          />
        )}
        {dropoff && dropoff.latitude && dropoff.longitude && (
          <Marker
            coordinate={{ latitude: dropoff.latitude, longitude: dropoff.longitude }}
            title="Drop-off Location"
            pinColor="red"
          />
        )}
        {showRoute && (
          <Polyline
            coordinates={[
              { latitude: pickup.latitude, longitude: pickup.longitude },
              { latitude: dropoff.latitude, longitude: dropoff.longitude },
            ]}
            strokeColor="#006564"
            strokeWidth={4}
          />
        )}
      </MapView>

      <View style={styles.bottomPanel}>
        <Text style={styles.title}>Journey</Text>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>PICKUP</Text>
          <DropDownPicker
            open={pickupOpen}
            value={pickup ? pickup.value : null}
            items={vertiports}
            setOpen={setPickupOpen}
            setValue={(callback) => {
              const value = callback();
              handlePickupChange(value);
            }}
            placeholder="Select Pickup Location"
            style={styles.dropdown}
            zIndex={3000}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>DROP-OFF</Text>
          <DropDownPicker
            open={dropoffOpen}
            value={dropoff ? dropoff.value : null}
            items={vertiports.filter((v) => v.value !== (pickup ? pickup.value : null))}
            setOpen={setDropoffOpen}
            setValue={(callback) => {
              const value = callback();
              handleDropoffChange(value);
            }}
            placeholder="Select Drop-off Location"
            style={styles.dropdown}
            zIndex={2000}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VehicleSelection')}>
          <Text style={styles.buttonText}>Begin Expedition</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').height * 0.6,
  },
  bottomPanel: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    height: '40%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006564',
    textAlign: 'center',
    marginBottom: 10,
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  dropdown: {
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#006564',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;