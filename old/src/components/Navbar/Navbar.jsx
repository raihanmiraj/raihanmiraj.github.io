import React, { useState } from 'react';
import { getTheme } from '../../utils/getTheme';

const Navbar = () => {
   
 const [showNavbar, setShowNavbar] = useState(false)
  const {darkMode, handleDarkMode} = getTheme()
    return (
        <>
            <header className="md:flex md:flex-row md:justify-between items-center flex flex-col  justify-center    py-8 px-5 md:px-16">
                <div className="flex justify-between items-center w-full">
                    <a href="/">
                        <span className="text-xl font-semibold text-[#fff] px-3 py-2 rounded-full bg-blue-600">
                            M
                        </span>
                    </a>
                    <div onClick={()=>setShowNavbar((prev)=>!prev)} className="md:hidden cursor-pointer">
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
                <div className={`${showNavbar?'':'hidden' }   md:flex md:items-center justify-between`}>
                    <nav>
                        <ul className="flex flex-col md:flex-row items-center  gap-5 font-medium cursor-pointer">
                            <li className=" hover:text-[#0A69DC]">Home</li>
                            <li className=" hover:text-[#0A69DC]"><a href="#aboutme">About</a></li>
                            <li className=" hover:text-[#0A69DC]"><a href="#skills">Skills</a> </li>
                            <li className=" hover:text-[#0A69DC]"><a href="#myhobby">Hobby</a></li>
                            <li className=" hover:text-[#0A69DC]"><a href="#myproject">Project</a></li>
                            <li className=" hover:text-[#0A69DC]"><a href="#mycontact">Contact</a></li>
 
                            <li>

                                <div
                                    role="checkbox"
                                    aria-checked={darkMode ? 'true' : 'false'}
                                    tabIndex={0}
                                    onClick={handleDarkMode}
                                    className={`cursor-pointer w-11 h-5  bg-blue-500 rounded-full relative px-1.5 flex items-center${darkMode ? '' : ' justify-end'
                                        }`}
                                >
                                    <div className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${darkMode ? 'translate-x-6' : 'translate-x-0'
                                        }`} />
                                    {darkMode ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </div>

                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:block pl-5">
                    <a
                        href="https://drive.google.com/file/d/1Z4CkRM9Mj5EsHFYmlMvLMqLnGujFcGgS/view?usp=sharing"
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
        </>
    );
}

export default Navbar;
