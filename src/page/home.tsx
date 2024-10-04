import { Link } from 'react-router-dom';

export default function home() {
  return (
    <>
      <div>this is home</div>
      <Link to="/task">main task</Link>
      <Link to="/setting">setting</Link>
    </>
  );
}
