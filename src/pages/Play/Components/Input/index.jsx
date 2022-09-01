import React, {useState} from 'react'
import './css/index.css'

function OperationField({setUserAnswer}) {

    const [value, setValue] = useState(null)

    function onclickHandler() {
        setUserAnswer(value)
    }

    const resetHandler = () => {
        window.location.reload()
    }

    return (
        <div class='parent'>
            <input class='inputfield' type='text' onChange={(e)=>{setValue(e.target.value)}}/>
            <div class='parentbutton'>
                <button class='buttonSubmit' onClick={onclickHandler}>Submit your equation!</button><br/>
                <button class='buttonReset' onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default OperationField