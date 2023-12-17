import { useState } from 'react'
import './global.css'
import Result from './components/result'
import {TypeAnimation} from 'react-type-animation'
import Nav from './components/nav.jsx'
import Fade from 'react-reveal/Fade';
import Textra from 'react-textra'
import Choose from './components/choose.jsx'
import Activity from './components/Activity.jsx'
import Rest from './components/Rest.jsx'

function App() {

  return (
    <>
      <Nav />
      <div className="container">
          
        <div className="head-contain">
          
            <div className="feeling-contain">
            <Textra effect='downTop' data={['💫', '🍕', '🎨', '💖']} />
              <p>I'm feeling </p>
              <p><Textra effect='downTop' data={['lucky', 'hungry', 'creative', 'social']} /></p>
            </div>
          
          
          <div className="text-contain">
            <Fade bottom>
              <h1>When you need a </h1>
            </Fade>
            <Fade bottom delay= {400}>
              <TypeAnimation
                sequence={[
                  'decisive friend',
                  2000, // wait 1s before replacing
                  'restuaunt expert',
                  2000,
                  'ride-or-die',
                  2000
                ]}
                wrapper="span"
                speed={1}
                style={{ 
                  fontSize: '5em', 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: '1000', 
                  display: 'inline-block',
                  margin: '0',
                  background: `-webkit-linear-gradient(45deg, var(--prim), var(--sec))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center'

                }}  
                repeat={Infinity}
              />
            </Fade>
            
          </div>
          <Fade bottom delay = {800}>
            <p>Don't care what you do but still want to be surprised? 
              Select your filtering preferences and get stuff recommended to you.
            </p>
          </Fade>
          
          <Fade bottom delay = {1200}>
            <button className='btn-primary'>
              <div className="icon-contain">
                <svg width="50" height="50" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="style_promptButtonSparkS__aop_k"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C6.15717 4 6.29039 4.11556 6.31262 4.27113C6.41753 5.00548 6.99446 5.58248 7.72887 5.68738C7.88446 5.70961 8 5.84285 8 6C8 6.15715 7.88446 6.29039 7.72887 6.31262C6.99446 6.41752 6.41753 6.99452 6.31262 7.72887C6.29039 7.88444 6.15717 8 6 8C5.84283 8 5.70961 7.88444 5.68738 7.72887C5.58247 6.99452 5.00554 6.41752 4.27113 6.31262C4.11554 6.29039 4 6.15715 4 6C4 5.84285 4.11554 5.70961 4.27113 5.68738C5.00554 5.58248 5.58247 5.00548 5.68738 4.27113C5.70961 4.11556 5.84283 4 6 4Z" fill="currentColor"></path></svg>
              </div>
              Start
            </button>
          </Fade>  
          
        </div>
      
        <div className="main-contain">
          <div className="choose">
            <div className="option">restaurants</div>
            <div className="option">
              <Choose ButtonLabel={activity} />
            </div>
            <div className="option">fun</div>
          </div>
          <Rest />
        </div>
      </div>
      
     
      
    </>
  )
}

export default App
