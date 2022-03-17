import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions } from './api'
import './App.css';
import { Difficulty } from './api';

const totalQuestions: number = 10;

function App() {
  console.log( fetchQuestions(totalQuestions, Difficulty.EASY)) ;
  
  const [loading, setLoading] = useState(false); 
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const  startTrivia = async () =>{

  }
                      //Could also be a MouseEvent Type
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
  
  }
  
  const nextQuestion = () => {
  
  }
  return (
    <div className="App">
      <h1> React Ts  </h1>
      <button onClick={startTrivia}>
        Start 
      </button>
      <p>
        Store:
      </p>
      <p>
        Loading
      </p>
      {/* <QuestionCard
        questionNumber={ number + 1 }      
        totalQuestions={  totalQuestions }
        question={ questions[number].question }
        answers={ questions[number].answers }
        userAnswer= { userAnswers ? userAnswers[number] : undefined}
        callback={ checkAnswer }
      /> */}
      <button onClick={nextQuestion}>
        Next:
      </button>
    </div>
  );
}

export default App;
