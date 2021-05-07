import { StatusBar } from 'expo-status-bar';
import React, { createRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import tailwind from 'tailwind-rn';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { AdMobBanner } from 'expo-ads-admob';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Grid>
          <Col size={2}>
          </Col>
          <Col size={5}>
            <Text style={styles.headerText}>Weather Ride</Text>
          </Col>
          <Col size={2}>
          </Col>
        </Grid>
      </View>
      <View style={styles.top}>
        <Card containerStyle={styles.mainCard}>
          <Card.Title>Motorcycle Day</Card.Title>
          <Card.Divider />
          <Grid style={styles.mainCardGrid}>
            <Col style={styles.temperature} size={60}>
              <Image
                style={{ width: 64, height: 64 }}
                source={require("./assets/sun.png")}
              />
            </Col>
            <Col style={styles.temperature} size={40}>
              <Text>
                Today
                </Text>
              <Text>
                37/72
                </Text>
            </Col>
          </Grid>
        </Card>
      </View>
      <View style={styles.bottom}>
      </View>
      <View style={styles.adSection}>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds
        />
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
  },
  mainCard: {
    height: "100%",
    borderRadius: 5,
  },
  mainCardGrid: {
    height: "100%",
  },
  temperature: {
    borderTopWidth: 3,
    borderBottomWidth: 3,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 100
  },
  adSection: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "purple",
    marginTop: -50
  }
});
