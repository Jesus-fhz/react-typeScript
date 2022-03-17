//https://opentdb.com/api.php?amount=10&category=9
import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import './App.css';



function App() {

  const [loading, setLoading] = useState(false); 
  const [questions, setQuestions] = useState([]);

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
      <QuestionCard/>
      <button onClick={nextQuestion}>
        Next:
      </button>
    </div>
  );
}

export default App;
