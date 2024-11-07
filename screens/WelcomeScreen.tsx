// screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/LoginBackground.jpg')} // Updated image name
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/images/EcoWingLogo.png')}></Image>
        <Text style={styles.logoText}>ECOWING</Text>
      </View>
      <Text style={styles.tagline}>We give people back hours,{'\n'}not just minutes</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 100,  // Set the desired width
    height: 100, // Set the desired height
    aspectRatio: 1, // Maintain a 1:1 aspect ratio (square)
    resizeMode: 'contain',
    paddingHorizontal: 5,
    right: '5%'
  },
  logoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  logoTextContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  logoText: {
    // flex: 1,
    fontSize: 54,
    fontWeight: 'bold',
    color: '#006564',
  },
  tagline: {
    fontSize: 24,
    position: 'absolute',
    fontWeight: 'bold',
    color: '#333',
    marginTop: 0,
    textAlign: 'center',
    top:'35%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '20%',
    width: '100%',
    paddingHorizontal: 65,
  },
  button: {
    backgroundColor: '#006564',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;