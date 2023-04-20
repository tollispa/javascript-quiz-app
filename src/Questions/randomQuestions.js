

import {javaScriptQuiz, disneyQuiz, gotQuiz, javaQuestions, footballQuestions, tvShowQuestions, friendsQuiz, countriesQuiz} from "./questions"

export const javaScriptArray = [];
let javaScriptQuizCopy = [...javaScriptQuiz];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * javaScriptQuizCopy.length);
  javaScriptArray.push(javaScriptQuizCopy[randomIndex]);
  javaScriptQuizCopy.splice(randomIndex, 1);
}

export const disneyArray = [];
let disneyQuizCopy = [...disneyQuiz];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * disneyQuizCopy.length);
  disneyArray.push(disneyQuizCopy[randomIndex]);
  disneyQuizCopy.splice(randomIndex, 1);
}

export const gotArray = [];
let gotQuizCopy = [...gotQuiz];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * gotQuizCopy.length);
  gotArray.push(gotQuizCopy[randomIndex]);
  gotQuizCopy.splice(randomIndex, 1);
}

export const javaArray = [];
let javaQuestionsCopy = [...javaQuestions];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * javaQuestionsCopy.length);
  javaArray.push(javaQuestionsCopy[randomIndex]);
  javaQuestionsCopy.splice(randomIndex, 1);
}

export const footballArray = [];
let footballQuestionsCopy = [...footballQuestions];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * footballQuestionsCopy.length);
  footballArray.push(footballQuestionsCopy[randomIndex]);
  footballQuestionsCopy.splice(randomIndex, 1);
}

export const tvShowArray = [];
let tvShowQuestionsCopy = [...tvShowQuestions];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * tvShowQuestionsCopy.length);
  tvShowArray.push(tvShowQuestionsCopy[randomIndex]);
  tvShowQuestionsCopy.splice(randomIndex, 1);
}

export const friendsArray = [];
let friendsQuizCopy = [...friendsQuiz];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * friendsQuizCopy.length);
  friendsArray.push(friendsQuizCopy[randomIndex]);
  friendsQuizCopy.splice(randomIndex, 1);
}

export const countriesArray = [];
let countriesQuizCopy = [...countriesQuiz];
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * countriesQuizCopy.length);
  countriesArray.push(countriesQuizCopy[randomIndex]);
  countriesArray.splice(randomIndex, 1);
}
