import quizIsCompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from './questions'

export default function Summary({Answer}) {
    const skippedAnswers=Answer.filter((answer)=> answer === null)
    const correctAnswers=Answer.filter((answer,index) =>
        answer === QUESTIONS[index].answers[0]
    )
    const skippedCount= Math.round((skippedAnswers.length/Answer.length)*100)
    const correctCount= Math.round((correctAnswers.length/Answer.length)*100)
    const wrongCount= 100 - skippedCount - correctCount
    return (
        <div id='summary'>
            <img src={quizIsCompleteImg} alt="quizIsCompleteImg" />
            <h2>Quiz Completed</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedCount}%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctCount}%</span>
                    <span className='text'>Answerd correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongCount}%</span>
                    <span className='text'>Answer incorrect</span>
                </p>
            </div>
            <ol>
                {Answer.map((answer,index) => {
                    let cssClass='user-answer'
                    if(answer===null) {
                        cssClass+=" skipped"
                    }
                    else if(answer === QUESTIONS[index].answers[0]) {
                        cssClass+=" correct"
                    }
                    else {
                        cssClass+=" wrong"
                    }
                    return (
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}