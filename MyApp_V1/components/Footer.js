
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>MYAPP_V1</Text>

      <Text style={styles.text}>
        Bài thực hành React Native
      </Text>

      <Text style={styles.text}>
        © 2026 - Expo Snack
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1E293B',
    padding: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#CBD5E1',
    fontSize: 13,
    marginTop: 8,
  },
});
