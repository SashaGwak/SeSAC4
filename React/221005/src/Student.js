import {useParams, useNavigate, useSearchParams} from 'react-router-dom';
import './Practice.css';

function Student() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
    return (
      <div>
        <span> 학생의 이름은 <span className='names'>{name}</span>입니다.</span>
        <br />
        { searchParams != 0? (<span> 실제 이름은 <span className='red'>{searchParams.get("name")}s</span></span>): <span></span> }
        <br />
        <button onClick={() => navigate(-1)}>이전 페이지로</button>
      </div>
    );

}

export default Student;