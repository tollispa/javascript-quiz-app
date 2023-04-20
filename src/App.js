
import './App.css';
import { FaSync } from 'react-icons/fa';


import { 
  javaScriptArray, 
  disneyArray, 
  gotArray, 
  javaArray, 
  footballArray, 
  tvShowArray, 
  friendsArray 
} from './Questions/randomQuestions';

import {useEffect, useState} from "react"



function App() {
  const [quizIndex, setQuizIndex] = useState(0)
  const [msg, setMsg] = useState("")
  const [color, setColor] = useState("#8B0000")
  const [count, setcount] = useState(null)
  const [emptyQuiz, setEmptyQuiz] = useState([])
  const [backgroundColor, setBackgroundColor] = useState("none")
  const [header, setHeader] = useState("")
 
  const correctAnswer = emptyQuiz.map((answer) => answer)


  
 useEffect(() => {
   if(emptyQuiz === javaScriptArray) {
   setHeader("Javascript Quiz")
   }
   if(emptyQuiz === disneyArray) {
    setHeader("Disney Quiz")
    }
    if(emptyQuiz === gotArray) {
      setHeader("Game of Thrones Quiz")
      }
      if(emptyQuiz === javaArray) {
        setHeader("Java Quiz")
        }
        if(emptyQuiz === footballArray) {
          setHeader("Football Quiz")
          }
          if(emptyQuiz === tvShowArray) {
            setHeader("TV-shows Quiz")
            }
            if(emptyQuiz === friendsArray) {
              setHeader("Friends Quiz")
              }
 },[emptyQuiz])
  const clickAnswer = (index, choice) => {
   
    
    
    if(quizIndex === emptyQuiz.length -1 && choice === correctAnswer[quizIndex].answer && count === 0){
      setMsg(`Amazing! You passed the quiz without any wrong answers!`)
      setColor("green")
      setHeader("Quiz completed!")
      setBackgroundColor("#80ff80")
      return 
    }
    if(quizIndex === emptyQuiz.length -1 && choice === correctAnswer[quizIndex].answer){
      setMsg(`Correct! This was the last question!`)
      setColor("green")
      setHeader("Quiz completed! ✔️")
      
      setBackgroundColor("#80ff80")
      return 
    }
    if(choice !== correctAnswer[quizIndex].answer && color === "red"){
      setMsg("Oops! Wrong again!")
      setcount(count+1)
      return
    }
    if(choice === correctAnswer[quizIndex].answer && color === "green"){
      setMsg("Nice! Correct answer again!")
      setQuizIndex(quizIndex+1)
      return
    }

    if (choice === correctAnswer[quizIndex].answer) {
      setColor("green")
      setBackgroundColor("#80ff80")
      setMsg("Correct answer!")
      return setQuizIndex(quizIndex+1)
    }else {
      setColor("red")
      setBackgroundColor("#ff8080")
      setcount(count+1)
      setMsg("Wrong answer, try again!")
      
 
    }
  }
 
  const backBtn = () => {
    const nr = quizIndex -1
    if(quizIndex === 0){
      setMsg("This is the first question")
      setColor("black")
      setBackgroundColor("transparent")
      
      return 
    }
    setQuizIndex(nr)
    setMsg("")
    setBackgroundColor("transparent")
    
    
  }

  const homeBtn = () => {
    setEmptyQuiz([])
    setcount(null)
    setMsg("")
    setBackgroundColor("transparent")
    setQuizIndex(0)
    setColor("#8B0000")
  }
  return (
    <div className="flex bg-blue-400 flex-col items-center w-full h-screen">


       {emptyQuiz.length === 0 ? null :  <h1 className='bg-black font-bold text-2xl w-full text-center text-white m-2 shadow-lg p-6'>{header} {quizIndex +1}/{emptyQuiz.length}</h1>

}
{ emptyQuiz.length > 0 && count > 0  ? <p className='font-bold h-[16px]'>Wrong answers: <span className='text-red-600 font-bold' >{count}</span></p> : <p className='h-[16px]'></p>}
      <p className='font-bold p-4 text-m sm:text-4xl'>{emptyQuiz[quizIndex]?.question}
     
      </p>
    
    <p className='flex flex-wrap sm:relative justify-center text-center m-1 min-w-[50%]'>
    
  {emptyQuiz[quizIndex]?.choices.map((choice, index) => (
    <span className="bg-blue-100 cursor-pointer  text-black border-2 border-black font-bold shadow-lg m-1 p-3 sm:p-4 rounded w-full sm:w-[40%] sm:h-auto sm:text-xl" key={index} onClick={() => clickAnswer(index, choice)}>
      {choice}
    </span>
  ))}{
    emptyQuiz.length === 0 ? null :
    <span style={{color: `${color}`, backgroundColor: `${backgroundColor}`}}className={` rounded font-bold m-2 p-1 block text-lg text-center sm:text-lg w-[50%]`}>{msg}</span>
  }
 
  { emptyQuiz.length === 0 ? null : 

  <button onClick={backBtn}className='bg-black rounded text-white p-2 w-[30%] h-[50px] hover:shadow-lg absolute text-xl left-5 bottom-5 sm:static sm:w-[50%]'>Back</button>
  

  }
  { emptyQuiz.length === 0 ? null : 

<button onClick={() => homeBtn()}className='bg-black rounded text-white text-xl p-2 w-[30%] h-[50px]  hover:shadow-lg absolute right-10 bottom-5 sm:static sm:w-[50%] sm:m-4'>Home</button>


}
</p>
<div className='flex flex-wrap text-center justify-center'  style={{ display: emptyQuiz.length === 0 ? "block" : "none" }}>
  <h1 className='font-bold text-2xl mb-10'>Welcome to the Quiz! <button className='sm:hidden' onClick={() => window.location.reload()}><FaSync size={15}/> </button></h1>
  <p className='font-bold text-black/50'>Select a category</p>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(javaScriptArray)}}>JavaScript</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(disneyArray)}}>Disney</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(gotArray)}}>Game of Thrones</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(javaArray)}}>Java</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(footballArray)}}>Football</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(tvShowArray)}}>TV-shows</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(friendsArray)}}>Friends</button>






  </div>
   
    </div>
  );
}

export default App;
