'use client'
import { useState, useEffect } from "react"
import Navigation from "../nav/Navigation"
import { usePathname} from "next/navigation";

import "./header.css" 
export default function Headers(props){
    const[isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [screenSize, setScreenSize] = useState('');
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width >= 768 && width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
  
    useEffect(() => {
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const pathname = usePathname()

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsSticky(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      toggleMenu()
    }

    return <>
        <div className="bg-white shadow-md transition-all z-50">
          <header className={`main-header inset-x-0 top-0 z-50 bg-white ${isSticky ? ' fixed animated fadeIn top-0 border': ''}`}>
              <nav className="flex item-center justify-between items-center p-6 bg-white lg:px-12 relative">
                 <a href="/" className={`text-sm text-grey-500 uppercase font-bold`}>
                    <span>BMR Recruitment Ltd</span>
                 </a>
                 <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg
                        className={`icon ${isOpen ? 'open' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        style={{ stroke: '#000000' }}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                        ></path>
                      </svg>
                    </button>
                </div>
              
                  <Navigation sticky={isSticky} screenSize={screenSize} isOpen={isOpen} onClick={closeMenu}/>

              </nav>
          </header>
        </div>
    </>
}