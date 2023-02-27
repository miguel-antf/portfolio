import Link from 'next/link';
import { useState } from "react";

export default function Header(props) {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (

        <nav className="px-[20px] py-[30px] lg:px-[40px] lg:py-[30px] fixed w-full z-20 top-0 left-0 backdrop-blur">
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
                            <Link href="/" className='block py-2 pr-4 pl-3 text-[#111111] text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'>Home</Link>
                        </li>
                        <li>
                            <Link href="/resume" className='block py-2 pr-4 pl-3 opacity-70 text-black text-xl lg:p-0'>Resume</Link>
                        </li>
                        </ul>
                    </div>
                </div>
                {/* Desktop */}
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link href="/" className='block py-2 pr-4 pl-3 text-white text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'>Home</Link>
                        </li>
                        <li>
                            <Link href="/resume" className='block py-2 pr-4 pl-3 opacity-70 text-white text-xl lg:p-0'>Resume</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav >

    )
}