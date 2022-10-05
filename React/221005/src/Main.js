import { Link, useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  return (
    <div>
      <h1>Main state = {location.state}</h1>
      
      <Link to='/product/1'>1번 상품</Link>
      <br />
      <Link to='/product/2'>2번 상품</Link>
      <br />
      <Link to='/product/2?search=productName&q=demo#test'>2번 상품 상세</Link>
    </div>
  );
}

export default Main;
