import React from 'react';
import ProjectCard from './ProjectCard';

const MyProject = () => {
  


  let myProject = [
    {
      name : "Summer Learning School",
      description:"A structured educational program during the summer that helps students enhance their academic skills and knowledge.",
      image:"https://i.ibb.co/2tPP2mD/Capture.png",
      liveurl:'http://summerlearning.netlify.app/',
      github:null,
      language:['Node', 'express', 'react', 'js', 'mongodb']
    },
    {
      name : "Quiz Web App",
      description:"An interactive online platform that offers quizzes to test knowledge and promote learning in an engaging way.",
      image:"https://i.ibb.co/XY3YH5T/quiz.png",
      liveurl:'https://aloronbd.pages.dev/',
      github:'https://github.com/raihanmiraj/aloronbd',
      language:['php', 'laravel', 'react', 'js', 'mysql']
    },
    {
      name : "Incourse Management System",
      description:"A comprehensive online tool designed to efficiently track, manage, and calculate student marks and progress throughout a course.",
      image:"https://i.ibb.co/XpW7BPP/dashboard.png",
      liveurl:null,
      github:"https://github.com/raihanmiraj/Incourse-Management-System-JavaFx",
      language:['java', 'javafx', 'mysql' ]
    }
  ]
    return (
        <>
          <div id='myproject' className="px-0 min-h-screen flex items-center">
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
    {myProject.map(e=><ProjectCard  name={e.name} description={e.description} image={e.image} github={e.github} liveurl={e.liveurl} language={e.language}/>)}

 

 


           </div>
         
          </div>
        </div>

      
      </div>  
      <div className='flex justify-center'>
        <a href='https://github.com/raihanmiraj' class=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]"  >More Projects</a>
        </div>
        </>
    );
}

export default MyProject;
