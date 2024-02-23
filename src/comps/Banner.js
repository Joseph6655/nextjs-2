import React from 'react'
import Link from 'next/link'  

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-item">
        <img src="/background.jpg"  />
        <div className="card-content">
            <h2>We are ready to help you through the journey of creating bespoke software. Our
                team pride themselves in being great problem solvers who will rise to any
                challenge you wish to throw at them and always display a positive ‘can-do’
                attitude.
            </h2>
        </div>
      </div>
       <div className="banner-item">
        <img src="/dev.jpg" />
        <div className="card-content">
            <h2>The software developer's roles and responsibilities include creating and constructing computer programs that run desktop computers, mobile gadgets, and even automobiles.
            </h2>
        </div>
      </div>
      <div className="banner-item">
       <img src ="/fone.jpg"/>
       <div className="card-content">
            <h2>Software developers are the creative, brainstorming masterminds behind computer programs of all sorts.
            </h2>
        </div>
      </div>
    </section>
  )
}

export default Banner