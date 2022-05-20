import React from 'react';

// Components
import HeroImage from './HeroImage';

// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="flex flex-col items-start md:flex-row md:justify-between">
      <div className="self-center text-left md:w-5/12">
        <p className="font-bold text-[#FF5733]">
          👋 <span className="pl-2">Hey There I am</span>
        </p>
        <p className="my-2 text-4xl font-extrabold">Sila Pakdeewong</p>
        <p className="text-xl font-bold">
          <span className="text-gray-500">Faculty of IT Student</span> at{' '}
          <span className="text-[#FF5733]">KMITL</span>
        </p>
        <p className="mt-6 font-semibold text-gray-400">
          1st Year - Faculty of IT Student at KMITL (IT20) | (Focusing Web App /
          Back-end / Mobile and Blockchain Development)
        </p>
        <div className="mt-8 flex flex-row justify-start">
          <a href="#aboutme">
            <button className="mr-2 inline-flex rounded-xl bg-[#FF5733] px-6 py-2 text-white hover:bg-[#FF5733] sm:mr-6">
              Learn More
              <FontAwesomeIcon
                className="mt-1 ml-1"
                icon={faAngleRight}
                width="16"
                height="16"
              />
            </button>
          </a>
          <a href="#footer">
            <button className="inline-block rounded-xl bg-gray-800 px-6 py-2 text-white hover:bg-sky-800">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      <div>{/* <HeroImage /> */}</div>
    </div>
  );
};

export default Hero;
