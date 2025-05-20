import githubImg from '../assets/github.png';
import VelogImg from '../assets/velog.jpg';
import GmailImg from '../assets/gmail.png';
import profileImg from '../assets/hi.jpg';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [hoverd, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`bg-[rgb(27,38,59)] sm:w-[20%] sm:h-screen sm:fixed  sm:left-0 sm:top-[0px] sm:flex sm:flex-col sm:justify-between sm:py-5 hidden`}
    >
      <div className="mt-16 flex flex-col justify-center items-center -mb-14 ">
        <a href="#Hello">
          <img src={profileImg} className="w-1/2 mx-auto mb-5 rounded-full" />
        </a>
        <a className="text-white sm:text-xl lg:text-2xl text-sm" href="#Hello">
          DA EUN KIM
        </a>
        <p className="text-[rgb(153,153,153)] sm:text-[12px] lg:text-lg text-[9px]">
          Front-End Developer
        </p>
      </div>

      <div>
        <ul className="text-white flex flex-col justify-center items-center gap-6 text-lg sm:text-2xl">
          <li className="transition-transform duration-300 hover:scale-110">
            <a href="#About">ABOUT</a>
          </li>
          <li className="transition-transform duration-300 hover:scale-110">
            <a href="#Stacks">STACKS</a>
          </li>

          <li className="transition-transform duration-300 hover:scale-110 ">
            <a href="#Projects">PROJECTS</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-2 sm:gap-5">
        <a
          className="bg-white rounded-[50%] w-6 h-6 sm:w-9 sm:h-9"
          href="https://github.com/dannnnne"
          target="_blank"
        >
          <img src={githubImg} className=" w-6 h-6 sm:w-11 sm:h-9" />
        </a>
        <a
          className="w-6 h-6 sm:w-9 sm:h-9 bg-white rounded-[50%]"
          href="https://velog.io/@da_eun_e/posts"
          target="_blank"
        >
          <img src={VelogImg} className="w-6 h-6 sm:w-9 sm:h-9 rounded-[50%]" />
        </a>
        <div
          className="bg-white rounded-[50%] w-6 h-6 sm:w-9 sm:h-9 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={GmailImg}
            className="absolute w-5 h-5 right-[2px] top-[2px] sm:w-8 sm:h-8"
          />
          {hoverd && (
            <div className="w-[290px] h-[70px] text-center py-2 absolute bottom-[55px] left-[-50px] md:left-[-130px] lg:left-[-160px] rounded-lg bg-white border border-[rgb(27,38,59)] lg:w-[290px]">
              <span className="text-green-600">naver</span> :
              rlaekdms901@naver.com
              <br />
              <span className="text-red-800">khu</span> : rlaekdms901@khu.ac.kr
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
