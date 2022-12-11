/* eslint-disable prettier/prettier */
import React from 'react';

const test = [ {

  question : "Jak inaczej nazywamy obiekty ?",
  answers : [
  {
    content : "klasy",
    isCorrect : true,
  },
  {
    content : "wskazniki",
    isCorrect : false,
  },
  {
    content : "referencje",
    isCorrect : false,
  },
  {
    content : "funkcje",
    isCorrect : false,
  },
 ],
 duration: 30,
 },
 {
  question : "W którym roku odbyło się pierwsze wydanie Javy ?",
  answers : [
    {
      content : "2001",
      isCorrect : false,
    },
    {
      content : "200",
      isCorrect : false,
    },
    {
      content : "1994",
      isCorrect : false,
    },
    {
      content : "1996",
      isCorrect : true,
    },
  ],
  duration: 30,
 },
 {
  question : "Jak nazywa się popularny framework w języku Java ?",
  answers : [
    {
      content : "Flask",
      isCorrect : false,
    },
    {
      content : "Spring",
      isCorrect : true,
    },
    {
      content : "Django",
      isCorrect : false,
    },
    {
      content : "React.js",
      isCorrect : false,
    },
  ],
  duration : 30,
 },
]

export default test;