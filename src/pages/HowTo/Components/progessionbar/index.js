import './css/index.css'

function Progress({number}) {
    
    const page = number

    const dotAdd = {
      backgroundColor: "#FDB90E",
      borderRadius: "10px",
      width:"30px",
    }

  return (
    <div class='dot-parent'>
      <span class='dot' style={(page === 1) ? dotAdd : null}/>
      <span class='dot' style={(page === 2) ? dotAdd : null}/>
      <span class='dot' style={(page === 3) ? dotAdd : null}/>
      <span class='dot' style={(page === 4) ? dotAdd : null}/>
      <span class='dot' style={(page === 5) ? dotAdd : null}/>
      <span class='dot' style={(page === 6) ? dotAdd : null}/>
      <span class='dot' style={(page === 7) ? dotAdd : null}/>
      <span class='dot' style={(page === 8) ? dotAdd : null}/>
      <span class='dot' style={(page === 9) ? dotAdd : null}/>
      <span class='dot' style={(page === 10) ? dotAdd : null}/>
    </div>
  )
}

export default Progress