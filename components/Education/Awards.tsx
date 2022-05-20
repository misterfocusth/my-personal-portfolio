import React from 'react';
import Image from 'next/image';

const Awards = () => {
  return (
    <div className="mt-12 flex flex-col items-start justify-between md:mt-0 md:flex md:w-5/12">
      <div className="self-center text-left ">
        <p className="text-xl font-extrabold text-[#FF5733]">
          About my honors and awards that I have received
        </p>
        <p className="my-2 text-3xl font-extrabold">My Honors and Awards</p>
        <p className="mt-4 font-semibold text-gray-400">
          Here is my proundly present about my honors and awards that I have
          received about Software Development or related with Science Computer
          and Software Skills
        </p>
      </div>

      <div className="mt-6">
        <div className="flex-cols flex items-start justify-between gap-4">
          <img
            src="https://www.nstda.or.th/archives/wp-content/uploads/2021/08/logo-nstda-202010.png"
            loading="lazy"
            width={65}
            height={65}
          />
          <div className="flex-cols text-left">
            <p className="text-base font-extrabold text-[#FF5733]">
              March 2022{' '}
              <span className="font-bold text-gray-400">
                <a
                  href="https://www.nstda.or.th/home/"
                  className="hover:text-[#FF5733]"
                >
                  <p className="font-bold">
                    by National Science and Technology Development Agency
                    (NSTDA)
                  </p>
                </a>
              </span>
            </p>
            <p className="font-bold">
              National First (1st) Runner-Up in The National Software Contest
              24th (NSC2022)
            </p>
            <p className="font-semibold text-gray-400">
              Received National First (1st) Runner-Up Award in The National
              Software Contest 24th (NSC2022) and Funding for research and
              development from National Science and Technology Development
              Agency (NSTDA)
            </p>
          </div>
        </div>

        <div className="flex-cols mt-6 flex items-start justify-between gap-4">
          <img
            src="https://i.pinimg.com/originals/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.png"
            loading="lazy"
            width={65}
            height={65}
          />
          <div className="flex-cols text-left">
            <p className="text-base font-extrabold text-[#FF5733]">
              December 2021{' '}
              <span className="font-bold text-gray-400">
                <a
                  href="https://www.microsoft.com/"
                  className="hover:text-[#FF5733]"
                >
                  <p className="font-bold">by Microsoft</p>
                </a>
              </span>
            </p>
            <p className="font-bold">
              Microsoft Certified: Azure (AZ-900) / Data (DP-900) / AI (AI-900)
              Fundamentals
            </p>
            <p className="font-semibold text-gray-400">
              Azure Fundamentals certification have demonstrated foundational
              level knowledge of cloud services and how those services are
              provided with Microsoft Azure. Azure Data Fundamentals
              certification have demonstrated foundational knowledge of core
              data concepts and how they are implemented using Microsoft Azure
              data services. Azure AI Fundamentals certification have
              demonstrated foundational knowledge of machine learning (ML) and
              artificial intelligence (AI) concepts and related Microsoft Azure
              services.
            </p>
          </div>
        </div>

        <div className="flex-cols mt-6 flex items-start justify-between gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA9-NUKe2BxJEORcri0MSRtMU5VQRdt7XEmEUe8ujnXcRzJGYT17tui9NxiXWSn8boTw&usqp=CAU"
            loading="lazy"
            width={65}
            height={65}
          />
          <div className="flex-cols text-left">
            <p className="text-base font-extrabold text-[#FF5733]">
              October 2021{' '}
              <span className="font-bold text-gray-400">
                <a
                  href="http://www.sriayudhya.ac.th/sri60/"
                  className="hover:text-[#FF5733]"
                >
                  <p className="font-bold">by Sri Ayudhya School</p>
                </a>
              </span>
            </p>
            <p className="font-bold">
              Outstanding Student with an excellent cumulative grade point
              average.
            </p>
            <p className="font-semibold text-gray-400">
              Received Outstanding Student Award for Student who has excellent
              cumulative grade point average for the first semester of the
              academic year 2021 (4.00 grade point average).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
