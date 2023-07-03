import React from 'react';
import ProjectCard from './ProjectCard';

const MyProject = () => {
  let myProject = [
    {
      name : "Gradienta",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illum aperiam id blanditiis atque saepe!",
      image:"https://i.ibb.co/G2FLgFV/IMG-4649-03-2.jpg",
      liveurl:'',
      github:null,
      language:['php', 'laravel', 'react', 'js']
    },
    {
      name : "Gradienta",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illum aperiam id blanditiis atque saepe!",
      image:"https://i.ibb.co/G2FLgFV/IMG-4649-03-2.jpg",
      liveurl:null,
      github:null,
      language:['php', 'laravel', 'react', 'js']
    },
    {
      name : "Gradienta",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore illum aperiam id blanditiis atque saepe!",
      image:"https://i.ibb.co/G2FLgFV/IMG-4649-03-2.jpg",
      liveurl:null,
      github:null,
      language:['php', 'laravel', 'react', 'js']
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
        </>
    );
}

export default MyProject;
