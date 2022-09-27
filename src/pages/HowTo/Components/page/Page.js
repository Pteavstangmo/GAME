import React, { useState, useEffect } from 'react'
import '../page/css/index.css'

function Page({number}) {

    const page = number

    const [url, setUrl] = useState(require('../../../../assets/tutorial/1.png'))

    useEffect(() => {

        switch(page){
            case 1:
                setUrl('https://i.ibb.co/VwyYP49/Thinking-of-getting-a-cat.png')
                console.log('page 1 update')
                break
            case 2:
                setUrl(require('../../../../assets/tutorial/2.jpg'))
                console.log('page 2 update')
                break
            default: setUrl('https://i.ibb.co/VwyYP49/Thinking-of-getting-a-cat.png')
        }

    }, [page])

    //400*600

  return (
    <>
        <div className='main-parent'>
            <img src={url} alt={page}></img>
        </div>
    </>
  )
}

export default Page