/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const EndTestPage = () => {
  const route = useRoute();

  const {points, total, type} = route.params;

  const sendData = async () => {
    console.log(points, total, type);

    await fetch('http://tgryl.pl/quiz/result', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nick: 'test1',
        score: points,
        total: total,
        type: type,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Sucess', data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  const navigation = useNavigation();

  useEffect(() => {
    sendData();
  });

  return (
    <View style={styles.endTestView}>
      <Text> Wynik Końcowy </Text>
      <View>
        <Text style={styles.textSummary}> Twój Wynik : {points} </Text>
        <TouchableOpacity style={styles.goBackBtn} onPress={() => navigation.navigate('Home Page')}>
          <Text style={styles.goBackBtnText}> Powrót </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  endTestView: {
    margin: 20,
    width: "90%",
    height: "90%",
    backgroundColor: "#bbbbbb",
  },
  endTestContent: {
    fontWeight: "bold",
    fontSize: 32,
    margin: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  textSummary: {
    fontWeight: "300",
    fontSize: 24,
    textAlign: "center",
  },
  goBackBtnText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  goBackBtn: {
    backgroundColor: "white",
    alignSelf: "center",
    margin: 10,
    borderRadius: 15,
  },
})

export default EndTestPage;