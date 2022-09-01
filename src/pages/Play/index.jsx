import React,{ useEffect, useState, createContext } from 'react'

import './css/index.css'

//js modules import
import { RandomEquation, RandomEquationAnswer } from './Components/RandomNumber.module'
import { AnswerChecker } from './Components/AnswerChecker.module'

//jsx components import
import Message from './Components/Message'
import OperationField from './Components/Input'
import Calculated from './Components/Calculate/Calculated'
import Timer from './Components/timer/timer'
import Leaderboard from './Components/Leaderboard'


export const UserContext = createContext(null)

function Play() {

    //Constructor
    const [equation, setEquation] = useState(null)
    const [ansequation, setAnsequation] = useState(null)
    const [userAnswer, setUserAnswer] = useState(null)

    const HANDLE_SETSTATE1 = (e) =>{
        setUserAnswer(e);
    }

    useEffect(() => {

        if(userAnswer === null || ansequation === null || userAnswer === null){

        } else{
            //operated the answerchecker
            AnswerChecker(userAnswer, ansequation, equation)
        }
    
    }, [equation, userAnswer, ansequation])

    //first time for check
    useEffect(() => {

        const HANDLE_STATE1 = (e) => {
            setEquation(e);
        }

        const HANDLE_STATE2 = (e) => {
            setAnsequation(e);
        }

        RandomEquation({
            setEQ: HANDLE_STATE1
        })

        RandomEquationAnswer({
            setANSEQ: HANDLE_STATE2
        })

    }, [])
    
    return (
        <>
            
                <div class='top-parent'>
                    <div class='main-parent'>
                    <div class='underline'><div class='logo-text'>Faster Than you think</div></div>
                    <div><Timer /></div>
                    </div>
                </div>

                <div class='middle-parent'>

                    <div class='first-card'>

                        <div class='stack'></div>

                        <UserContext.Provider value={{equation, ansequation, userAnswer}}>
                            <Message />
                            <OperationField setUserAnswer={HANDLE_SETSTATE1} />
                            <div><Calculated userAnswer={userAnswer}/></div>
                        </UserContext.Provider>

                    </div>

                    <div class='second-card'>
                        <Leaderboard />
                    </div>
                </div>

        </>
    )
}

export default Play