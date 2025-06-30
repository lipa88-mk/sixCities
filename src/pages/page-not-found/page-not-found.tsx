import { Link } from '@tanstack/react-router';
import './style.css';
import { FC } from 'react';

const PageNotFound: FC = () => (
  <main className='container-404'>
    <h1>404 Not Found</h1>
    <Link to={'/'} className='container-404__link'>Go back Home</Link>
  </main>
);

export default PageNotFound;
