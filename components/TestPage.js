/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const TestPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const route = useRoute()
  const navigation = useNavigation()
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)
  const [timer, setTimer] = useState(30)
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const {id} = route.params;
      const url = 'https://tgryl.pl/quiz/test/62032610069ef9b2616c761e';
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setQuestions(json);
          setReady(true);
        });
    };
    getQuestions()
  }, [questions]);

  const setQuestionContent = () => {
    if((questionNumber + 1) < questions.tasks.length) {
      setQuestionNumber(prev => prev += 1)
      setTimer(30)
    } else {
      navigation.navigate('Test Overview', {points: points, total: questions.tasks.length, type: questions.name})
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
      {ready && 
        <>
          <View>
        <Text style={styles.testTileText}> Question {questionNumber + 1} of {questions.length}                   Time : 28 sec</Text>
        <Text style={styles.testTileText}> Punkty : {points} / 3 </Text>
        <Text style={styles.testTileTextQuestion}> {questions.tasks[questionNumber].question} </Text>
      </View>

      <View style={styles.viewAnswerContent}>
        <View style={styles.viewAnswer}>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions.tasks[questionNumber].answers[0].isCorrect)}>
            <Text> {questions.tasks[questionNumber].answers[0].content} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions.tasks[questionNumber].answers[1].isCorrect)}>
            <Text> {questions.tasks[questionNumber].answers[1].content} </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewAnswer}>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions.tasks[questionNumber].answers[2].isCorrect)}>
            <Text> {questions.tasks[questionNumber].answers[2].content} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerBtnStyle} onPress={() => checkAnswer(questions.tasks[questionNumber].answers[3].isCorrect)}>
            <Text> {questions.tasks[questionNumber].answers[3].content} </Text>
          </TouchableOpacity>
        </View>
      </View>
        </>
      } 
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