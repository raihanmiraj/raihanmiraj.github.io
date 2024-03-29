import React from 'react';

const ProjectCard = ({name, description, image, github, liveurl, language}) => {
    return (
        <>
           <div className='bg-gray-50 rounded-lg dark:bg-gray-800  hover: group cursor-pointer' >
  <div className='filter grayscale group-hover:filter-none aspect-video rounded-md overflow-hidden delay-150 duration-300 ease-in-out '>
    <img className='aspect-video object-cover' src={image} alt="" />
  </div>
  <div className='px-4 py-3 flex-col flex gap-3'>
    <h1 className='text-xl font-semibold'>{name}</h1>
    <p className='text-base line-clamp-2'>{description}</p>
    <div className='flex items-center gap-2'>
   {github &&    <a href={github}><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" className='h-6 w-6 inline fill-white'><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></a>}

   {liveurl &&       <a href={liveurl}><svg
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
</a>}

    </div>
    <div className='text-sm text-light flex gap-2 flex-wrap pb-4'>
        {language.map(e=><span>{e}</span>)}
     </div>
  </div>
</div> 
        </>
    );
}

export default ProjectCard;
