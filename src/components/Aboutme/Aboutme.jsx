import React from 'react';

const Aboutme = () => {
    return (
        <>
            <div id='aboutme' className="min-h-screen flex justify-center items-center md:px-2 mt-12 md:mt-0">
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
        </>
    );
}

export default Aboutme;
