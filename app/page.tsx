"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b1020] py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-xl font-bold flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 rounded-full bg-[#0A69DC] flex items-center justify-center text-white">R</div>
          <span className="text-white">raihan.dev</span>
        </motion.a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#0A69DC] transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        <motion.a
          href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-[#0A69DC] hover:bg-[#0a60c8] text-white px-5 py-2 rounded-md font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
        
        <button className="md:hidden text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p 
            className="text-lg font-medium text-[#0A69DC] mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Raihan Islam <span className="text-[#0A69DC]">Miraj</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-2 md:text-lg text-base text-gray-400 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {['Web Developer', 'Programmer', 'Software Engineer'].map((tag, index) => (
              <span key={index} className="bg-[#1E293B] px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0A69DC] hover:bg-[#0a60c8] text-white px-6 py-3 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            
            <motion.a
              href="#contact"
              className="border border-[#0A69DC] text-white hover:bg-[#0A69DC]/10 px-6 py-3 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { name: 'GitHub', url: 'https://github.com/raihanmiraj', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'LinkedIn', url: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { name: 'Twitter', url: '#', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
              { name: 'Facebook', url: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0A69DC] transition-colors"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A69DC] to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-[#0A69DC] to-cyan-500 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-5 md:px-8 bg-[#0b1020]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
          <div className="h-[2px] w-20 bg-[#0A69DC]"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experienced Full Stack Developer with 2.5+ years delivering scalable web applications 
              using Laravel, MERN stack, React, and API integrations. Skilled in developing cargo systems, 
              flight booking APIs, Stripe payment solutions, and eCommerce platforms.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              I develop web, mobile, and desktop applications. My core skillset is based on JavaScript. 
              I'm currently completing my BSc in Computer Science Engineering at Mymensingh Engineering College, Bangladesh.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { label: 'Name:', value: 'Raihan Islam Miraj' },
                { label: 'Email:', value: 'rsnmiraj@gmail.com' },
                { label: 'Phone:', value: '+880 1797-482479' },
                { label: 'Location:', value: 'Mirpur, Dhaka, Bangladesh' }
              ].map((item, index) => (
                <div key={index} className="bg-[#1E293B] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0A69DC] mb-1">{item.label}</h3>
                  <p className="text-white">{item.value}</p>
                </div>
              ))}
            </div>
            
            <motion.a
              href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#0A69DC] hover:bg-[#0a60c8] text-white px-6 py-3 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
          
          <div>
            <div className="bg-[#1E293B] border border-gray-700 rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Education</h3>
              
              <div className="mb-8">
                <h4 className="font-semibold text-[#0A69DC] text-lg">B.Sc. in Computer Science and Engineering</h4>
                <p className="text-gray-300">Mymensingh Engineering College, Bangladesh</p>
                <p className="text-sm text-gray-400 mt-2">2019 - Present (8th Semester Exam Completed; Result Pending)</p>
                <p className="text-sm mt-1">CGPA (1st to 7th Semester Average): 3.65</p>
              </div>
              
              <div className="h-[1px] bg-gray-700 my-6"></div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Exploring new technologies', 'Traveling by bike', 'Playing guitar', 'Singing'].map((hobby, index) => (
                    <span key={index} className="bg-[#0A69DC]/20 text-white px-3 py-1 rounded-full text-sm">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Laravel', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 85 },
    { name: 'Firebase', level: 75 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'TypeScript', level: 70 }
  ];
  
  return (
    <section id="skills" className="py-20 px-5 md:px-8 bg-[#111A28]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
          <div className="h-[2px] w-20 bg-[#0A69DC]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="bg-[#0b1020] p-6 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div 
                  className="bg-[#0A69DC] h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Asian Group Italy",
      period: "Apr 2023 – Jul 2025",
      position: "Software Engineer (Remote)",
      description: [
        "Developed and maintained multi-service platforms, travel agency portals, cargo management systems, and e-commerce solutions using Laravel, MySQL, and React.js",
        "Built large-scale projects including flight booking systems, bus ticketing (FlixBus), mobile recharge & bill payments, and DHL cargo service integrations",
        "Designed and integrated RESTful APIs and implemented third-party integrations such as Amadeus, Flight.io, Zendit, Reloadly, DingConnect, Telecom APIs, DHL APIs, and Stripe",
        "Led the development of cargo pricing automation and scalable service modules",
        "Collaborated with UI/UX teams to create responsive, user-friendly interfaces using Tailwind CSS and React components"
      ]
    },
    {
      company: "Mavin Agency",
      period: "2022 – 2023",
      position: "Frontend Developer",
      description: [
        "Built a custom video conferencing application using JavaScript, Socket.IO, Webpack",
        "Developed a React Native healthcare doctor consultation app with real-time features (CareNexio)"
      ]
    },
    {
      company: "Freelance Projects",
      period: "2020 – Present",
      position: "Full Stack Developer",
      description: [
        "Online voting system plugin for Rupali Bank Ltd.'s AGM voting process using Socket.IO",
        "Astrology Calculator using JavaScript integrated into WordPress",
        "Custom WordPress plugins for automation and content management",
        "School Management System (Laravel + React), Shop Management System (React + PHP + MySQL), and other client-specific tools"
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-20 px-5 md:px-8 bg-[#0b1020]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-[#0A69DC] mx-auto"></div>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-[#1E293B] p-6 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <span className="text-[#0A69DC] font-medium">{exp.period}</span>
              </div>
              <p className="text-gray-400 mb-5">{exp.position}</p>
              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-[#0A69DC] mr-3 mt-1">•</div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Flight Booking System",
      description: "Full-stack flight booking platform with real-time pricing and availability",
      technologies: ["React", "Node.js", "MongoDB", "Amadeus API"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Custom e-commerce solution with Stripe payment integration and admin dashboard",
      technologies: ["Laravel", "MySQL", "React", "Stripe"],
      link: "#"
    },
    {
      title: "Cargo Management System",
      description: "Logistics management platform with DHL integration and automated pricing",
      technologies: ["React", "Express", "MongoDB", "DHL API"],
      link: "#"
    },
    {
      title: "Healthcare Consultation App",
      description: "Mobile application for doctor-patient consultations with real-time features",
      technologies: ["React Native", "Socket.IO", "Firebase"],
      link: "#"
    },
    {
      title: "Online Voting System",
      description: "Secure voting platform for corporate AGM processes",
      technologies: ["JavaScript", "Socket.IO", "PHP", "MySQL"],
      link: "#"
    },
    {
      title: "School Management System",
      description: "Comprehensive solution for school administration and student management",
      technologies: ["Laravel", "React", "MySQL"],
      link: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-20 px-5 md:px-8 bg-[#111A28]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Notable Projects</h2>
          <div className="w-20 h-1 bg-[#0A69DC] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0b1020] rounded-xl overflow-hidden border border-gray-800 hover:border-[#0A69DC] transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-[#0A69DC] to-cyan-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-medium flex items-center"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-[#0A69DC]/20 text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/raihanmiraj"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-[#0A69DC] font-medium hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-20 px-5 md:px-8 bg-[#0b1020]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
          <div className="h-[2px] w-20 bg-[#0A69DC]"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { 
                  icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  title: 'Email',
                  content: 'rsnmiraj@gmail.com',
                  note: '(Recommended)'
                },
                { 
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  title: 'Phone',
                  content: '+880 1797-482479'
                },
                { 
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                  title: 'Location',
                  content: 'Mirpur, Dhaka, Bangladesh'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#0A69DC] p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.content}</p>
                    {item.note && <p className="text-sm text-gray-400">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#1E293B] rounded-xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#0b1020] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0A69DC]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0b1020] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0A69DC]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0b1020] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0A69DC]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0b1020] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0A69DC]"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#0A69DC] hover:bg-[#0a60c8] text-white px-6 py-3 rounded-md font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 px-5 md:px-8 bg-[#0b1020] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">© {new Date().getFullYear()} Raihan Islam Miraj. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            {[
              { name: 'GitHub', url: 'https://github.com/raihanmiraj', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'LinkedIn', url: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { name: 'Twitter', url: '#', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
              { name: 'Facebook', url: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0A69DC] transition-colors"
                aria-label={social.name}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const Portfolio = () => {
  return (
    <main className="bg-[#111A28] text-white min-h-screen">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Portfolio;