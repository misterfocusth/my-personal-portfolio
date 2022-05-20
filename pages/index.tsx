import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';

// Components
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Awards from '../components/Education/Awards';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>misterfocusth | Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="mt-24 mb-12 flex w-full flex-1 flex-col items-center justify-center px-6 text-center md:mt-40 md:px-12">
        <div>
          <div id="#" className="mb-16">
            <Hero />
          </div>
          <div id="aboutme" className="mb-16">
            <About />
          </div>
          <div id="education" className="mb-16 justify-between md:flex ">
            <Education />
            <Awards />
          </div>
        </div>
      </main>

      <footer
        id="footer"
        className="flex h-24 w-full items-center justify-center border-t"
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
