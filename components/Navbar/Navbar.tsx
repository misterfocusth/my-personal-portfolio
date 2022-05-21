import React, { useState } from 'react';
import Image from 'next/image';

// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  function showPDF() {
    window.open('files/portfolio.pdf');
  }

  function toggleMenu() {
    setToggled(!toggled);
  }

  return (
    <nav className="h-18 fixed top-0 z-50 flex w-full justify-center border-gray-200 bg-slate-900 px-4 py-2.5 sm:h-20 sm:px-14">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center justify-center gap-2">
          <Image
            width="45"
            height="45"
            src="/images/memoji/S__2506754.jpg"
            alt="icon"
            className="h-6 w-6 self-center rounded-full sm:h-9 sm:w-9"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white sm:text-2xl">
            misterfocusth
          </span>
        </a>
        <div
          className="hidden w-full items-center justify-between md:flex md:w-auto"
          id="mobile-menu-4"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li className="hidden lg:inline-block">
              <a
                href="#aboutme"
                className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
              >
                Education / Awards
              </a>
            </li>
            <li className="hidden lg:inline-block">
              <a
                href="#skills"
                className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
              >
                Tech Stacks
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#activities"
                className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
              >
                Activities
              </a>
            </li>
            <li>
              <a
                href="#certification"
                className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
              >
                Certifications
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button
            aria-label="download-cv"
            type="button"
            className="mr-3 hidden rounded-lg bg-[#FF5733] px-4 py-1.5 text-center text-sm font-semibold text-white hover:bg-[#FF5733] sm:px-5 sm:py-2.5 md:mr-0 md:inline-block"
            onClick={showPDF}
          >
            Download CV
          </button>
          <button
            aria-label="mobile-menu"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-white md:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              className="mt-1 ml-1"
              icon={faBars}
              width="16"
              height="16"
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={
          toggled
            ? 'fixed top-14 flex w-full rounded-b-lg bg-slate-900 pb-6 sm:top-20'
            : 'fixed top-14 hidden w-full rounded-b-lg bg-slate-900 pb-6 sm:top-20'
        }
      >
        <ul
          className="ml-4 flex flex-col gap-4 focus:bg-white"
          onClick={toggleMenu}
        >
          <li>
            <a
              href="#"
              className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
            >
              Education / Awards
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
            >
              Tech Stacks
            </a>
          </li>
          <li>
            <a
              href="#expertise"
              className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href="#certification"
              className="block rounded py-2 pr-4 pl-3 text-base text-gray-400 hover:text-sky-700 md:p-0"
            >
              Certification
            </a>
          </li>
          <button
            aria-label="download-cv"
            type="button"
            className="mr-3 w-full rounded-lg bg-[#FF5733] px-4 py-1.5 text-center text-sm font-semibold text-white hover:bg-[#FF5733] sm:px-5 sm:py-2.5 md:mr-0"
            onClick={showPDF}
          >
            Download CV
          </button>
        </ul>
      </div>
    </nav>
    // <!-- <div className="h-14"></div> -->
  );
};

export default Navbar;
