import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView , StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

      </View>
      <View style={styles.top}>

      </View>
      <View style={styles.bottom}>

      </View>
      {/* <Text style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>O654pen up App.tsx to start working on your app! TTT </Text>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  header: {
    height: "10%",
    width: "100%",
    backgroundColor: "green"
  },
  top: {
    height: "30%",
    width: "100%",
    backgroundColor: "blue"
  },
  bottom: {
    height: "60%",
    width: "100%",
    backgroundColor: "yellow"
  }
});
