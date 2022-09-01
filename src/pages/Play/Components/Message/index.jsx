import React, { useContext } from 'react'
import { UserContext } from '../..'
import './css/index.css'

export default function Message(props) {

    const { equation, ansequation } = useContext(UserContext)

  return (
    <div class='parent'>
        {equation}
        <div>{ansequation}</div>
    </div>
  )
}
