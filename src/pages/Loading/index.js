import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Async from './Components/Async';

function Loadings({ fx }) {

    const Navigate = useNavigate()
    
    //check if it's first time or not

    const F1Checker = async() => {
        const F1 = await localStorage.getItem('firstTime');
        if(F1 === null){
            console.log('F1 not found')
            Navigate('/tutorial')
        }else{
            Navigate('/Play')
        }
    }

    useEffect(() => {
        F1Checker()
    }, [])

    return(
        <Async />
    )

}

export default Loadings