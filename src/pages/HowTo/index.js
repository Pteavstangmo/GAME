import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Page from './Components/page/Page'
import Progress from './Components/progessionbar'

import { IconChevronLeft, IconChevronRight } from '@tabler/icons'

import './css/index.css'

function Tutorial() {

  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const Navigate = useNavigate()

  const showBtn = {
    display: "flex"
  }

  const hideBtn = {
    display: "none"
  }

  const limit = 10

  const nextHandler = () => {
    if(page < limit){
      setPage(prev => prev+1)
    }
  }

  const prevHandler = () => {
    if(page !== 1){
      setPage(prev => prev-1)
    }
  }

  useEffect(() => {
    if(page === limit){
      setNext(true)
    }
  }, [page])

  useEffect(() => {
    if(localStorage.getItem('firstTime') === "false"){
      setNext(true)
    }
  }, [])
  

  const playHandler = async() => {
    await localStorage.setItem('firstTime', false);
    Navigate('/Play')
  }
  

  return (
    <>
      <div class='parent'>
        <Page number={page}/>
        <div class='btn-parent'>
          <button class='btn' onClick={prevHandler}><IconChevronLeft size={15}/></button>
          <Progress number={page} limit={limit}/>
          <button class='btn' onClick={nextHandler}><IconChevronRight size={15} /></button>
          <button class='btn play' style={next ? showBtn : hideBtn} onClick={playHandler}>Play!</button>
        </div>
      </div>
    </>
  )
}

export default Tutorial