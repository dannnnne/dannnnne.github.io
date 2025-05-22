import TS from '../../assets/stacks/TS.png';
import JS from '../../assets/stacks/JS.jpg';
import HTML from '../../assets/stacks/HTML.png';
import REACT from '../../assets/stacks/React.png';
import CSS from '../../assets/stacks/CSS.jpg';
import TWCSS from '../../assets/stacks/TAILWIND.png';
import GITHUB from '../../assets/github.png';
import SLACK from '../../assets/stacks/SLACK.png';
import DISCORD from '../../assets/stacks/DISCORD.png';
import FIGMA from '../../assets/stacks/FIGMA.png';
import NOTION from '../../assets/stacks/NOTION.png';

import { motion } from 'framer-motion';

const Stacks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[rgb(241,239,236)] min-h-screen sm:ml-[20%] flex flex-col items-center"
      id="Stacks"
    >
      <div>
        <h1 className="text-[25px] sm:text-[40px] mx-5 2xl:ml-10 font-black border-b-black h-[60px] mt-20 mb-3">
          STACKS
        </h1>
      </div>
      <div className="flex flex-col justify-center  border-b-2 border-t-2 px-3 border-[rgb(214,214,214)] outline-none xl:w-[800px] w-[80%]">
        <div className="flex border-b-2 border-[rgb(214,214,214)] py-10">
          <h2 className="text-lg sm:text-2xl px-4 font-bold w-[30%]">
            Language
          </h2>
          <div className="ml-4 flex justify-center items-center gap-3 text-xs sm:text-lg whitespace-nowrap">
            <p>
              <img src={TS} className="w-6 inline" />
              TypeScript
            </p>
            <p>
              <img src={JS} className="w-10 inline" />
              JavaScript
            </p>
          </div>
        </div>
        <div className="flex border-b-2 border-[rgb(214,214,214)] py-10">
          <h2 className=" text-lg whitespace-nowrap sm:text-2xl px-4 font-bold w-[30%]">
            Front-End
          </h2>
          <div className="ml-6 flex flex-col gap-2 text-xs sm:text-lg whitespace-nowrap">
            <p className="flex ">
              <img src={HTML} className="w-5 inline" />
              &nbsp;HTML&nbsp;&nbsp;&nbsp;
              <img src={REACT} className="w-5 h-5 inline" />
              &nbsp;React
            </p>
            <p>
              <img src={CSS} className="w-5 inline" />{' '}
              CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={TWCSS} className="w-5 inline" />
              &nbsp;TailwindCSS
            </p>
          </div>
        </div>
        <div className="flex outline-none border-none py-10">
          <h2 className="text-lg sm:text-2xl px-4 font-bold w-[30%]">Tools</h2>
          <div className="ml-6 flex flex-col gap-2 text-xs sm:text-lg whitespace-nowrap">
            <p>
              <img src={GITHUB} className="w-6 inline" />
              &nbsp;Github&nbsp;&nbsp;&nbsp;{' '}
              <img src={SLACK} className="w-6 inline" />
              &nbsp;Slack&nbsp;&nbsp;&nbsp;{' '}
              <img src={DISCORD} className="w-5 inline" />
              &nbsp;Discord
            </p>
            <p>
              <img src={FIGMA} className="w-5 inline" />
              &nbsp;Figma&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={NOTION} className="w-5 inline" />
              &nbsp;Notion
            </p>
          </div>
        </div>
        <hr />
      </div>
    </motion.div>
  );
};

export default Stacks;
