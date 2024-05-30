import { Link } from 'react-router-dom';
import './style.css';

const PageNotFound = (): JSX.Element => (
  <main className='container-404'>
    <h1>404 Not Found</h1>
    <Link to={'/'} className='container-404__link'>Go back Home</Link>
  </main>
);

export {PageNotFound};
