import QuestionTimer from './QuestionTimer'
import QUESTIONS from './questions'
import Answers from './Answers'
import { useState } from 'react'

export default function Questions({onSelectAnswer,index}) {
   const [answer,setAnswer] =useState({
      selectedAnswer:"",
      isCorrect:null
   })
   let timer = 10000;
   if(answer.selectedAnswer) {
      timer = 1000;
   }
   if(answer.isCorrect !== null) {
      timer = 2000;
   }
   function handleSelectAnswer(answer) {
      setAnswer({
         selectedAnswer:answer,
         isCorrect:null
      })
         setTimeout(()=>{
            setAnswer({
               selectedAnswer:answer,
               isCorrect: QUESTIONS[index].answers[0] === answer
            })
            setTimeout(()=>{
               onSelectAnswer(answer)
            },2000)
         },1000)
   }
   let answerState=""
   if(answer.selectedAnswer && answer.isCorrect!==null) {
      answerState = answer.isCorrect ? "correct" : "wrong"
   }
   else if (answer.selectedAnswer) {
      answerState = 'answered'
   }
   return (
      <div id='quiz'> 
         <div id='question'>
            <QuestionTimer 
               timeOut={timer}
               mode={answerState}
               onTimeOut={answer.selectedAnswer==='' ? onSelectAnswer : null}/>
            <h2>{QUESTIONS[index].text}</h2>
            <Answers 
               answers={QUESTIONS[index].answers}
               selectedAnswer={answer.selectedAnswer}
               answerState={answerState} 
               onSelectAnswer={handleSelectAnswer} />
         </div>
      </div>
   )
}