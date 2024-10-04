import { Link } from 'react-router-dom';

export default function task() {
  return (
    <>
      <div>this is task page</div>
      <Link to="/home">go home</Link>
    </>
  );
}
