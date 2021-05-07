import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Grid>
          <Col size={2}>
          </Col>
          <Col size={5}>
            <Text  style={styles.headerText}>Weather Ride</Text>
          </Col>
          <Col size={2}>
          </Col>
        </Grid>
      </View>
      <View style={styles.top}>

      </View>
      <View style={styles.bottom}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#00d4ff"
  },
  header: {
    height: "10%",
    width: "100%",
    display: "flex",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  headerText: {
    textAlignVertical: "bottom",
    height: "100%",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  top: {
    height: "30%",
    width: "100%",
  },
  bottom: {
    height: "60%",
    width: "100%",
  }
});
