/* eslint-disable prettier/prettier */
import React, {useEffect} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({navigation}) => {
  const Drawer = createDrawerNavigator();

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@showStatute');
      if(!data) {
        const data = {
          showState: true
        };
        console.log('Brak danych')
        const jsonData = JSON.stringify(data);
        await AsyncStorage.setItem('@showStatute', jsonData);
        navigation.navigate('Statute')
      }
    } catch (e) {
      console.log(e);
    }
}

  useEffect(() => {
    SplashScreen.hide();
    getData();
    console.log('useEffect');
  })

  return (
    <SafeAreaView style={styles.viewTestInfo}>
      <ScrollView>

        <View style={styles.viewTile}>
          <Text style={styles.tileTextHead}> Tile Test 3 </Text>
          <Text style={styles.tileText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>

        <View style={styles.viewGetResult}>
          <Text style={styles.tileTextHead}> Get to know your ranking result </Text>
          <TouchableOpacity style={styles.checkBtnStyle} onPress={() => navigation.navigate('Results Page')}>
            <Text style={styles.checkBtnText}> Check !</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewTestInfo: {
    justifyContent: "center",
    margin: "5%",
    borderColor: "gray",
    borderWidth: 1,
  },
  viewTile: {
    borderColor: "black",
    borderWidth: 2,
    margin: 25,
  },
  tileTextHead: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
  },
  tileText: {
    textAlign: "left",
    padding: 7,
    fontSize: 16,
  },
  checkBtnStyle: {
    alignSelf: "center",
    backgroundColor: "#B4B4B4",
    margin: 10,
    width: 120,
    height: 60,
  },
  checkBtnText: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  viewGetResult: {
    borderColor: "black",
    borderWidth: 2,
  },
}
)

export default HomePage;