import React from 'react'
import { evalhandler } from '../AnswerChecker.module';

function Calculated(userAnswer) {
    
    const value_ = evalhandler((Object.values(userAnswer))[0]);

    if(value_ !== null){
        return(
            <div>{value_}</div>
        )
    }

}

export default Calculated