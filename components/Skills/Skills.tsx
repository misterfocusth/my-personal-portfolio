import React from 'react';
import Programming from './Programming';

const Skills = () => {
  return (
    <div className="mt-12 flex flex-col items-start justify-between md:mt-0 md:flex md:w-5/12">
      <div className="self-center text-center ">
        <p className="text-xl font-extrabold text-[#FF5733]">
          What I can do in software development
        </p>
        <p className="my-4 text-3xl font-extrabold">My Skills</p>
        <p className="mt-4 font-semibold text-gray-400">
          I have experinced in many software development platform such as Web /
          Back-end / Mobile Application and Blockchain Development, but in Web
          and Back-end is development platform that I mostly development in my
          recently projects. In this sections in my portfolio is my overall
          skills and technology stacks that I have experinced with.
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row">
        <div>
          <Programming />
        </div>
      </div>
    </div>
  );
};

export default Skills;
