// screens/ChatScreen.tsx

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageBackground } from 'react-native';

const dummyMessages = [
  { id: '1', sender: 'driver', text: 'Hello! I will be there in 5 minutes.' },
  { id: '2', sender: 'user', text: 'Thank you! Looking forward to the ride.' },
  { id: '3', sender: 'driver', text: 'Let me know if you need anything else.' },
  { id: '4', sender: 'user', text: 'Sure, I’ll message if there’s anything.' },
];

const ChatScreen = () => {
  const renderMessage = ({ item }: { item: any }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'user' ? styles.userBubble : styles.driverBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.background}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }} // Driver's image when we acquire it
            style={styles.profileImage}
          />
          <Text style={styles.driverName}>Driver Name</Text>
        </View>

        <FlatList
          data={dummyMessages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatContainer}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, justifyContent: 'space-between' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  driverName: {
    fontSize: 18,
    color: '#006564',
    fontWeight: 'bold',
  },
  chatContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#006564',
  },
  driverBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#000000',
  },
  messageText: {
    color: '#fff',
  },
});

export default ChatScreen;