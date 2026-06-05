'use client'
import {useEffect} from 'react'

function Preloader() {
  useEffect(()=>{
    window.setTimeout(fadeout, 500);
    
    function fadeout() {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        (preloader as HTMLElement).style.opacity = '0';
        (preloader as HTMLElement).style.display = 'none';
      }
    }
  },[])
  return (
    <div>
        <div id="preloader" className="preloader">
            <div className="iddrak-load"></div>
        </div>
    </div>
  )
}

export default Preloader