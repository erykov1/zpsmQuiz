/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import ResultField from "./ResultField";
import { shuffle } from 'lodash';
import { ScrollView } from "react-native-gesture-handler";

const ResultsPage = () => {
  const [refresh, setRefresh] = useState(false);
  const [results, setResults] = useState([]);

  const onRefresh = () => {
    setRefresh(true);
    getResults();
    setRefresh(false);
  }

  const getResults = () => {
    fetch('https://tgryl.pl/quiz/results')
      .then((response) => response.json())
      .then((json) => {
        setResults(json)
      })
  }

  useEffect(() => {
    getResults();
  }, []);

  const renderItem = ({item}) => <ResultField nick={item.nick} points={item.score} type={item.type} total={item.total} date={item.createdOn}/>

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
          keyExtractor={item => item.id}
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