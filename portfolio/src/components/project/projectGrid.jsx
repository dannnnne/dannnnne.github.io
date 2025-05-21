const ProjectGrid = ({ img, title, description, time, stacks, onClick }) => {
  return (
    <div className="transition-transform duration-300 hover:scale-110">
      <div
        onClick={onClick}
        className="mx-auto w-[260px] h-[280px] sm:w-[300px] sm:h-[340px]  md:w-[330px] md:h-[360px] xl:w-[350px] xl:h-[400px] 2xl:w-[380px] 2xl:h-[400px] bg-[rgb(241,239,236)] flex flex-col justify-end rounded-[20px] mb-5 "
      >
        <img src={img} className="w-[100%] h-[70%] rounded-t-[20px]" />
        <div className="bg-white h-[30%] border-[rgb(214,214,214)] border-t-[2px] ">
          <div className="pl-2 pt-1 flex flex-col ">
            <h1 className="text-md font-bold xl:text-lg">{title}</h1>
            <div className="hidden sm:block sm:text-[11px] xl:text-[13px]">
              {description}
            </div>
            <div className="text-[13px] mt-1 xl:text-[15px]">{time}</div>

            <div className="flex flex-wrap mt-[4px] ">
              {stacks.map((item) => {
                return (
                  <span className="bg-blue-200 rounded-md p-[2px] px-[6px] mr-1 text-[12px] xl:text-[15px]">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
