import arrowImg from '../assets/arrow.png';

const Hello = () => {
  return (
    <div className="bg-[rgb(27,38,59)] w-full h-[1024px] flex flex-col">
      <h1 className="text-white text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[96px] mx-auto mt-72 font-normal tracking-[4px]">
        안녕하세요! <b className="text-[rgb(241, 239, 236)]">김다은</b>입니다!
      </h1>
      <p className="text-white mx-auto tracking-[4px] sm:tracking-[8px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-[5px] font-thin">
        Front-End Developer
      </p>
      <img src={arrowImg} className="w-14 mx-auto mt-56" />
    </div>
  );
};

export default Hello;
