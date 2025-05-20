import arrowImg from '../../assets/arrow.png';
import { useState, useEffect } from 'react';

const Hello = () => {
  const first = '안녕하세요';
  const second = '김다은입니다!';
  const totalLength = first.length + second.length;

  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= totalLength) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-[rgb(27,38,59)] w-full min-h-screen flex flex-col"
      id="Hello"
    >
      <h1 className="text-white text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[96px] mx-auto mt-72 font-normal tracking-[4px]">
        {first.split('').map((char, idx) => (
          <span
            key={`first-${idx}`}
            className={`inline-block transition-opacity duration-400 ${
              idx < visibleChars ? 'opacity-100' : 'opacity-0'
            } `}
          >
            {char}
          </span>
        ))}

        <span
          key="space"
          className={`inline-block transition-opacity duration-300 ${
            visibleChars > first.length - 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          &nbsp;
        </span>

        {second.split('').map((char, idx) => {
          const charIndex = first.length + idx;
          return (
            <span
              key={`second-${idx}`}
              className={`inline-block transition-opacity duration-300 ${
                charIndex < visibleChars ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {char}
            </span>
          );
        })}
      </h1>
      {visibleChars >= totalLength && (
        <p className="text-white mx-auto tracking-[4px] sm:tracking-[8px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-[5px] font-thin animate-fade-in">
          Front-End Developer
          <img src={arrowImg} className="w-14 mx-auto mt-56 animate-bounce" />
        </p>
      )}
    </div>
  );
};

export default Hello;
