
import './App.css';
import {javaScriptQuiz, disneyQuiz, gotQuiz, javaQuestions, footballQuestions, tvShowQuestions, friendsQuiz} from "./Questions/questions"
import {useEffect, useState} from "react"

function App() {
  const [quizIndex, setQuizIndex] = useState(0)
  const [msg, setMsg] = useState("")
  const [color, setColor] = useState("#8B0000")
  const [count, setcount] = useState(0)
  const [emptyQuiz, setEmptyQuiz] = useState([])
  const [backgroundColor, setBackgroundColor] = useState("none")
  const [header, setHeader] = useState("")
  const correctAnswer = emptyQuiz.map((answer) => answer)


 useEffect(() => {
   if(emptyQuiz === javaScriptQuiz) {
   setHeader("Javascript Quiz")
   }
   if(emptyQuiz === disneyQuiz) {
    setHeader("Disney Quiz")
    }
    if(emptyQuiz === gotQuiz) {
      setHeader("Game of Thrones Quiz")
      }
      if(emptyQuiz === javaQuestions) {
        setHeader("Java Quiz")
        }
        if(emptyQuiz === footballQuestions) {
          setHeader("Football Quiz")
          }
          if(emptyQuiz === tvShowQuestions) {
            setHeader("TV-shows Quiz")
            }
            if(emptyQuiz === friendsQuiz) {
              setHeader("Friends Quiz")
              }
 },[emptyQuiz])
  const clickAnswer = (index, choice) => {
   
    
    
    if(quizIndex === emptyQuiz.length -1 && choice === correctAnswer[quizIndex].answer && count === 0){
      setMsg(`Congratulations! You passed the quiz without any wrong answers!`)
      setColor("green")
      setBackgroundColor("#80ff80")
      return 
    }
    if(quizIndex === emptyQuiz.length -1 && choice === correctAnswer[quizIndex].answer){
      setMsg(`Correct! This was the last question, you guessed wrong (${count}) times!`)
      setColor("green")
      setBackgroundColor("#80ff80")
      return 
    }
    if(choice !== correctAnswer[quizIndex].answer && color === "red"){
      setMsg("Oops! Wrong again!")
      return
    }

    if (choice === correctAnswer[quizIndex].answer) {
      setColor("green")
      setBackgroundColor("#80ff80")
      setMsg("Nice! Correct answer!")
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
    setcount(0)
    setMsg("")
    setBackgroundColor("transparent")
    setQuizIndex(0)
    setColor("#8B0000")
  }
  return (
    <div className="flex bg-blue-400 flex-col items-center w-full h-screen ">
       {emptyQuiz.length === 0 ? null :  <h1 className='bg-black font-bold text-2xl w-full text-center text-white m-2 shadow-lg p-5'>{header} {quizIndex +1}/{emptyQuiz.length}</h1>

}
      <p className='font-bold p-6 text-m sm:text-4xl'>{emptyQuiz[quizIndex]?.question}
      {" "}
    
     
      </p>
    
    <p className='flex flex-wrap sm:relative justify-center text-center min-w-[50%]'>
  {emptyQuiz[quizIndex]?.choices.map((choice, index) => (
    <span className="bg-white cursor-pointer text-black border-2 border-black font-bold shadow-lg m-1 p-2 sm:p-4 rounded w-[50%] " key={index} onClick={() => clickAnswer(index, choice)}>
      {choice}
    </span>
  ))}{
    emptyQuiz.length === 0 ? null :
    <span style={{color: `${color}`, backgroundColor: `${backgroundColor}`}}className={` rounded font-bold m-2 p-1 block text-lg text-center sm:text-lg w-[50%]`}>{msg}</span>
  }
 
  { emptyQuiz.length === 0 ? null : 

  <button onClick={backBtn}className='bg-black rounded text-white p-2 w-[30%] h-[5%] hover:shadow-lg absolute text-xl left-5 bottom-20 sm:static sm:w-[50%]'>Back</button>
  

  }
  { emptyQuiz.length === 0 ? null : 

<button onClick={() => homeBtn()}className='bg-black rounded text-white text-2xl p-2 w-[30%] h-[5%] font-bold hover:shadow-lg absolute right-10 bottom-20 sm:static sm:w-[50%] sm:m-4'>🏠</button>


}
</p>
<div className='flex flex-wrap text-center justify-center'  style={{ display: emptyQuiz.length === 0 ? "block" : "none" }}>
  <h1 className='font-bold text-2xl mb-10'>Welcome to the Quiz!</h1>
  <p className='font-bold text-black/50'>Please select a category</p>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(javaScriptQuiz)}}>JavaScript</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(disneyQuiz)}}>Disney</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(gotQuiz)}}>Game of Thrones</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(javaQuestions)}}>Java</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(footballQuestions)}}>Football</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(tvShowQuestions)}}>TV-shows</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center font-bold text-xl"onClick={() => {setEmptyQuiz(friendsQuiz)}}>Friends</button>






  </div>
   
    </div>
  );
}

export default App;
