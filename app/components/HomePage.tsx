"use client";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function HomePage({ projectsSlot, blogsSlot }: { projectsSlot?: React.ReactNode; blogsSlot?: React.ReactNode }) {
  return (
    <div id="root">
      <div className="bg-[#111A28] text-white">
        <div>
          <div className="progress-bar" style={{ backgroundColor: "#0A69DC", transform: "scaleX(0) translateZ(0)" }} />
          <header className="md:flex md:flex-row md:justify-between items-center flex flex-col  justify-center    py-8 px-5 md:px-16">
            <div className="flex justify-between items-center w-full">
              <Link href="/"><span className="text-xl font-semibold text-[#fff] px-3 py-2 rounded-full bg-blue-600">M</span></Link>
              <div className="md:hidden cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0A69DC"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
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
              <a href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing" target="_blank" rel="noreferrer">
                <div><button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  ">Resume</button></div>
              </a>
            </div>
          </header>

          <div className="md:flex items-center">
            <div className="flex items-center flex-col-reverse md:flex-row  md:justify-start h-[85vh] justify-center">
              <div className="md:flex md:flex-col flex flex-col-reverse md:gap-y-20 gap-y-5 md:items-center">
                <div className="flex  items-center md:flex-col gap-3  text-xl cursor-pointer justify-center">
                  <a className="hover:text-[#000]" href="https://github.com/itznur07" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
                  <a className="hover:text-[#000]" href="https://www.linkedin.com/in/itznur07/" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                  <a className="hover:text-[#000]" href="https://twitter.com/itznur07" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a>
                  <a className="hover:text-[#000]" href="https://itznur07.medium.com/" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-65.1V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z" /></svg></a>
                </div>
                <div className="flex items-center  md:-rotate-90 text-md  font-medium mt-12 md:mt-0" style={{ color: "#0A69DC" }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
                  <span className="uppercase   border py-0 px-5 rounded-md font-bold">Follow me</span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
                </div>
              </div>
              <div className="flex flex-col   md:space-y-3   items-center md:items-start">
                <p className="text-xl font-medium" style={{ color: "#0A69DC" }}>Hello I'm</p>
                <p className="md:text-7xl text-5xl font-bold  ">Raihan Miraj</p>
                <p className="md:text-2xl text-xl font-medium mt-5">Full Stack Developer</p>
                <div className="flex md:flex-row flex-col items-center  gap-2 md:text-xl text-sm text-gray-500 font-medium "><small className="text-md hidden md:inline">•</small><span> Web Developer</span><small className="text-md hidden md:inline">•</small><span>Programmer</span><small className="text-md hidden md:inline">•</small><span> Software Engineer</span></div>
                <div className="flex items-center gap-4 mt-5">
                  <a href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing" target="_blank" rel="noreferrer"><div><button className="  md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>Get Resume</button></div></a>
                  <div><button className="  md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>About me</button></div>
                </div>
              </div>
            </div>
            <div className="ml-56"><Image src="/next.svg" alt="banner" width={300} height={300} className="opacity-60" /></div>
          </div>

          {/* About */}
          <div className="min-h-screen justify-center items-center md:px-2 mt-12 md:mt-0">
            <div className="md:flex md:flex-row flex flex-col-reverse items-center justify-between h-full gap-5 md:gap-0 md:mt-0">
              <div className="flex flex-col md:pl-24 gap-5 md:basis-[45%] md:ml-16">
                <p className="text-sm md:text-lg text-center md:text-left   leading-loose px-3 md:px-0">Hello! I'm Raihan Miraj, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I'm doing BSc in Computer Science Engineering from Mymensingh Engineering College. I am available for any kind of job opportunity that suits my interests.</p>
                <div className="flex gap-4 justify-center md:justify-start"><button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>Get resume</button><button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>My Skills</button></div>
              </div>
              <div className="w-64 h-64  md:w-64 md:h-72 rounded-xl overflow-hidden mx-12 md:mx-0"><Image className="object-cover" src="https://i.ibb.co/G2FLgFV/IMG-4649-03-2.jpg" alt="img" width={256} height={288} /></div>
              <div className="flex items-center  md:-rotate-90 text-md  font-medium " style={{ color: "#0A69DC" }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
                <span className="uppercase   border py-0 px-5 rounded-md font-bold">About me</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
              </div>
            </div>
          </div>

          {/* Skills header and filter buttons (cards can be data-driven later) */
          }
          <div className="px-0">
            <div className=" flex md:flex-row flex-col gap-5 items-center justify-between h-auto">
              <div className="flex items-center md:-rotate-90 text-md  font-medium md:ml-5 " style={{ color: "#0A69DC" }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
                <span className="uppercase   border py-0 px-5 rounded-md font-bold">Skills</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
              </div>
              <div className="w-full md:pr-32">
                <div className="flex gap-3 md:gap-6 justify-center md:justify-start flex-wrap">
                  <button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>Web</button>
                  <button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>Other</button>
                  <button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]  border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>Programming</button>
                  <button className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC]" style={{ borderColor: "#0A69DC" }}>Tools</button>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="px-0 min-h-screen flex items-center">
            <div className=" flex md:flex-row flex-col gap-5 items-center justify-between h-auto mt-20 md:mt-0">
              <div className="flex items-center md:-rotate-90 text-md  font-medium md:ml-5 " style={{ color: "#0A69DC" }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
                <span className="uppercase   border py-0 px-5 rounded-md font-bold">Projects</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
              </div>
              <div className="w-full md:pr-32 px-5 md:px-0 ">
                {projectsSlot}
              </div>
            </div>
          </div>

          {/* Blog Preview */}
          <div className="px-5 md:px-16 py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Blogs</h2>
            {blogsSlot}
          </div>

          {/* Contact */}
          <div className="min-h-screen flex justify-center items-center md:px-2 mt-12 md:mt-0 ">
            <div className="md:flex md:flex-row flex flex-col-reverse items-center justify-between h-full gap-5 md:gap-0 md:mt-0">
              <div className="grid md:grid-cols-2 md:ml-32 gap-12">
                <div className="flex justify-center md:justify-start flex-col gap-5 md:w-[80%] px-5 md:px-0">
                  <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                  <ContactForm />
                </div>
                <div className="flex flex-col gap-3 text-center md:text-left">
                  <div>
                    <h1 className="text-2xl font-bold">Email</h1>
                    <p>rsnmiraj@gmail.com<span className="text-slate-500"> (Recommended)</span></p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Skype</h1>
                    <p>raihanmiraj<span className="text-slate-500"> (Recommended)</span></p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Social</h1>
                    <p>Twitter - @raihanmiraj<span className="text-slate-500"> (Slow response)</span></p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Address</h1>
                    <p>Kandirpar, Cumilla</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  md:-rotate-90 text-md  font-medium " style={{ color: "#0A69DC" }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
                <span className="uppercase   border py-0 px-5 rounded-md font-bold">Contact</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" /></svg>
              </div>
            </div>
          </div>

          <footer className="bg-gray-700 py-8 flex flex-col md:flex-row justify-center items-center  md:justify-between md:px-[8%]">
            <div className="flex gap-5">
              <div className="relative inline-block "><div className="px-5 py-2 bg-gray-800"><span>ধন্যবাদ</span></div><div className=" absolute bg-red-500 h-[2px] bottom-0 w-full" /></div>
              <div className="relative inline-block "><div className="px-5 py-2 bg-gray-800"><span>Thanks</span></div><div className="absolute bg-red-500 h-[2px] bottom-0 w-[70%]" /></div>
              <div className="relative inline-block "><div className="px-5 py-2 bg-gray-800"><span>ਧੰਨਵਾਦ</span></div><div className="absolute bg-red-500 h-[2px] bottom-0 w-[30%]" /></div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <ul className="flex gap-2">
                  <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/zonayedpca/zonayed.me"><p className="flex items-center gap-1"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg> <span>Star</span></p></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/zonayedpca/zonayed.me"><p className="flex items-center gap-1"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg"><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" /></svg><span>Fork</span></p></a></li>
                </ul>
                <p className="flex gap-2 items-center"><span> By Me </span><span className="rounded-lg p-1 bg-gray-800"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" /></svg></span></p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}


