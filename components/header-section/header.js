import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

export default function Header(props) {
  const router = useRouter();
  const isActive = (href) => {
    return router.pathname === href ? 'opacity-100' : 'opacity-70';
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isScrolled = scrollTop > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <nav className={`px-[20px] py-[30px] lg:px-[40px] lg:py-[30px] fixed w-full z-20 top-0 left-0 transition duration-300 ease-in-out-cubic ${scrolled ? "backdrop-blur " : "bg-transparent"}`}>
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <img className="h-8" src="./assets/images/logo.svg" />
        </Link>
        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <div id="menuToggle" className=''>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                <Link href="/" className={`block py-2 pr-4 pl-3 text-[#111111] text-xl rounded ${isActive('/')} 'bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white' : 'lg:bg-transparent lg:text-primary-700 lg:p-0'}`}>Home</Link>
              </li>
              <li>
                <Link href="/resume" className={`block py-2 pr-4 pl-3 text-black text-xl ${isActive('/resume')} 'bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white' : 'lg:p-0'}`}>Resume</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul className="flex flex-col gap-8 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link href="/" className={`${isActive('/')} block py-2 pr-4 pl-3 text-white text-lg rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 lg:text-primary-700 lg:p-0'}`}>Home</Link>
            </li>
            <li>
              <Link href="/resume" className={`${isActive('/resume')} block py-2 pr-4 pl-3 opacity-70 text-white text-lg bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white' 'lg:p-0'}`}>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
