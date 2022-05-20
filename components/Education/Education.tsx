import React from 'react';
import Image from 'next/image';

const Education = () => {
  return (
    <div className="flex flex-col md:flex md:w-5/12">
      <div className="self-center text-left ">
        <p className="text-xl font-extrabold text-[#FF5733]">
          About my education and knowledge
        </p>
        <p className="my-2 text-3xl font-extrabold">My Education</p>
        <p className="mt-4 font-semibold text-gray-400">
          I graduated from Sri Ayudhya School as my High School degree and
          currently I studying in Information Technology (Software Engineering
          Major) at Faculty of Information Technology, KMITL and I will be
          graduated in 2026
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-row items-start gap-4">
          <img
            src={'../../images/schools/kmitl_school_img.png'}
            loading="lazy"
            width={65}
            height={65}
          />
          <div className="flex flex-col text-left">
            <p className="text-base font-extrabold text-[#FF5733]">
              2022 - Present
            </p>
            <a href="https://www.kmitl.ac.th/" className="hover:text-[#FF5733]">
              <p className="font-bold">
                King Mongkut’s Institute of Technology Ladkrabang
              </p>
            </a>
            <p className="font-semibold text-gray-400">
              Bachelor of Science (B.Sc.) in Information Technology
              <br /> (Software Engineering Major)
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-row items-start gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA9-NUKe2BxJEORcri0MSRtMU5VQRdt7XEmEUe8ujnXcRzJGYT17tui9NxiXWSn8boTw&usqp=CAU"
            loading="lazy"
            width={65}
            height={65}
          />
          <div className="flex-col text-left">
            <p className="text-base font-extrabold text-[#FF5733]">
              2015 - 2021
            </p>
            <a
              href="http://www.sriayudhya.ac.th/sri60/"
              className="hover:text-[#FF5733]"
            >
              <p className="font-bold">
                Sri Ayudhya School under the Royal Patronage of <br /> H.R.H.
                Princess Bejraratanarajsuda
              </p>
            </a>

            <p className="font-semibold text-gray-400">
              Senior High School in English and Chinese Program Student
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-row items-start gap-4">
          <img
            src={'../../images/schools/sst_school_img.jpeg'}
            className="rounded-full"
            loading="lazy"
            width={65}
            height={65}
          />
          <div className="flex-col text-left">
            <p className="text-base font-extrabold text-[#FF5733]">
              2005 - 2014
            </p>
            <a
              href="http://www.samakhomsatreethai.ac.th/"
              className="hover:text-[#FF5733]"
            >
              <p className="font-bold">
                Thai Women Association School (Samakhomsatreethai School)
              </p>
            </a>
            <p className="font-semibold text-gray-400">
              Kindergarden and Grade 1 - 6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
