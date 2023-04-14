
import './App.css';
import quiz from "./Questions/questions"
import {useState} from "react"

function App() {
  const [quizIndex, setQuizIndex] = useState(0)
  const [msg, setMsg] = useState("")
  const [color, setColor] = useState("black")
  const [count, setcount] = useState(0)

  const correctAnswer = quiz.map((answer) => answer)
  

  const clickAnswer = (index, choice) => {
    if(quizIndex === quiz.length -1 && choice === correctAnswer[quizIndex].answer && count === 0){
      setMsg(`Correct! This was the last question, you are a master at this!`)
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
    
  }
  return (
    <div className="App">
      <p style={{padding: "5px", fontSize: "30px", fontWeight:"bold"}}>{quiz[quizIndex].question}
      {" "}<span style={{color: "grey", fontSize: "20px"}}>{quizIndex +1}/{quiz.length}</span>
      </p>
    
    <p>
  {quiz[quizIndex].choices.map((choice, index) => (
    <span style={{padding: "10px", fontSize: "30px", fontWeight:"bold" , backgroundColor: "black", color: "white", margin: "5px", borderRadius: "5px"}}key={index} onClick={() => clickAnswer(index, choice)}>
      {choice}
    </span>
  ))}<br/>
  <span style={{color: `${color}`, display: "block", margin: "10px", fontSize:"24px"}}>{msg}</span><br/>
  <button 
  onClick={backBtn}
  style={{padding: "10px", marginTop: "5px"}}>Back</button>
</p>
   
    </div>
  );
}

export default App;
