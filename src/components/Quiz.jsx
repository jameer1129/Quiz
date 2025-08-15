import { useState , useCallback} from 'react'
import QUESTIONS from './questions'
import Question from "./Question"
import Summary from './Summary'

export default function Quiz() {
   const [userAnswers, setUserAnswers] = useState([])
   const activeQuestionIndex = userAnswers.length
   const quizIsComplete = activeQuestionIndex === QUESTIONS.length
   const handleSelectAnswer=useCallback((selectedAnswer) =>{
      setUserAnswers((prevUserAnswers)=>{
          return [...prevUserAnswers,selectedAnswer]
      })
   },[])
   if(quizIsComplete) {
      return (
         <Summary Answer={userAnswers} />
      )
   }
   return (
      <Question
         key={activeQuestionIndex}
         index={activeQuestionIndex}
         selectedAnswer={userAnswers[userAnswers.length-1]}
         onSelectAnswer={handleSelectAnswer}
      />
   )
}