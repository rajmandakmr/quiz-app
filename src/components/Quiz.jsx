import { useCallback, useState, useRef } from "react"
import QUESTIONS from '../Questions'
import Questions from "./Questions"
import Summary from "./Summary"

export default function Quiz(){
    const [userAnswers,setUserAnswers] = useState([])

    const activeQuestionIndex =userAnswers.length
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer,selectedAnswer]
        })
    },[])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            <Questions 
            key={activeQuestionIndex} 
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkip={handleSkipAnswer}/>
    </div>)
}