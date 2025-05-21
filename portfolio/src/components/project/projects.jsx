import { motion } from 'framer-motion';
import ProjectGrid from './projectGrid';

import ArtSW from '../../assets/projects/예소.jpg';
import GroomUniv from '../../assets/projects/구름톤유니브.png';
import HomePage from '../../assets/projects/homepage.png';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const onClick = (title) => {
    navigate(`/project/${title}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-[rgb(241,239,236)] min-h-screen sm:ml-[20%] mb-[50px]"
      id="Projects"
    >
      <h1 className="text-[25px] sm:text-[25px] mx-5 2xl:ml-10 font-black md:text-[30px] xl:text-[40px] xl:h-[60px] text-center">
        PROJECTS
      </h1>

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5 mx-auto md:mx-5 2xl:mx-10 mt-10 mb-10">
        <ProjectGrid
          img={HomePage}
          title={'스터디 홈페이지 만들기'}
          description={'설명'}
          time={'2025.04.02 ~ ing'}
          stacks={['React', 'TS', 'NextJS', 'tailwindCSS']}
          onClick={() => onClick('스터디_홈페이지')}
        />
        <ProjectGrid
          img={ArtSW}
          title={'예술적인 소프트웨어'}
          description={'설명'}
          time={'2025.05.11 ~ ing'}
          stacks={['React', 'JS', 'TS', 'tailwindCSS']}
          onClick={() => {
            onClick('예술적인_소프트웨어');
          }}
        />
        <ProjectGrid
          img={GroomUniv}
          title={'구름톤 유니브 교내 프로젝트'}
          description={'설명'}
          time={'2025.05.21 ~ ing'}
          stacks={['React', 'JS', 'TS', 'tailwindCSS']}
          onClick={() => onClick('구름톤_유니브_교내_프로젝트')}
        />
      </div>
    </motion.div>
  );
};

export default Projects;
