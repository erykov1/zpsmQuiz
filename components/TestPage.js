/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import test from "../assets/TestData";

const TestPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [points, setPoints] = useState(0)
  const [timer, setTimer] = useState(30)
  const questions = test

  const setQuestionContent = () => {
    if((questionNumber + 1) < test.length) {
      setQuestionNumber(prev => prev += 1)
      setTimer(30)
    }
  }

  const checkAnswer = (answer) => {
    if (answer === true) {
      setPoints(point => point += 1)
    }
    setQuestionContent()
  }

  return (
    <View style={styles.viewTestContent}>
      <View>
        <Text style={styles.testTileText}> Question {questionNumber + 1} of {questions.length}                   Time : 28 sec</Text>
        <Text style={styles.testTileText}> Punkty : {points} / 3 </Text>
        <Text style={styles.testTileTextQuestion}> {questions[questionNumber].question} </Text>
      </View>

      <View style={styles.viewAnswerContent}>
        <View style={styles.viewAnswer}>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions[questionNumber].answers[0].isCorrect)}>
            <Text> {questions[questionNumber].answers[0].content} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions[questionNumber].answers[1].isCorrect)}>
            <Text> {questions[questionNumber].answers[1].content} </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewAnswer}>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions[questionNumber].answers[2].isCorrect)}>
            <Text> {questions[questionNumber].answers[2].content} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions[questionNumber].answers[3].isCorrect)}>
            <Text> {questions[questionNumber].answers[3].content} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewTestContent: {
    margin: "5%",
    borderColor: "gray",
    borderWidth: 1,
    height: "90%",
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
  viewAnswerContent: {
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    backgroundColor: "white",
  },
  viewAnswer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  answerBtnStyle: {
    backgroundColor: "#B4B4B4",
    margin: 15,
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
  },
}
)

export default TestPage;