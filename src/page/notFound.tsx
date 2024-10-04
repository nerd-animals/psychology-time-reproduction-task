import { Link } from 'react-router-dom';

export default function notFound() {
  return (
    <>
      <div>this is not found page</div>
      <Link to="/home">go home</Link>
    </>
  );
}
