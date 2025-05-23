import { a } from 'framer-motion/client';
import MyImg from '../../assets/me.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
      className="bg-[rgb(241,239,236)] min-h-screen sm:ml-[20%] flex flex-col items-center"
      id="About"
    >
      <div>
        <h1 className="text-[25px] sm:text-[40px] mx-5 2xl:ml-10 font-black border-b-black h-[60px] mt-20 mb-3">
          ABOUT
        </h1>
      </div>
      <div className="flex justify-center gap-7 lg:gap-28 border-b-2 border-t-2 py-10 px-3 border-[rgb(214,214,214)] outline-none xl:w-[800px] w-[80%]">
        <div>
          <img src={MyImg} className="w-[100%] md:w-60" />
        </div>
        <div className="mt-3 w-[50%] lg:w-[360px] flex flex-col justify-end">
          <h2 className="sm:text-2xl font-bold">KIM DA EUN</h2>
          <p className=" text-sm sm:text-[15px] text-gray-500 mt-1">
            2003. 09. 01
          </p>
          <p className=" text-sm sm:text-[15px] text-gray-500 ">
            경희대학교 소프트웨어융합학과 휴학
          </p>
          <hr className="h-3 border-gray-300 my-3"></hr>
          <p className="text-[13px] sm:text-[16px] my-2 whitespace-nowrap">
            📞 Contact : 010-3220-3980
          </p>
          <p className="text-[13px] sm:text-[16px] my-2">
            📤 Mail : rlaekdms901@khu.ac.kr
          </p>
          <p className="text-[13px] sm:text-[16px] my-2">
            ✏️ Blog :{' '}
            <a
              href="https://velog.io/@da_eun_e/posts"
              className="hover:text-[rgb(86,206,160)]"
              target="_blank"
            >
              daeun_velog
            </a>
          </p>
          <p className="my-2 text-[13px] sm:text-[16px]">
            <i className="fa-brands fa-github mr-2 "></i>
            Github :{' '}
            <a
              href="https://github.com/dannnnne?tab=repositories"
              className="hover:text-gray-500"
              target="_blank"
            >
              dannnnne_github
            </a>
          </p>
        </div>
      </div>

      <div className=" py-auto border-b-2 py-10 px-3 border-[rgb(214,214,214)] outline-none w-[80%] xl:w-[800px]">
        <ul className="text-xl flex flex-col gap-3">
          <li>
            <p className="text-sm sm:text-xl">
              - "
              <span className="text-red-700 font-bold">
                어제의 나보다 더 나은 개발자
              </span>
              "가 되기 위해 꾸준히 학습하고 기록합니다.
            </p>
          </li>
          <li>
            <p className="text-sm sm:text-xl">
              - 새로운 기술을 배우는 과정에서
              <span className="text-red-700 font-bold"> 성장하는 즐거움</span>을
              느끼며, 이를 바탕으로
              <span className="text-red-700 font-bold"> 더 나은 서비스</span>를
              만드는 것이 목표입니다.
            </p>
          </li>
        </ul>
      </div>

      <div className="py-auto border-b-2 py-5 px-3 border-[rgb(214,214,214)] outline-none w-[80%] xl:w-[800px]">
        <h1 className="text-2xl font-bold">ACTIVITY</h1>
        <div className="mt-4">
          <p className="text-sm sm:text-xl ">
            <a
              href="https://9oormthon.university/"
              className="hover:text-sky-500"
              target="_blank"
            >
              9oormthon UNIV
            </a>{' '}
            4기
          </p>
          <p className="text-sm sm:text-[15px] text-gray-500 mt-1">
            2025.03 ~ ing
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
