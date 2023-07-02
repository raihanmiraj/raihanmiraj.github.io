import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typewriter from "typewriter-effect";
import { getTheme } from './utils/getTheme';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Aboutme from './components/Aboutme/Aboutme';
import Skills from './components/Skills/Skills';
import MyHobby from './components/MyHobby/MyHobby';
import MyProject from './components/MyProject/MyProject';
import MyContact from './components/MyContact/MyContact';
import Footer from './components/Footer/Footer';
function App() {
  const [count, setCount] = useState(0)
  const {darkMode} = getTheme()
 

  return (
    <>
  <div className={`${darkMode?'dark':'light'}`}>
  <div className={` dark:text-white dark:bg-[#111A28]  `}>
    <div>
      <div
        className="progress-bar"
        style={{
          backgroundColor: "rgb(10, 105, 220)",
          transform: "scaleX(0) translateZ(0px)"
        }}
      />
      
 <Navbar/>

 {/* Banner */}
   
     <Banner/>
    {/* about me */}


 

    
     <Aboutme/>

      {/* skills */}
    <Skills/>

{/* love to do */}

      <MyHobby/>
   

{/* project */}
<MyProject/>





{/* contact  */}
<MyContact/>


{/* footer */}

<Footer/>

    
    </div>
  </div>
 
  </div>
    </>
  )
}

export default App
