import React, { useContext } from 'react'
import { UserContext } from '../..'
import './css/index.css'

export default function Message(props) {

    const { equation, ansequation } = useContext(UserContext)

  return (
    <div class='parent-output'>
        <div class='eq'>{equation}</div>
        <div class='ans'>{ansequation}</div>
    </div>
  )
}
