import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="md:flex">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Develop with <span className="ml-1 mr-2">❤️</span> by Sila Pakdeewong
      </a>
      <a
        className="flex items-center justify-center gap-2 md:ml-12"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </div>
  );
};

export default Footer;
