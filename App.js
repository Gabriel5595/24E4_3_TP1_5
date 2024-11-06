import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});
