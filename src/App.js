
import './App.css';
import {javaScriptQuiz, disneyQuiz, gotQuiz, javaQuestions, footballQuestions, tvShowQuestions, friendsQuiz} from "./Questions/questions"
import {useState} from "react"

function App() {
  const [quizIndex, setQuizIndex] = useState(0)
  const [msg, setMsg] = useState("")
  const [color, setColor] = useState("#8B0000")
  const [count, setcount] = useState(0)
  const [emptyQuiz, setEmptyQuiz] = useState([])
  const [backgroundColor, setBackgroundColor] = useState("none")

  const correctAnswer = emptyQuiz.map((answer) => answer)

const quizJavascript = () => {
setEmptyQuiz(javaScriptQuiz)
}
 
  const clickAnswer = (index, choice) => {
   
    
    console.log("answer", correctAnswer[quizIndex].answer)
    if(quizIndex === javaScriptQuiz.length -1 && choice === correctAnswer[quizIndex].answer && count === 0){
      setMsg(`Du klarade utan fel, du är värsta mizeria nörden`)
      setColor("green")
      setBackgroundColor("#80ff80")
      return 
    }
    if(quizIndex === javaScriptQuiz.length -1 && choice === correctAnswer[quizIndex].answer){
      setMsg(`Correct! This was the last question, you guessed wrong (${count}) times!`)
      setColor("green")
      setBackgroundColor("#80ff80")
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
  }
  return (
    <div className="flex bg-blue-400 flex-col items-center w-full h-screen ">
      <p className='font-bold p-6 text-m sm:text-4xl'>{emptyQuiz[quizIndex]?.question}
      {" "}
      {emptyQuiz.length === 0 ? null :  <span className='text-blue-600 text-sm'>{quizIndex +1}/{emptyQuiz.length}</span>

      }
     
      </p>
    
    <p className='flex flex-wrap sm:relative justify-center text-center'>
  {emptyQuiz[quizIndex]?.choices.map((choice, index) => (
    <span className="bg-white text-black border-2 border-black font-bold shadow-lg m-1 p-2 sm:p-4 rounded w-[50%] " key={index} onClick={() => clickAnswer(index, choice)}>
      {choice}
    </span>
  ))}{
    emptyQuiz.length === 0 ? null :
    <span style={{color: `${color}`, backgroundColor: `${backgroundColor}`}}className={` rounded font-bold m-2 p-1 block text-lg text-center sm:text-lg w-[50%]`}>{msg}</span>
  }
 
  { emptyQuiz.length === 0 ? null : 

  <button onClick={backBtn}className='bg-black rounded text-white p-2 w-[100px] font-bold hover:shadow-lg fixed text-2xl left-5 bottom-10 sm:static sm:w-[50%]'>🔙</button>
  

  }
  { emptyQuiz.length === 0 ? null : 

<button onClick={() => homeBtn()}className='bg-black rounded text-white text-2xl p-2 w-[100px] font-bold hover:shadow-lg fixed right-10 bottom-10 sm:static sm:w-[50%] sm:m-4'>🏠</button>


}
</p>
<div className='flex flex-wrap text-center justify-center'  style={{ display: emptyQuiz.length === 0 ? "block" : "none" }}>
  <h1 className='font-bold text-2xl mb-10'>Welcome to the Quiz!</h1>
  <p className='font-bold text-black/50'>Please select a category</p>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center"onClick={(quizJavascript)}>JavaScript</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center"onClick={() => {setEmptyQuiz(disneyQuiz)}}>Disney</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center"onClick={() => {setEmptyQuiz(gotQuiz)}}>Game of Thrones</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center"onClick={() => {setEmptyQuiz(javaQuestions)}}>Java</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center"onClick={() => {setEmptyQuiz(footballQuestions)}}>Football</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center"onClick={() => {setEmptyQuiz(tvShowQuestions)}}>TV-show</button>
  <button className="bg-black rounded text-white cursor-pointer p-2 w-[70%] m-3 text-center justify-center"onClick={() => {setEmptyQuiz(friendsQuiz)}}>Friends</button>






  </div>
   
    </div>
  );
}

export default App;
