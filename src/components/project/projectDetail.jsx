import { useParams, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/arrow.png';
import { projectData } from '../../constant/projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const decodedTitle = decodeURIComponent(id);
  const project = projectData[decodedTitle];
  // {params.id}번 프로젝트 입니다.

  const navigate = useNavigate();
  const clickButton = () => {
    navigate(-1);
  };
  if (!project) {
    return <div>해당 프로젝트를 찾을 수 없습니다.</div>;
  }
  return (
    <div className="bg-[rgb(241,239,236)] ">
      <div className="w-[80vw] sm:w-[600px] xl:w-[800px] bg-[rgb(93,122,175)] h-[90vh] mx-auto my-[3%] rounded-xl shadow-2xl flex flex-col justify-between border border-none">
        <div className="border-b-2 border-[rgb(177,177,177)] h-20 flex px-3 items-center">
          <img
            src={Arrow}
            className="w-10 h-10 cursor-pointer"
            onClick={clickButton}
          />
          <div className="text-center flex-1 text-white text-xl ">
            {decodedTitle}
          </div>
        </div>
        <div className="border-b-2 flex-1 border-[rgb(177,177,177)]">
          <img className="w-full h-[370px] mx-auto" src={project.img} />
        </div>
        <div className="text-black h-[45%] outline-none border-none bg-white rounded-b-xl">
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
