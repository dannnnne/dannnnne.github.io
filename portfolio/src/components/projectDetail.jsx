import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const params = useParams();
  return <div>{params.id}번 프로젝트 입니다.</div>;
};

export default ProjectDetail;
