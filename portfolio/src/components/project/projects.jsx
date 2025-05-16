const Projects = () => {
  return (
    <div className="bg-[rgb(241,239,236)] min-h-screen ml-[20%]">
      <h1 className="sm:text-[25px] mx-5 2xl:ml-10 font-black md:text-[30px] xl:text-[40px] xl:h-[60px]">
        PROJECTS
      </h1>

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5 mx-auto md:mx-5 2xl:mx-10 mt-10">
        <div className="mx-auto w-[300px] h-[270px] sm:w-[350px] sm:h-[320px]  md:w-[380px] md:h-[350px] xl:w-[430px] xl:h-[400px] 2xl:w-[95%] 2xl:h-[400px] bg-[rgb(216,217,218)] flex flex-col justify-end rounded-[20px] ">
          <p className="bg-white h-[30%]">설명</p>
        </div>
        <div className="mx-auto w-[300px] h-[270px] sm:w-[350px] sm:h-[320px]  md:w-[380px] md:h-[350px] xl:w-[430px] xl:h-[400px] 2xl:w-[95%] 2xl:h-[400px] bg-[rgb(216,217,218)] flex flex-col justify-end rounded-[20px] ">
          <p className="bg-white h-[30%]">설명</p>
        </div>{' '}
        <div className="mx-auto w-[300px] h-[270px] sm:w-[350px] sm:h-[320px]  md:w-[380px] md:h-[350px] xl:w-[430px] xl:h-[400px] 2xl:w-[95%] 2xl:h-[400px] bg-[rgb(216,217,218)] flex flex-col justify-end rounded-[20px] ">
          <p className="bg-white h-[30%]">설명</p>
        </div>{' '}
        <div className="mx-auto w-[300px] h-[270px] sm:w-[350px] sm:h-[320px]  md:w-[380px] md:h-[350px] xl:w-[430px] xl:h-[400px] 2xl:w-[95%] 2xl:h-[400px] bg-[rgb(216,217,218)] flex flex-col justify-end rounded-[20px] ">
          <p className="bg-white h-[30%]">설명</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
