//npx expo start

import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styles from "./assets/scss/global.scss"
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0)

  const aumentanumer = () => {
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <TouchableOpacity style={styles.btn} onPress={aumentanumer}>
          <Text>Clicar aqui</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
      </View>
    </View>
  );
}

