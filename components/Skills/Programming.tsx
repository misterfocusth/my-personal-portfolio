import React from 'react';

// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Programming = () => {
  return (
    <div>
      <div className="self-center text-left">
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faCode} width={25} height={25} />
          <p className="text-xl font-extrabold md:text-2xl">
            Programming Languages
          </p>
        </div>
        <p className="mt-4 font-semibold text-gray-400">
          My Skills and Proficient in each programming language
        </p>
      </div>

      <div className="mt-4 text-left">
        <p className="text-md font-bold text-[#FF5733]">Intermediate Level</p>
        <p className="mt-2 font-semibold text-gray-400">
          - JavaScript & TypeScript (Nodes) <br />-
        </p>
      </div>
    </div>
  );
};

export default Programming;
