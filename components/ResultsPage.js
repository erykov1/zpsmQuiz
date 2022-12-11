/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import data from "../assets/ResultsData";
import ResultField from "./ResultField";

const ResultsPage = () => {
  let results = data;
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    data = results;
    setRefresh(false);
  }

  const renderItem = ({item}) => <ResultField nick={item.nick} points={item.points} type={item.type} date={item.date}/>

  return (
    <View style={styles.viewResultsContent}>
      <View style={styles.viewResultsTab}>

        <View style={styles.viewResults}>
          <TouchableOpacity style={styles.resultsBtnStyle}>
            <Text style={styles.resultsTextStyle}>Nick</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resultsBtnStyle}>
            <Text style={styles.resultsTextStyle}>Point</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resultsBtnStyle}>
            <Text style={styles.resultsTextStyle}>Type</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resultsBtnStyle}>
            <Text style={styles.resultsTextStyle}>Date</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={item => item.nick}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/>}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewResultsContent: {
    borderColor: "black",
    borderWidth: 2,
    height: "95%"
  },
  viewResultsTab: {
    margin: 15,
  },
  resultsBtnStyle: {
    width: "25%",
    height: 75,
    backgroundColor: "#B4B4B4",
    borderRightColor: "black",
    borderRightWidth: 1,
  },
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
  resultsTextStyle: {
    fontSize: 16,
    margin: 10,
  },
})

export default ResultsPage;