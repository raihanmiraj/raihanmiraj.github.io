"use client";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { useState } from "react";

export default function HomePage({ projectsSlot, blogsSlot }: { projectsSlot?: React.ReactNode; blogsSlot?: React.ReactNode }) {
  const [activeSkillCategory, setActiveSkillCategory] = useState('Web');

  // Skills data structure as requested
  const skillsData = {
    Web: [
      { title: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Intermediate" },
      { title: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Intermediate" },
      { title: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: "Intermediate" },
      { title: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: "Intermediate" },
      { title: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: "Intermediate" },
      { title: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: "Intermediate" },
      { title: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: "Advanced" },
      { title: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: "Intermediate" },
      { title: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: "Intermediate" }
    ],
    Tools: [
      { title: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Intermediate" },
      { title: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: "Advanced" },
      { title: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: "Advanced" },
      { title: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: "Intermediate" },
      { title: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", level: "Intermediate" },
      { title: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: "Beginner" }
    ],
    Others: [
      { title: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", level: "Intermediate" },
      { title: "AI Tools", img: "https://cdn-icons-png.flaticon.com/512/8449/8449735.png", level: "Intermediate" },
      { title: "Content Creation", img: "https://cdn-icons-png.flaticon.com/512/2784/2784461.png", level: "Advanced" },
      { title: "SEO", img: "https://cdn-icons-png.flaticon.com/512/3017/3017877.png", level: "Intermediate" },
      { title: "UI/UX Design", img: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png", level: "Intermediate" },
      { title: "Database Design", img: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", level: "Intermediate" }
    ]
  };

  const skillCategories = ['Web', 'Tools', 'Others'];
  return (
    <div id="root">
      <div className="bg-[#111A28] text-white">
        <div id="home" className="relative overflow-hidden">
          <div className="grid md:grid-cols-[38.2%_61.8%] h-[85vh] items-center">
            {/* Left Side - Professional Icon Layout */}
            <div className="relative hidden md:flex items-center justify-center">
              {/* Main Icon Container */}
              <div className="relative w-80 h-80">
                {/* Center Circle */}
                <div className="absolute inset-0 border border-[#64ffda]/20 rounded-full"></div>
                <div className="absolute inset-4 border border-[#64ffda]/10 rounded-full"></div>

                {/* Social Icons positioned at golden ratio points */}
                <div className="absolute top-[23.6%] right-[23.6%] group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center border border-[#64ffda]/30 group-hover:bg-[#64ffda]/20 transition-all duration-300">
                      <a href="https://github.com/itznur07" target="_blank" rel="noreferrer" className="text-[#64ffda] hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-[#64ffda]/60">GitHub</div>
                  </div>
                </div>

                <div className="absolute bottom-[23.6%] right-[38.2%] group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center border border-[#64ffda]/30 group-hover:bg-[#64ffda]/20 transition-all duration-300">
                      <a href="https://www.linkedin.com/in/itznur07" target="_blank" rel="noreferrer" className="text-[#64ffda] hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-[#64ffda]/60">LinkedIn</div>
                  </div>
                </div>

                <div className="absolute top-[38.2%] left-[15%] group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center border border-[#64ffda]/30 group-hover:bg-[#64ffda]/20 transition-all duration-300">
                      <a href="https://youtube.com/@itznur07" target="_blank" rel="noreferrer" className="text-[#64ffda] hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-[#64ffda]/60">YouTube</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-[61.8%] left-[61.8%] w-2 h-2 bg-[#64ffda]/40 rounded-full animate-pulse"></div>
                <div className="absolute top-[15%] left-[45%] w-1 h-1 bg-[#64ffda]/60 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-[15%] left-[25%] w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full animate-pulse delay-1000"></div>
              </div>

              {/* Vertical Line */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-[#64ffda]/50 to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="px-5 md:px-12 lg:px-20">
              <div className="md:text-left text-center">
                <div className="mb-4">
                  <span className="text-[#64ffda] text-lg font-mono">Hi, my name is</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white md:leading-[1.1] leading-[1.2] mb-4">
                  Raihan Miraj
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 md:leading-[1.1] leading-[1.2] mb-6">
                  I build things for the web.
                </h2>
                <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
                  I&apos;m a full-stack developer specializing in building exceptional digital experiences.
                  Currently focused on creating accessible, human-centered products.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                  <Link href="#projects" className="group relative overflow-hidden bg-transparent border-2 border-[#64ffda] text-[#64ffda] px-8 py-4 font-mono text-sm hover:bg-[#64ffda]/10 transition-all duration-300">
                    <span className="relative z-10">Check out my work!</span>
                  </Link>
                  <Link href="#contact" className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300 px-8 py-4 font-mono text-sm border-b border-transparent hover:border-[#64ffda]">
                    Get In Touch →
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div className="md:hidden flex justify-center gap-6 mt-8 px-5">
              <a href="https://github.com/itznur07" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#64ffda]/10 rounded-full flex items-center justify-center border border-[#64ffda]/30 text-[#64ffda] hover:text-white hover:bg-[#64ffda]/20 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/itznur07" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#64ffda]/10 rounded-full flex items-center justify-center border border-[#64ffda]/30 text-[#64ffda] hover:text-white hover:bg-[#64ffda]/20 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://youtube.com/@itznur07" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#64ffda]/10 rounded-full flex items-center justify-center border border-[#64ffda]/30 text-[#64ffda] hover:text-white hover:bg-[#64ffda]/20 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="h-screen flex items-center px-5 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <span className="text-[#64ffda] font-mono text-lg mb-2 block">01.</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent mx-auto"></div>
              </div>
            </div>

            {/* Main Content Grid - Golden Ratio Layout */}
            <div className="grid lg:grid-cols-[61.8%_38.2%] gap-12 items-center h-[calc(90vh-150px)]">
              {/* Text Content - Takes larger portion (golden ratio) */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="relative">
                  {/* Decorative Quote Mark */}
                  <div className="absolute -top-4 -left-4 text-6xl text-[#64ffda]/20 font-serif">&ldquo;</div>

                  <div className="relative z-10 space-y-6">
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                      Hello! I&apos;m <span className="text-[#64ffda] font-semibold">Raihan Miraj</span>, a passionate full-stack developer
                      based in <span className="text-[#64ffda]">Bangladesh</span>. I specialize in creating
                      exceptional digital experiences that combine beautiful design with robust functionality.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                      My journey in web development started with curiosity and has evolved into a
                      passion for building products that make a difference. I believe in writing
                      clean, efficient code and creating user-centered solutions.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                      When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                      open-source projects, or sharing knowledge through my blog and YouTube channel.
                    </p>
                  </div>
                </div>

                {/* Stats/Highlights */}
                <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-700/50">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#64ffda] mb-4">Background</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#64ffda] rounded-full"></div>
                        <span>🎓 Computer Science Student</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#64ffda] rounded-full"></div>
                        <span>💼 Freelance Developer</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#64ffda] rounded-full"></div>
                        <span>🌍 Based in Bangladesh</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#64ffda] mb-4">Interests</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#64ffda] rounded-full"></div>
                        <span>💡 Problem Solving</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#64ffda] rounded-full"></div>
                        <span>🚀 Open Source</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#64ffda] rounded-full"></div>
                        <span>📚 Continuous Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular Image Section - Takes smaller portion (golden ratio) */}
              <div className="relative flex justify-center items-center h-full">
                {/* Main Circular Image Container */}
                <div className="relative w-80 h-80">
                  {/* Outer Decorative Ring */}
                  <div className="absolute inset-0 border-2 border-[#64ffda]/30 rounded-full animate-spin-slow"></div>

                  {/* Middle Ring */}
                  <div className="absolute inset-4 border border-[#64ffda]/20 rounded-full"></div>

                  {/* Inner Image Container */}
                  <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-[#64ffda]/20 to-[#111A28] p-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#111A28]">
                      <Image
                        src="https://i.ibb.co/G2FLgFV/IMG-4649-03-2.jpg"
                        alt="Raihan Miraj - Full Stack Developer"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                        priority
                      />

                      {/* Circular Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111A28]/30 via-transparent to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <div className="absolute top-[15%] right-[15%] w-6 h-6 bg-[#64ffda]/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-[20%] left-[10%] w-4 h-4 bg-[#64ffda]/40 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-[45%] left-[5%] w-3 h-3 bg-[#64ffda]/80 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-[45%] right-[8%] w-3 h-3 bg-[#64ffda]/50 rounded-full animate-pulse delay-700"></div>

                  {/* Code Symbols Around Circular Image */}
                  <div className="absolute top-[10%] left-[20%] text-[#64ffda]/40 font-mono text-lg animate-bounce delay-300">&lt;/&gt;</div>
                  <div className="absolute bottom-[15%] right-[20%] text-[#64ffda]/40 font-mono text-lg animate-bounce delay-700">{'{ }'}</div>
                  <div className="absolute top-[70%] left-[15%] text-[#64ffda]/40 font-mono text-sm animate-bounce delay-1000">( )</div>
                  <div className="absolute top-[25%] right-[15%] text-[#64ffda]/40 font-mono text-sm animate-bounce delay-1300">[  ]</div>

                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-[#64ffda]/10 rounded-full blur-3xl"></div>
                </div>

                {/* Professional Status Badge */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#111A28]/90 backdrop-blur-sm border border-[#64ffda]/30 rounded-full px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse"></div>
                      <span className="text-[#64ffda] font-mono text-xs">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="h-screen py-20 px-5 bg-[#0a1628]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64ffda] mb-12 text-center">Skills & Technologies</h2>

            {/* Skill Categories */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-[#111A28] rounded-lg p-1">
                {skillCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillCategory(category)}
                    className={`px-6 py-2 rounded-md transition-colors ${activeSkillCategory === category
                      ? 'bg-[#64ffda] text-[#111A28]'
                      : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillsData[activeSkillCategory as keyof typeof skillsData].map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#111A28] p-6 rounded-lg text-center hover:bg-[#1a2332] transition-colors group"
                >
                  <div className="w-12 h-12 mx-auto mb-4">
                    <Image
                      src={skill.img}
                      alt={skill.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64ffda] mb-12 text-center">Featured Projects</h2>
            {projectsSlot}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blogs" className="h-screen py-20 px-5 bg-[#0a1628]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64ffda] mb-12 text-center">Latest Blog Posts</h2>
            {blogsSlot}
          </div>
        </section>

        {/* Contact Section - Compact Professional Design */}
        <section id="contact" className="h-screen py-12 px-5 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 bg-[#111A28]"></div>
          <div className="absolute top-10 right-1/3 w-32 h-32 bg-[#64ffda]/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-[#64ffda]/5 rounded-full blur-xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10 h-full flex flex-col">
            {/* Compact Section Header */}
            <div className="text-center mb-8">
              <span className="text-[#64ffda] font-mono text-sm mb-1 block">04.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
              <div className="w-20 h-[1px] bg-[#64ffda]/60 mx-auto mb-4"></div>
              <p className="text-gray-300 max-w-xl mx-auto text-base">
                Let&apos;s discuss your next project or just say hello!
              </p>
            </div>

            {/* Compact Golden Ratio Layout */}
            <div className="flex-1 grid lg:grid-cols-[65%_35%] gap-8 items-start">
              {/* Left Side - Compact Contact Form */}
              <div className="relative">
                <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/40">
                  <ContactForm />
                </div>
              </div>

              {/* Right Side - Compact Contact Info */}
              <div className="space-y-4">
                {/* Contact Methods - Compact */}
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-[#64ffda] mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full"></div>
                    Contact Info
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Email - Compact */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Email</p>
                        <p className="text-white text-sm font-medium">hello@raihanmiraj.dev</p>
                      </div>
                    </div>

                    {/* Location - Compact */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Location</p>
                        <p className="text-white text-sm font-medium">Dhaka, Bangladesh</p>
                      </div>
                    </div>

                    {/* Status - Compact */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-[#64ffda]/10 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Status</p>
                        <p className="text-white text-sm font-medium">Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links - Compact Grid */}
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-[#64ffda] mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full"></div>
                    Connect
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <a href="https://github.com/itznur07" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/40 transition-colors text-sm group">
                      <div className="w-6 h-6 bg-[#64ffda]/10 rounded-md flex items-center justify-center group-hover:bg-[#64ffda]/20">
                        <svg className="w-3 h-3 text-[#64ffda]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-white text-xs">GitHub</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/itznur07" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/40 transition-colors text-sm group">
                      <div className="w-6 h-6 bg-[#64ffda]/10 rounded-md flex items-center justify-center group-hover:bg-[#64ffda]/20">
                        <svg className="w-3 h-3 text-[#64ffda]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-white text-xs">LinkedIn</span>
                    </a>
                    
                    <a href="https://youtube.com/@itznur07" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/40 transition-colors text-sm group">
                      <div className="w-6 h-6 bg-[#64ffda]/10 rounded-md flex items-center justify-center group-hover:bg-[#64ffda]/20">
                        <svg className="w-3 h-3 text-[#64ffda]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-white text-xs">YouTube</span>
                    </a>
                    
                    <a href="mailto:hello@raihanmiraj.dev" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/40 transition-colors text-sm group">
                      <div className="w-6 h-6 bg-[#64ffda]/10 rounded-md flex items-center justify-center group-hover:bg-[#64ffda]/20">
                        <svg className="w-3 h-3 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-white text-xs">Email</span>
                    </a>
                  </div>
                </div>

                {/* Response Promise - Compact */}
                <div className="text-center p-3 bg-[#64ffda]/5 rounded-lg border border-[#64ffda]/20">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full animate-pulse"></div>
                    <span className="text-[#64ffda] font-mono text-xs">Quick Response</span>
                  </div>
                  <p className="text-gray-400 text-xs">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a1628] py-8 px-5 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/itznur07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#64ffda] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/itznur07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#64ffda] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://youtube.com/@itznur07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#64ffda] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Raihan Miraj. All rights reserved.</p>
              <p className="mt-2">Built with Next.js & Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}