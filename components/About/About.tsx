import React from 'react';

// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Icons
import githubIcon from '../../icons/github.svg';
import facebookIcon from '../../icons/facebook.svg';
import mediumIcon from '../../icons/medium.svg';
import youtubeIcon from '../../icons/youtube.svg';
import linkedInIcon from '../../icons/linkedln.svg';
import Image from 'next/image';

const About = () => {
  return (
    <div className="justify-between md:flex md:flex-row">
      <div className="items-start text-left md:w-5/12">
        <p className="text-xl font-extrabold text-[#FF5733]">
          Want to know me more?
        </p>
        <p className="my-2 text-3xl font-extrabold">About Me</p>
        <p className="mt-4 font-semibold text-gray-400">
          My name is Sila Pakdeewong, My nickname is Focus, I am 18 years old
          Currently I am 1st Year Student at Faculty of Information Technology,
          KMITL. In the future, I want to be a Software Engineer because I
          believe technology and software development always make a change,
          bring new things and innovations, and also bring a better quality of
          life for many people.
        </p>
      </div>

      <div className="mt-12 self-center text-left md:mt-0 md:w-5/12">
        <div>
          <p className="text-xl font-extrabold text-[#FF5733] md:hidden">
            Want to contact me? <br /> Here is my contact and social media
          </p>
          <p className="hidden text-xl font-extrabold text-[#FF5733] md:inline-block">
            Want to contact me? Here is my contact and social media
          </p>
          <p className="my-2 text-3xl font-extrabold">Contact Me</p>
          <p className="mt-4 font-semibold text-gray-400">
            There are several way to contact and follow me such as Facebook
            Github and etc. Feel free to connect with me if you have any
            question or wanna dicuss with me. The social media link and my email
            address are below. Let's connect
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="rounded-full border-2 p-2">
              <FontAwesomeIcon icon={faPhone} width="14" height="14" />
            </div>
            <a
              href="tel:+66-65-652-6769"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="ml-2 text-base font-semibold hover:bg-[#FF5733]">
                +66-65-652-6769
              </p>
            </a>
          </div>
          <div className="mt-4 flex items-center">
            <div className="rounded-full border-2 p-2">
              <FontAwesomeIcon icon={faEnvelope} width="14" height="14" />
            </div>
            <a
              href="mailto:focuspakdeewong2546@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="ml-2 text-base font-semibold hover:bg-[#FF5733]">
                focuspakdeewong2546@gmail.com
              </p>
            </a>
          </div>

          <div className="mt-3 flex gap-1">
            <div className="p-2 hover:bg-[#FF5733]">
              <a
                href="https://github.com/misterfocusth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={githubIcon} width={24} height={24} />
              </a>
            </div>
            <div className="p-2 hover:bg-[#FF5733]">
              <a
                href="https://web.facebook.com/Silapakdeewong2546"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebookIcon} width={24} height={24} />
              </a>
            </div>
            <div className="p-2 hover:bg-[#FF5733]">
              <a
                href="https://medium.com/@misterfocusth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={mediumIcon} width={24} height={24} />
              </a>
            </div>
            <div className="p-2 hover:bg-[#FF5733]">
              <a
                href="https://www.youtube.com/c/MISTERFOCUSTH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={youtubeIcon} width={24} height={24} />
              </a>
            </div>
            <div className="p-2 hover:bg-[#FF5733]">
              <a href="https://www.linkedin.com/in/sila-pakdeewong/">
                <Image src={linkedInIcon} width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
