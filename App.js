/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import type {Node} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import ResultsPage from './components/ResultsPage';
import Statute from './components/Statute';
import EndTestPage from './components/EndTestPage';

const Drawer = createDrawerNavigator();

const App: () => Node = () => {
  const [tests, setTests] = useState([]);
  const [testGetFrom, setTestGetFrom] = useState(false);

  useEffect(() => {
      getTests();
  }, []);

  const getTests = () => {
    setTestGetFrom(prev => !prev);
    fetch('https://tgryl.pl/quiz/tests')
      .then(response => response.json())
      .then(json => {
        setTests(json);
        setTestGetFrom(true);
      });
  };

  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home Page">
          <Drawer.Screen name="Home Page" component={HomePage} />
          {tests.map(test => (
            <Drawer.Screen
              name={test.name}
              component={TestPage}
              initialParams={{id: test.id}}
              key={test.id}
            />
          ))}
          <Drawer.Screen name="Results Page" component={ResultsPage} />
          <Drawer.Screen name="Statute" component={Statute} options={{drawerItemStyle: {display: 'none'}}}/>
          <Drawer.Screen name="Test Overview" component={EndTestPage} options={{drawerItemStyle: {display: 'none'}}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  viewTestInfo: {
    justifyContent: "center",
    margin: "5%",
    borderColor: "gray",
    borderWidth: 1,
  },
  viewTestContent: {
    margin: "5%",
    borderColor: "gray",
    borderWidth: 1,
    height: "90%",
  },
  viewTile: {
    borderColor: "black",
    borderWidth: 2,
    margin: 25,
  },
  viewAnswer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  viewResults: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
  },
  viewResultsContent: {
    borderColor: "black",
    borderWidth: 2,
    height: "95%"
  },
  viewResultsTab: {
    margin: 15,
  },
  textResults: {
    width: "25%",
    height: 65,
    borderRightWidth: 1,
    borderRightColor: "black",
  },
  viewAnswerContent: {
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    backgroundColor: "white",
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
  testTileText: {
    textAlign: "left",
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  testTileTextQuestion: {
    textAlign: "center",
    marginTop: 35,
    fontSize: 16,
    fontWeight: "bold",
  },
  testTileTextQuestionContent: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
  },
  viewGetResult: {
    borderColor: "black",
    borderWidth: 2,
  },
  checkBtnStyle: {
    alignSelf: "center",
    backgroundColor: "#B4B4B4",
    margin: 10,
    width: 120,
    height: 60,
  },
  answerBtnStyle: {
    backgroundColor: "#B4B4B4",
    margin: 15,
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  resultsBtnStyle: {
    width: "25%",
    height: 75,
    backgroundColor: "#B4B4B4",
    borderRightColor: "black",
    borderRightWidth: 1,
  },
  resultsTextStyle: {
    fontSize: 16,
    margin: 10,
  },
  checkBtnText: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
});

export default App;
