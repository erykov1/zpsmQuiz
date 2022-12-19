/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ResultField = ({nick, points, type, total, date}) => {

  return (
    <View style={styles.viewResults}>
      <Text style={styles.textResults}> {nick} </Text>
      <Text style={styles.textResults}> {points} / {total} </Text>
      <Text style={styles.textResults}> {type} </Text>
      <Text style={styles.textResults}> {date} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewResults: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
  },
  textResults: {
    width: "25%",
    height: 65,
    borderRightWidth: 1,
    borderRightColor: "black",
  },
})

export default ResultField;