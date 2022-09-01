import React, { useEffect, useState } from 'react'
import './css/index.css'

function Timer() {

    const [timer, setTimer] = useState(120)

    useEffect(() => {
        const interval = setInterval(() => {
          setTimer(prevState => prevState - 1)
        }, 1000);
        return () => clearInterval(interval);
      }, [])

      const endtimer = new Promise(function(resolve, reject){
        if(timer<=0){
            setTimeout(() => {
                window.location.reload();
            }, 900);
        }
      })

  return (
    <div class='Timer'>Timer left : {timer}</div>
  )

}

export default Timer