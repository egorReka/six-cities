import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>Page not found</p>
      <Link to="/">Back to main page</Link>
    </>
  );
}

export default NotFound;
