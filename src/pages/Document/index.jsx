import React from 'react'
import './css/index.css'

import { IconExternalLink } from '@tabler/icons';
import { Link } from 'react-router-dom';

import { ReactComponent as Githubicons } from '../../assets/iconmonstr-github-1.svg'
import { ReactComponent as Logoicons } from '../../assets/Asset 1.svg'

function Document() {
  return (
    <>
      <section class='Header'>
        <h3 class='logo'><Link class='flex-center' to={'/'}><Logoicons/></Link><Link to={'/'} class='text-dec-none flex-center'><strong>Faster Than You Think </strong></Link></h3>
        <section class='flex-center Navflex'>
          <h3 class='Navtext'>Play</h3>
          <h3 class='Navtext'><strong>Document</strong></h3>
        </section>
        <h3 class='utility'>
          <section class='feedback' ><IconExternalLink size={28}/>Feedback</section>
          <a class='feedback' href="https://github.com/Bermlnwza/Faster-than-you-think"><Githubicons/>Github</a>
        </h3>
      </section>
      <div class='app'>

        <h2>Welcome to, Faster than you think <mark>!</mark></h2>
        <br></br>
        <br></br>

        <section>
          <p>image</p>
          <p>let learn what is fast math!</p>
        </section>

        <section>
          <p>fast math is popular game in thailand by giving a four number and 2 digit number</p>
          <p>image</p>
        </section>
        
        <section>
          <p>you goal is try to solve by using <mark>every possible operator in pre-algebra</mark></p>
          <p>image</p>
        </section>

      </div>
    </>
  )
}

export default Document