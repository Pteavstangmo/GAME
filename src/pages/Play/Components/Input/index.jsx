import React, {useState} from 'react'
import './css/index.css'

function OperationField({setUserAnswer}) {

    const [value, setValue] = useState(null)

    function onclickHandler() {
        setUserAnswer(value)
    }

    const resetHandler = () => {
        console.log('resetClick')
    }

    return (
        <div class='parent'>
            <input class='inputfield' type='text' onChange={(e)=>{setValue(e.target.value)}}/>
            <div class='parentbutton'>
                <button class='buttonSubmit' onClick={onclickHandler}>Submit</button>
                <button class='buttonReset' onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default OperationField