import './App.css';

import profileImage from "./images/profile_images/profile_image.jpg"

function App() {
  return (
    <div className="App bg-blue-50">
      <header className="App-header px-6 mg:20 lg:20 py-3 w-full bg-white border-b border-b-slate-200 fixed">
        <div class="flex items-center justify-center">
          <div class="flex items-center justify-center w-full">
            <div class="flex items-center justify-between lg:justify-center text-2xl font-bold w-full">
              <svg class="w-10 h-10 mr-0 lg:mr-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
              </svg>
              <p className='hidden lg:flex'>Sila Pakdeewong</p>
              <div className='flex items-center justify-end'>
                <div className='mr-3 lg:hidden border border-slate-200 rounded-lg'>
                  <button class="bg-white text-blue-600 font-medium py-2 px-2 rounded-lg inline-flex items-center justify-center">
                    <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <div className='mr-3 lg:hidden border border-slate-200 rounded-lg'>
                  <button class="bg-white text-blue-600 font-medium py-2 px-2 rounded-lg inline-flex items-center justify-center">
                    <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </button>
                </div>
                <div className='ml-0 lg:hidden border border-slate-200 rounded-lg'>
                  <button class="bg-white text-blue-600 font-medium py-2 px-4 rounded-lg inline-flex items-center justify-center">
                    <span className='text-sm'>Menu</span>
                    <svg className="fill-current w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <svg class="lg:hidden w-10 h-10 ml-0 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
              </svg> */}
            </div>

            <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
              <a href="#home" class="flex items-center justify-center mr-10 text-base font-bold text-blue-600">
                Home
              </a>
              <a href="#aboutme" class="flex items-center justify-center mr-10 text-base font-medium">
                About Me
              </a>
              <a href="#projects" class="flex items-center justify-center mr-10 text-base font-medium">
                Portfolio & Projects
              </a>
              <a href="#blogs" class="flex items-center justify-center mr-10 text-base font-medium">
                Blogs & Articles
              </a>
              <a href="#contact" class="flex items-center justify-center mr-10 text-base font-medium">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>

      <div id='home' className='container mx-auto p-0 lg:p-12 lg:pt-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-around items-center p-8 md:p-20'>
          <div>
            <div className='text-center'>
              <p className='lg:text-5xl md:text-4xl text-4xl font-bold tracking-wide mt-20'>Hello, I am</p>
              <p className='lg:text-5xl md:text-4xl text-4xl text-blue-600 font-bold tracking-wide mt-4'>Sila Pakdeewong</p>
              <div className='mt-10'>
                <p className='lg:text-lg md:text-base text- font-medium tracking-wide'>1st Year - Information Technology (IT) Student at <span className='text-orange-600 p-2'>
                  King Monkut's Institute of Technology Ladkrabang. (KMITL)
                </span></p>
              </div>
              <div className='w-full mt-10 mb-8'>
                <a href='#aboutme'>
                  <button class="bg-blue-600 text-white font-medium py-3 px-4 rounded-lg inline-flex items-center justify-center w-full">
                    <span>Get started about me</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img className='mx-auto' src="https://media.giphy.com/media/aSR3Z3ZbilL7qnEFxc/giphy.gif" alt="test" width={450} height={450} />
          </div>
        </div>
        <div className='w-full text-center py-6'>
          <p className='text-base font-medium'>Scroll down to see more</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto w-7 h-7 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
        </div>
      </div>

      <div id='aboutme' className='container mx-auto p-0 lg:p-12 lg:pt-24 bg-white'>
        <p className='lg:text-5xl md:text-4xl text-2xl p-6 pb-0 text-blue-600 font-bold tracking-wide mt-4'>About Me</p>
        <p className='lg:text-5xl md:text-4xl text-sm p-6 pt-0  font-semibold tracking-wide mt-2'>Basic information about me, my education, experiences, skills and social network</p>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-around items-center p-4'>
          <div>
            <img className='mx-auto rounded-full object-cover w-72 h-72' src={profileImage} alt="test" />
          </div>
          <div>
            <div className='text-center'>
              <p className='lg:text-5xl md:text-4xl text-4xl font-bold tracking-wide mt-20'>Hello, I am</p>
              <p className='lg:text-5xl md:text-4xl text-4xl text-blue-600 font-bold tracking-wide mt-4'>Sila Pakdeewong</p>
              <div className='mt-10'>
                <p className='lg:text-lg md:text-base text- font-medium tracking-wide'>1st Year - Information Technology (IT) Student at <span className='text-orange-600 p-2'>
                  King Monkut's Institute of Technology Ladkrabang. (KMITL)
                </span></p>
              </div>
              <div className='w-full mt-10 mb-8'>
                <a href='#aboutme'>
                  <button class="bg-blue-600 text-white font-medium py-3 px-4 rounded-lg inline-flex items-center justify-center w-full">
                    <span>Get started about me</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;