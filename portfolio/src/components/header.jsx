import githubImg from '../assets/github.png';
import VelogImg from '../assets/velog.jpg';
import GmailImg from '../assets/gmail.png';
import profileImg from '../assets/hi.jpg';

const Header = () => {
  return (
    <div className="bg-[rgb(27,38,59)] w-[20%] h-screen fixed  left-0 top-[0px] flex flex-col justify-between py-5">
      <div className="mt-16 flex flex-col justify-center items-center -mb-14 ">
        <img src={profileImg} className="w-1/2 mx-auto mb-5 rounded-full" />
        <h2 className="text-white sm:text-xl lg:text-2xl text-sm">
          DA EUN KIM
        </h2>
        <p className="text-[rgb(153,153,153)] sm:text-[12px] lg:text-lg text-[9px]">
          Front-End Developer
        </p>
      </div>

      <div>
        <ul className="text-white flex flex-col justify-center items-center gap-6 text-lg sm:text-2xl">
          <li>ABOUT</li>
          <li>STACKS</li>
          <li>PROJECTS</li>
        </ul>
      </div>

      <div className="flex justify-center gap-2 sm:gap-5">
        <div className="bg-white rounded-[50%] w-6 h-6 sm:w-9 sm:h-9">
          <img src={githubImg} className=" w-6 h-6 sm:w-11 sm:h-9" />
        </div>
        <div className="w-6 h-6 sm:w-9 sm:h-9 bg-white rounded-[50%]">
          <img src={VelogImg} className="w-6 h-6 sm:w-9 sm:h-9 rounded-[50%]" />
        </div>
        <div className="bg-white rounded-[50%] w-6 h-6 sm:w-9 sm:h-9 relative">
          <img
            src={GmailImg}
            className="absolute w-5 h-5 right-[2px] top-[2px]  sm:w-8 sm:h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
