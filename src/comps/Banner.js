import React from 'react'
import Link from 'next/link'  

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-item">
        <img src="/background.jpg"  />
        <div className="card-content">
            <h1>We are ready to help you through the journey of creating bespoke software. Our
team pride themselves in being great problem solvers who will rise to any
challenge you wish to throw at them and always display a positive ‘can-do’
attitude.</h1>
        </div>
      </div>
       <div className="banner-item">
        <img src="/dev.jpg" />
      </div>
      <div className="banner-item">
       <img src ="/fone.jpg"/>
      </div>
    </section>
  )
}

export default Banner