
import './App.css';
import quiz from "./Questions/questions"
import {useState, useEffect} from "react"

function App() {
  const [quizIndex, setQuizIndex] = useState(0)
  const [msg, setMsg] = useState("")
  const [color, setColor] = useState("black")
  const [count, setcount] = useState(0)
  const [emptyQuiz, setEmptyQuiz] = useState(quiz)

  const correctAnswer = quiz.map((answer) => answer)
useEffect(() => {
  setEmptyQuiz([])
},[])
const quizJavascript = () => {
setEmptyQuiz(quiz)
}
 console.log(emptyQuiz)
  const clickAnswer = (index, choice) => {
    if(quizIndex === quiz.length -1 && choice === correctAnswer[quizIndex].answer && count === 0){
      setMsg(`Amazing! You passed the quiz without any wrong answers!`)
      setColor("green")
      return 
    }
    if(quizIndex === quiz.length -1 && choice === correctAnswer[quizIndex].answer){
      setMsg(`Correct! This was the last question, you guessed wrong (${count}) times!`)
      setColor("green")
      return 
    }
    if (choice === correctAnswer[quizIndex].answer) {
      setColor("green")
      setMsg("Correct!")
      return setQuizIndex(quizIndex+1)
    }else {
      setColor("red")
      setcount(count+1)
      setMsg("Wrong answer, try again!")
      
 
    }
  }
 
  const backBtn = () => {
    const nr = quizIndex -1
    if(quizIndex === 0){
      setMsg("This is the first question")
      setColor("black")
      
      return 
    }
    setQuizIndex(nr)
    setMsg("")
    
  }
  return (
    <div syle={{display: "flex"}} className="App">
      <p style={{padding: "5px", fontSize: "30px", fontWeight:"bold"}}>{emptyQuiz[quizIndex]?.question}
      {" "}
      {emptyQuiz.length === 0 ? null :  <span style={{color: "grey", fontSize: "20px"}}>{quizIndex +1}/{emptyQuiz.length}</span>

      }
     
      </p>
    
    <p>
  {emptyQuiz[quizIndex]?.choices.map((choice, index) => (
    <span style={{padding: "10px", fontSize: "30px", fontWeight:"bold" , backgroundColor: "black", color: "white", margin: "5px", borderRadius: "5px", cursor: "pointer"}}key={index} onClick={() => clickAnswer(index, choice)}>
      {choice}
    </span>
  ))}<br/>
  <span style={{color: `${color}`, display: "block", margin: "10px", fontSize:"24px"}}>{msg}</span><br/>
  { emptyQuiz.length === 0 ? null : <button 
  onClick={backBtn}
  style={{padding: "10px", marginTop: "5px", backgroundColor: "lightBlue",border: "2px solid lightBlue", borderRadius: "10px", color: "white", fontWeight: "bold",cursor: "pointer"}}>Back</button>

  }
</p>
   <button onClick={quizJavascript}>JavaScript</button>
    </div>
  );
}

export default App;
