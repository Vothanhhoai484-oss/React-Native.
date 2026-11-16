
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Main() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Xin chào! 👋
      </Text>

      <Text style={styles.description}>
        Chào mừng bạn đến với MyApp_V1.
      </Text>

      <Text style={styles.label}>
        Họ và tên:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập họ và tên..."
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.result}>
        {name ? `Xin chào ${name}!` : 'Vui lòng nhập tên'}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Bộ đếm tương tác
        </Text>

        <Text style={styles.counter}>
          {count}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>
            TĂNG SỐ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>
            ĐẶT LẠI
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
  },
  result: {
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginTop: 25,
    alignItems: 'center',
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 48,
    color: '#2563EB',
    fontWeight: 'bold',
    margin: 15,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: '#64748B',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
