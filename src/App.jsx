import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typewriter from "typewriter-effect";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
  <div className="bg-[#111A28] text-white">
    <div>
      <div
        className="progress-bar"
        style={{
          backgroundColor: "rgb(10, 105, 220)",
          transform: "scaleX(0) translateZ(0px)"
        }}
      />
      
 
  <header className="md:flex md:flex-row md:justify-between items-center flex flex-col  justify-center    py-8 px-5 md:px-16">
    <div className="flex justify-between items-center w-full">
      <a href="/">
        <span className="text-xl font-semibold text-[#fff] px-3 py-2 rounded-full bg-blue-600">
         M
        </span>
      </a>
      <div className="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#0A69DC"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
    <div className="hidden md:flex md:items-center justify-between ">
      <nav>
        <ul className="flex flex-col md:flex-row items-center  gap-5 font-medium cursor-pointer">
          <li className=" hover:text-[#0A69DC]">Home</li>
          <li className=" hover:text-[#0A69DC]">About</li>
          <li className=" hover:text-[#0A69DC]">Skills</li>
          <li className=" hover:text-[#0A69DC]">Project</li>
          <li className=" hover:text-[#0A69DC]">Contact</li>
        </ul>
      </nav>
    </div>
    <div className="hidden md:block pl-5">
      <a
        href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  ">
            Resume
          </button>
        </div>
      </a>
    </div>
  </header>
 {/* Banner */}
   
        <div className="md:flex items-center">
         
            <div className="flex items-center flex-col-reverse md:flex-row  md:justify-start h-[85vh] justify-center">
              <div className="md:flex md:flex-col flex flex-col-reverse md:gap-y-20 gap-y-5 md:items-center">
                <div className="flex  items-center md:flex-col gap-3  text-xl cursor-pointer justify-center">
                  <a
                    className="hover:text-[#000]"
                    href="https://github.com/itznur07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                  <a
                    className="hover:text-[#000]"
                    href="https://www.linkedin.com/in/itznur07/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                  <a
                    className="hover:text-[#000]"
                    href="https://twitter.com/itznur07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                  <a
                    className="hover:text-[#000]"
                    href="https://itznur07.medium.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z" />
                    </svg>
                  </a>
                </div>
             
                  <div className="flex items-center  md:-rotate-90 text-md  font-medium mt-12 md:mt-0"
                    style={{ color: "rgb(10, 105, 220)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
                    </svg>
                    <span className="uppercase   border py-0 px-5 rounded-md font-bold">
                      Follow me
                    </span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
                    </svg>
                  </div>
               
              </div>
              <div className="flex flex-col   md:space-y-3   items-center md:items-start">
                <p
                  className="text-xl font-medium"
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  Hello I'm
                </p>
                <p className="md:text-7xl text-5xl font-bold  ">
                {/* <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Raihan Miraj")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Raihan Miraj")
                        .start();
                        
                }}
            /> */}
            Raihan Miraj
                </p>
                <p
                  className="md:text-2xl text-xl font-medium mt-5"
                 
                >
                Full Stack Developer
                </p>
                
                <div className="flex md:flex-row flex-col items-center  gap-2 md:text-xl text-sm text-gray-500 font-medium ">
                <small className="text-md hidden md:inline">•</small>
                 <span> Web Developer</span>
                  <small className="text-md hidden md:inline" >•</small>
                  <span>Programmer</span>
                  <small  className="text-md hidden md:inline">•</small> 
                <span>  Software Engineer</span>
                </div>
                <div className="flex items-center gap-4 mt-5">
                  <a
                    href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <button
                        className="  md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]"
                        style={{ borderColor: "rgb(10, 105, 220)" }}
                      >
                        Get Resume
                      </button>
                    </div>
                  </a>
                  <div>
                    <button
                      className="  md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  border border-[#0A69DC]"
                      style={{ borderColor: "rgb(10, 105, 220)" }}
                    >
                      About me
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-56">
              <img
                src="/static/media/banner-logo.c25648a5600548360f86a91a5a3ca98b.svg"
                alt=""
              />
            </div>
          
        </div>
    {/* about me */}


 

    
      <div className="min-h-screen justify-center items-center md:px-2 mt-12 md:mt-0">
        <div className="md:flex md:flex-row flex flex-col-reverse items-center justify-between h-full gap-5 md:gap-0 md:mt-0">
          <div className="flex flex-col md:pl-24 gap-5 md:basis-[45%] md:ml-16">
            <p className="text-sm md:text-lg text-center md:text-left   leading-loose px-3 md:px-0">
            Hello! I'm Raihan Miraj, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I'm doing BSc in Computer Science Engineering from Mymensingh Engineering College. I am available for any kind of job opportunity that suits my interests.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
            
                <button
                  className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]"
                  style={{ borderColor: "rgb(10, 105, 220)" }}
                >
                  Get resume
                </button>
             
                <button
                  className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]"
                  style={{ borderColor: "rgb(10, 105, 220)" }}
                >
                  My Skills
                </button>
             
            </div>
          </div>
          <div className='w-64 h-64  md:w-64 md:h-72 rounded-xl overflow-hidden mx-12 md:mx-0'>
            <img
              className=""
              src="https://i.ibb.co/G2FLgFV/IMG-4649-03-2.jpg"
              alt="img"
            />
          </div>
       
            <div
              className="flex items-center  md:-rotate-90 text-md  font-medium "
              style={{ color: "rgb(10, 105, 220)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
              <span className="uppercase   border py-0 px-5 rounded-md font-bold">
                About me
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
            </div>
          
        </div>
      </div>

      {/* skills */}
      <div className="px-0">
        <div className=" flex md:flex-row flex-col gap-5 items-center justify-between h-auto">
          
            <div
              className="flex items-center md:-rotate-90 text-md  font-medium md:ml-5 "
              style={{ color: "rgb(10, 105, 220)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
              <span className="uppercase   border py-0 px-5 rounded-md font-bold">
                Skills
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
            </div>
        
          <div className="w-full md:pr-32">
            <div className="flex gap-3 md:gap-6 justify-center md:justify-start flex-wrap">
        
                <button
                  className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]"
                  style={{ borderColor: "rgb(10, 105, 220)" }}
                >
                  Web
                </button>
           
                <button
                  className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  border border-[#0A69DC]"
                  style={{ borderColor: "rgb(10, 105, 220)" }}
                >
                  Other
                </button>
                
                <button
                  className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  border border-[#0A69DC]"
                  style={{ borderColor: "rgb(10, 105, 220)" }}
                >
                  Programming
                </button>
               
                <button
                  className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]"
                  style={{ borderColor: "rgb(10, 105, 220)" }}
                >
                  Tools
                </button>
               
            </div>
            <div className="grid  md:grid-cols-3 mt-5 px-4 md:px-0 gap-2 md:gap-5">
     
              <div className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">
                    Javascript
                  </h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
          
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">React</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">
                    Express.js
                  </h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">MongoDB</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">Firebase</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">Tailwind</h1>
                  <span className="text-sm  font-medium ">
                    Advanced
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 384 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">Figma</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">React</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 6.456v3.072l2.904-.96L20.52 3.36l-2.928-2.136zm2.904 2.112l-1.8 2.496 2.928.936 6.144-1.992-1.128-3.432zM17.832 12l-2.928.936 1.8 2.496 6.144 1.992 1.128-3.432zm-1.128 3.432l-2.904-.96v3.072l3.792 5.232 2.928-2.136zM13.8 17.544L12 15.072l-1.8 2.472V24h3.6zm-3.6 0v-3.072l-2.904.96L3.48 20.64l2.928 2.136zm-2.904-2.112l1.8-2.496L6.168 12 .024 13.992l1.128 3.432zM6.168 12l2.928-.936-1.8-2.496-6.144-1.992-1.128 3.432zm1.128-3.432l2.904.96V6.456L6.408 1.224 3.48 3.36Z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">JWT</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">Git</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">Vercel</h1>
                  <span className="text-sm  font-medium ">
                    Intermediate
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-between rounded   px-5 py-4  border border-opacity-25 hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105 cursor-pointer"
                style={{ borderColor: "rgb(10, 105, 220)" }}
              >
                <div
                  className="text-5xl "
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 480 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                  </svg>
                </div>
                <div className="space-y-3 text-right">
                  <h1 className="text-xl  font-bold">Github</h1>
                  <span className="text-sm  font-medium ">
                    Advanced
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* love to do */}

      <div className="flex min-h-screen  items-center justify-center">
       <div className="md:flex md:flex-row flex flex-col-reverse items-center md:justify-between md:mx-24 md:h-96 h-auto mt-20 md:py-0 py-5 ">
          <div className="md:flex items-center md:gap-x-10 md:space-y-0 space-y-5 md:ml-10 md:mt-0 mt-10">
            <div
              className="md:w-80 w-72 h-48 py-5  rounded md:flex items-center justify-center cursor-pointer hover: group hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105  border  border-opacity-30"
              style={{ borderColor: "rgb(10, 105, 220)" }}
            >
              <div className="flex flex-col items-center gap-y-5">
                <span
                  className="text-7xl"
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                  </svg>
                </span>
                <h1 className="text-2xl  group-hover:text-black font-semibold">
                  Coding
                </h1>
              </div>
            </div>
            <div
              className="md:w-80 w-72 h-48 py-5  rounded md:flex items-center justify-center cursor-pointer hover: group hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105  border  border-opacity-30"
              style={{ borderColor: "rgb(10, 105, 220)" }}
            >
              <div className="flex flex-col items-center gap-y-5">
                <span
                  className="text-7xl"
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 6h18v5h2V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H3V6z" />
                    <path d="M15 12L9 8v8zM22.71 18.43c.03-.29.04-.58.01-.86l1.07-.85c.1-.08.12-.21.06-.32l-1.03-1.79c-.06-.11-.19-.15-.31-.11l-1.28.5a3.44 3.44 0 00-.75-.42l-.2-1.36a.249.249 0 00-.25-.22h-2.07c-.12 0-.23.09-.25.21l-.2 1.36c-.26.11-.51.26-.74.42l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.79c-.06.11-.04.24.06.32l1.07.86c-.03.29-.04.58-.01.86l-1.07.85c-.1.08-.12.21-.06.32l1.03 1.79c.06.11.19.15.31.11l1.27-.5c.23.17.48.31.75.42l.2 1.36c.02.12.12.21.25.21h2.07c.12 0 .23-.09.25-.21l.2-1.36c.26-.11.51-.26.74-.42l1.28.5c.12.05.25 0 .31-.11l1.03-1.79c.06-.11.04-.24-.06-.32l-1.06-.85zM19 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </span>
                <h1 className="text-2xl  group-hover:text-black font-semibold">
                  Content Creation
                </h1>
              </div>
            </div>
            <div
              className="md:w-80 w-72 h-48 py-5  rounded md:flex items-center justify-center cursor-pointer hover: group hover:shadow-lg hover:transform hover:transition hover:duration-500 hover:scale-105  border  border-opacity-30"
              style={{ borderColor: "rgb(10, 105, 220)" }}
            >
              <div className="flex flex-col items-center gap-y-5">
                <span
                  className="text-7xl"
                  style={{ color: "rgb(10, 105, 220)" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z" />
                  </svg>
                </span>
                <h1 className="text-2xl  group-hover:text-black font-semibold">
                  Bloging
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex items-center space-y-2 md:-rotate-90 text-md   "
            style={{ color: "rgb(10, 105, 220)" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
            </svg>
            <span className="uppercase border py-0 px-4 rounded-md font-bold whitespace-nowrap">
              LoveTo Do
            </span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
            </svg>
          </div>
        </div>
      </div>
   

{/* project */}
<div className="px-0 min-h-screen flex items-center">
        <div className=" flex md:flex-row flex-col gap-5 items-center justify-between h-auto mt-20 md:mt-0">
          
            <div
              className="flex items-center md:-rotate-90 text-md  font-medium md:ml-5 "
              style={{ color: "rgb(10, 105, 220)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
              <span className="uppercase   border py-0 px-5 rounded-md font-bold">
                Projects
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
            </div>
        
          <div className="w-full md:pr-32 px-5 md:px-0 ">
           
           <div className='grid md:grid-cols-3 gap-8'>
<div className='rounded-lg bg-gray-800 ' >
  <div className='filter grayscale hover:filter-none aspect-video rounded-md overflow-hidden'>
    <img className='aspect-video object-cover' src="https://i.ibb.co/G2FLgFV/IMG-4649-03-2.jpg" alt="" />
  </div>
  <div className='px-4 py-3 flex-col flex gap-3'>
    <h1 className='text-xl font-semibold'>Gradienta</h1>
    <p className='text-base line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis deleniti non perspiciatis vero molestiae</p>
    <div className='flex items-center gap-2'>
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" className='h-6 w-6 inline fill-white'><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></a>
      <a href="#"><svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth={0}
  viewBox="0 0 512 512"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
</svg>
</a>
    </div>
    <div className='text-sm text-light flex gap-2 flex-wrap pb-4'>
      <span>php</span>
      <span>js </span>
      <span>react</span>
      <span>laravel</span>
    </div>
  </div>
</div>

<div className='rounded-lg bg-gray-800 ' >
  <div className='filter grayscale hover:filter-none aspect-video rounded-md overflow-hidden bg-red-500'>
  {/* object-contain	object-fit: contain;
object-cover	object-fit: cover;
object-fill	object-fit: fill;
object-none	object-fit: none;
object-scale-down */}
    <img className='aspect-video object-cover' src="https://zonayed.me/static/gradienta-a8e5b430898f3170d42032b83fc34b8e.jpg" alt="" />
  </div>
  <div className='px-4 py-3 flex-col flex gap-3'>
    <h1 className='text-xl font-semibold'>Gradienta</h1>
    <p className='text-base line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis deleniti non perspiciatis vero molestiae</p>
    <div className='flex items-center gap-2'>
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" className='h-6 w-6 inline fill-white'><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></a>
      <a href="#"><svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth={0}
  viewBox="0 0 512 512"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
</svg>
</a>
    </div>
    <div className='text-sm text-light flex gap-2 flex-wrap pb-4'>
      <span>php</span>
      <span>js </span>
      <span>react</span>
      <span>laravel</span>
    </div>
  </div>
</div>

<div className='rounded-lg bg-gray-800 ' >
  <div className='filter grayscale hover:filter-none'>
    <img className='rounded-md' src="https://zonayed.me/static/gradienta-a8e5b430898f3170d42032b83fc34b8e.jpg" alt="" />
  </div>
  <div className='px-4 py-3 flex-col flex gap-3'>
    <h1 className='text-xl font-semibold'>Gradienta</h1>
    <p className='text-base line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis deleniti non perspiciatis vero molestiae</p>
    <div className='flex items-center gap-2'>
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" className='h-6 w-6 inline fill-white'><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></a>
      <a href="#"><svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth={0}
  viewBox="0 0 512 512"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
</svg>
</a>
    </div>
    <div className='text-sm text-light flex gap-2 flex-wrap pb-4'>
      <span>php</span>
      <span>js </span>
      <span>react</span>
      <span>laravel</span>
    </div>
  </div>
</div>


           </div>
         
          </div>
        </div>
      </div>





{/* contact  */}
<div className="min-h-screen flex justify-center items-center md:px-2 mt-12 md:mt-0 ">
        <div className="md:flex md:flex-row flex flex-col-reverse items-center justify-between h-full gap-5 md:gap-0 md:mt-0">
        <div className='grid md:grid-cols-2 md:ml-32 gap-12'>
<div className='flex justify-center md:justify-start flex-col gap-5 md:w-[80%] px-5 md:px-0'>
  <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
 <div className='flex md:justify-start justify-center'>
 <button
                        className="  md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]"
                        style={{ borderColor: "rgb(10, 105, 220)" }}
                      >
                      Contact Me
                      </button>
 </div>
</div>

<div className='flex flex-col gap-3 text-center md:text-left'>
  <div>
    <h1 className='text-2xl font-bold'>
    Email
  </h1>
  <p>rsnmiraj@gmail.com
    <span className="text-slate-500"> (Recommended)</span>
  </p>
  </div>
  <div>
    <h1 className='text-2xl font-bold'>
    Skype
  </h1>
  <p>raihanmiraj
    <span className="text-slate-500"> (Recommended)</span>
  </p>
  </div>
  <div>
    <h1 className='text-2xl font-bold'>
   Social
  </h1>
  <p>Twitter - @raihanmiraj
    <span className="text-slate-500"> (Slow response)</span>
  </p>
  </div>
  <div>
    <h1 className='text-2xl font-bold'>
    Address
  </h1>
  <p>
    Kandirpar, Cumilla
  </p>
  </div>
</div>


        </div>
        
       
            <div
              className="flex items-center  md:-rotate-90 text-md  font-medium "
              style={{ color: "rgb(10, 105, 220)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
              <span className="uppercase   border py-0 px-5 rounded-md font-bold">
                Contact
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
              </svg>
            </div>
          
        </div>
      </div>


{/* footer */}

<footer className='bg-gray-700 py-8 flex flex-col md:flex-row justify-center items-center  md:justify-between md:px-[8%]'>
<div className='flex gap-5'>
  <div className='relative inline-block '>
    <div className='px-5 py-2 bg-gray-800'>
    <span className=' '>ধন্যবাদ</span>
    </div>
     <div className=' absolute bg-red-500 h-[2px] bottom-0 w-full'></div>
  </div>

  <div className='relative inline-block '>
    <div className='px-5 py-2 bg-gray-800'>
    <span className=' '>Thanks</span>
    </div>
     <div className='absolute bg-red-500 h-[2px] bottom-0 w-[70%]'></div>
  </div>
  <div className='relative inline-block '>
    <div className='px-5 py-2 bg-gray-800'>
    <span className=' '>ਧੰਨਵਾਦ</span>
    </div>
     <div className='absolute bg-red-500 h-[2px] bottom-0 w-[30%]'></div>
  </div>
</div>

<div>

<div className="flex items-center gap-3">
  <ul className="flex gap-2">
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/zonayedpca/zonayed.me"
      >
        <p className='flex items-center gap-1'>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 576 512"
            className='w-4 h-4 inline'
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg>{" "}
        <span>Star</span>
        </p>
      </a>
    </li>
    <li>
    <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/zonayedpca/zonayed.me"
      >
        <p className='flex items-center gap-1'>
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 384 512"
            className='w-4 h-4 inline'
            xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" />
          </svg> 
          
        <span>Fork</span>
        </p>
      </a>
      
    </li>
  </ul>
  <p className='flex gap-2 items-center'>
  <span>  By Me </span>
    <span className='rounded-lg p-1 bg-gray-800'>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 320 512"
       className='h-4 w-4 inline'
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
      </svg>
    </span>
  </p>
</div>


</div>
</footer>

    
    </div>
  </div>
 

    </>
  )
}

export default App
