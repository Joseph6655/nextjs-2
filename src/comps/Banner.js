import React from 'react'
import Link from 'next/link'  

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-item">
        <img src="/background.jpg"  />
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