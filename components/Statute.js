/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Statute = () => {
  const navigation = useNavigation();

  const navigateToHomePage = () => {
    navigation.navigate('HomePage');
  }

  return (
  <View style={styles.container}>
    <View style={styles.stateInfoView}>
    <Text style={styles.stateStyle}> Regulamin </Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </Text>
    </View>
    <View style={styles.btnView}>
      <TouchableOpacity style={styles.acceptBtn} onPress={() => navigateToHomePage}>
        <Text> Zaakceptuj </Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a5a5a5",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  stateStyle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 15,
  },
  acceptBtn: {
    alignSelf: "center",
    backgroundColor: "#7e7e7e",
    width: 150,
    height: 100,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 15,
  },
  btnView: {
    alignItems: "center",
  },
  stateInfoView: {
    width: "90%",
    height: "90%",
    backgroundColor: "#aaaaaa",
    borderColor: "black",
    borderWidth: 2,
  }
})

export default Statute;