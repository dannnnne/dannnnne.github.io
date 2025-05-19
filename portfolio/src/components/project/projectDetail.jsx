import { useParams } from 'react-router-dom';
import Arrow from '../../assets/arrow.png';

const ProjectDetail = () => {
  const params = useParams();
  // {params.id}번 프로젝트 입니다.
  return (
    <div className="bg-[hsl(219,37%,17%)] ">
      <div className="w-[80vw] bg-[rgb(216,217,218)] h-[90vh] mx-auto my-[3%] rounded-xl shadow-2xl flex flex-col justify-between border border-none">
        <div className="border-b-2 border-[rgb(177,177,177)] h-20 flex px-3 items-center">
          <img src={Arrow} className="w-10 h-10" />
          <div className="text-center flex-1 ">제목</div>
        </div>
        <div className="border-b-2 flex-1 border-[rgb(177,177,177)]">내용</div>
        <div className="text-black h-[45%] outline-none border-none bg-white rounded-b-xl">
          설명
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
