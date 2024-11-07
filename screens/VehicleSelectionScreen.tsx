import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import Modal from 'react-native-modal';

const vehicles = [
  { id: '1', type: 'Standard', description: 'Shared air taxi', price: '$270' },
  { id: '2', type: 'X', description: 'Your personal air ride', price: '$670' },
];

const VehicleSelectionScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelectVehicle = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('ChatScreen'); // Optionally navigate to ChatScreen after selection
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.vehicleOption}
            onPress={() => handleSelectVehicle(item.type)}
          >
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleType}>{item.type}</Text>
              <Text style={styles.vehicleDescription}>{item.description}</Text>
            </View>
            <Text style={styles.vehiclePrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Booking Confirmation Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={handleCloseModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Booking Successful</Text>
          <Text style={styles.modalMessage}>
            Your booking has been confirmed. You can take an eVTOL at the following times:
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>

          {/* Contact Buttons */}
          <View style={styles.contactButtons}>
            <TouchableOpacity
              style={[styles.contactButton, styles.chatButton]}
              onPress={() => navigation.navigate('ChatScreen')}
            >
              <Text style={styles.contactButtonText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.contactButton, styles.callButton]}
              onPress={() => Alert.alert('Call', 'Calling the driver...')}
            >
              <Text style={styles.contactButtonText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  vehicleOption: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  vehicleInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  vehicleType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006564',
  },
  vehicleDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  vehiclePrice: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0, // Ensures modal takes full screen
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '90%', // Adjust modal width as needed
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006564',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#006564',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%', // Full width for the OK button
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensure buttons take full width
    marginTop: 10,
  },
  contactButton: {
    flex: 1, // Each button takes up half of the available width
    paddingVertical: 20, // Increased padding for larger buttons
    marginHorizontal: 5, // Space between buttons
    borderRadius: 8,
    alignItems: 'center',
  },
  chatButton: {
    backgroundColor: '#006564',
  },
  callButton: {
    backgroundColor: '#28a745',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 18, // Increased font size for better visibility
    fontWeight: 'bold',
  },
});

export default VehicleSelectionScreen;