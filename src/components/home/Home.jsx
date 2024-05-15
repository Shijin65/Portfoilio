import React from 'react'
import Data from './Data'
import "./home.css"
import ScrollDown from './ScrollDown'
import Social from './Social'
import ProfileImg from '../../assets/profile-img.jpg'
const Home = () => {

 

  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid ">
             
                <Social/>
                <div  className=' justify-center items-center'>
                  <img className='rounded-full' width={300} height={300} src={ProfileImg} alt="" />
                
              </div>
                
                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home