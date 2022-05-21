import React from 'react';

// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Stacks = () => {
  return (
    <div>
      <div className="self-center text-left">
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faCode} width={25} height={25} />
          <p className="text-xl font-extrabold md:text-2xl">
            Technology Stacks
          </p>
        </div>
        <p className="mt-4 font-semibold text-gray-400">
          Technology Stacks and Technologies that I used
        </p>
      </div>

      <div className="mt-4 text-left">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCode}
            width={18}
            height={18}
            color="#FF5733"
          />
          <p className="text-lg font-bold text-[#FF5733]">
            Development Platform
          </p>
        </div>

        <div>
          <div className=" mt-2 flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} width={18} height={18} />
            <p className="text-md font-semibold">Web Development</p>
          </div>

          <p className="text-md mt-1 ml-2 font-semibold text-gray-400">
            - Languages: JS & TS / HTML & CSS <br /> - Web Frameworks: React /
            Next <br /> - UI Frameworks: Material-UI / Next-UI / TailwindCSS
          </p>
        </div>

        <div>
          <div className=" mt-2 flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} width={18} height={18} />
            <p className="text-md font-semibold">
              Mobile Application Development
            </p>
          </div>

          <p className="text-md mt-1 ml-2 font-semibold text-gray-400">
            - Android (Android Studio / Java & Kotlin) <br />- iOS (XCode /
            Swift)
          </p>
        </div>

        <div>
          <div className="mt-2 flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} width={18} height={18} />
            <p className="text-md font-semibold">
              Back-end / Web Services Development
            </p>
          </div>

          <p className="text-md mt-1 ml-2 font-semibold text-gray-400">
            - NodeJS / Express <br />- Go (Gin / Fiber)
          </p>
        </div>
      </div>

      <div className="mt-4 text-left">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCode}
            width={18}
            height={18}
            color="#FF5733"
          />
          <p className="text-lg font-bold text-[#FF5733]">Database</p>
        </div>

        <p className="mt-2 font-semibold text-gray-400">
          - Firebase (Realtime Database / Cloud Firestore) <br />
          - MongoDB (Mongoose) <br /> - MySQL
        </p>
      </div>
    </div>
  );
};

export default Stacks;
