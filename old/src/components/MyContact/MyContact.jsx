import React from 'react';

const MyContact = () => {
    return (
        <>
            <div id='mycontact' className="min-h-screen flex justify-center items-center md:px-2 mt-12 md:mt-0 ">
        <div className="md:flex md:flex-row flex flex-col-reverse items-center justify-between h-full gap-5 md:gap-0 md:mt-0">
        <div className='grid md:grid-cols-2 md:ml-32 gap-12'>
<div className='flex justify-center md:justify-start flex-col gap-5 md:w-[80%] px-5 md:px-0'>
  <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
 <div className='flex md:justify-start justify-center'>
 <a
                 href='mailto:rsnmiraj@gmail.com'       className="  md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]"
                     
                      >
                      Contact Me
                      </a>
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
        </>
    );
}

export default MyContact;
