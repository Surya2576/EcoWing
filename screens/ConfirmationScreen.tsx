// screens/ConfirmationScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationScreen = ({ route, navigation }) => {
  const { email } = route.params; // Get the email passed from SignUp
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const verifyCode = async () => {
    try {
      // Make an API request to verify the code
      const response = await fetch('https://your-backend-url.com/verifyCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, confirmationCode }),
      });
      const data = await response.json();

      if (data.success) {
        // Navigate to the next screen or complete sign-up process
        navigation.navigate('Home'); // or wherever you want to go
      } else {
        setErrorMessage('Invalid or expired code. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Enter the code sent to {email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirmation Code"
        keyboardType="numeric"
        value={confirmationCode}
        onChangeText={setConfirmationCode}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.verifyButton} onPress={verifyCode}>
        <Text style={styles.verifyButtonText}>Verify Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  instructionText: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  input: { backgroundColor: '#ffffff', padding: 15, borderRadius: 8, borderColor: '#ddd', borderWidth: 1, marginBottom: 10 },
  errorText: { color: 'red', textAlign: 'center', marginBottom: 10 },
  verifyButton: { backgroundColor: '#006564', paddingVertical: 15, borderRadius: 8, alignItems: 'center' },
  verifyButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default ConfirmationScreen;