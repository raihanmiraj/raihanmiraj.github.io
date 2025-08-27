"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 0;
        }
        
        @media (max-width: 768px) {
          html {
            scroll-padding-top: 0;
          }
        }
      `}</style>
      
      <header className="md:flex md:flex-row md:justify-between items-center flex flex-col justify-center py-8 px-5 md:px-16 bg-[#111A28] text-white relative z-50">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <span className="text-xl font-semibold text-[#fff] px-3 py-2 rounded-full bg-blue-600">M</span>
          </Link>
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
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
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center justify-between">
          <nav>
            <ul className="flex flex-col md:flex-row items-center gap-5 font-medium cursor-pointer">
              <li className="hover:text-[#0A69DC]">
                <Link href="/#home">Home</Link>
              </li>
              <li className="hover:text-[#0A69DC]">
                <Link href="/#about">About</Link>
              </li>
              <li className="hover:text-[#0A69DC]">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="hover:text-[#0A69DC]">
                <Link href="/#projects">Projects</Link>
              </li>
              <li className="hover:text-[#0A69DC]">
                <Link href="/#blogs">Blogs</Link>
              </li>
              <li className="hover:text-[#0A69DC]">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:block pl-5">
          <a 
            href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
          >
            <button className="md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md border border-[#0A69DC] hover:bg-[#0A69DC] hover:text-white transition-colors duration-300">
              Resume
            </button>
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#111A28] border-t border-gray-700 shadow-lg">
            <nav className="py-4">
              <ul className="flex flex-col items-center gap-4 font-medium">
                <li className="hover:text-[#0A69DC] w-full text-center py-2">
                  <Link href="/#home" onClick={toggleMobileMenu}>Home</Link>
                </li>
                <li className="hover:text-[#0A69DC] w-full text-center py-2">
                  <Link href="/#about" onClick={toggleMobileMenu}>About</Link>
                </li>
                <li className="hover:text-[#0A69DC] w-full text-center py-2">
                  <Link href="/#skills" onClick={toggleMobileMenu}>Skills</Link>
                </li>
                <li className="hover:text-[#0A69DC] w-full text-center py-2">
                  <Link href="/#projects" onClick={toggleMobileMenu}>Projects</Link>
                </li>
                <li className="hover:text-[#0A69DC] w-full text-center py-2">
                  <Link href="/blogs" onClick={toggleMobileMenu}>Blogs</Link>
                </li>
                <li className="hover:text-[#0A69DC] w-full text-center py-2">
                  <Link href="/#contact" onClick={toggleMobileMenu}>Contact</Link>
                </li>
                <li className="w-full text-center py-2">
                  <a 
                    href="https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing" 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={toggleMobileMenu}
                  >
                    <button className="text-sm font-medium px-4 py-2 rounded-md border border-[#0A69DC] hover:bg-[#0A69DC] hover:text-white transition-colors duration-300">
                      Resume
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}