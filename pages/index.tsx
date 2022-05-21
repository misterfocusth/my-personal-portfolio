import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';

// Components
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Awards from '../components/Awards/Awards';
import Skills from '../components/Skills/Skills';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>misterfocusth | Personal Portfolio</title>
        <link rel="icon" href="/images/memoji/S__2506754.jpg" />
        <meta
          property="og:title"
          content="misterfocusth | Personal Portfolio"
        />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://misterfocusth.vercel.app" />
        <meta
          property="og:image"
          content="https://misterfocusth.vercel.app/images/profile/sila.jpeg"
        />
        <meta
          property="og:description"
          content="1st Year - Faculty of IT Student at KMITL (IT20) | (Focusing Web App / Back-end / Mobile and Blockchain Development)"
        />
      </Head>

      <Navbar />

      <main className="md:mt-30 mt-24 mb-12 flex w-full flex-1 flex-col items-center justify-center px-6 text-center md:px-28">
        <div>
          <div id="#" className="mb-16 scroll-mt-24">
            <Hero />
          </div>

          <div id="aboutme" className="mb-16 scroll-mt-24">
            <About />
          </div>

          <div
            id="education"
            className="mb-16 scroll-mt-24 justify-between md:flex"
          >
            <Education />
            <Awards />
          </div>

          <div id="skills" className="mb-16 scroll-mt-24">
            <Skills />
          </div>
        </div>
      </main>

      <footer
        id="footer"
        className="flex h-24 w-full scroll-mt-24 items-center justify-center border-t"
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
