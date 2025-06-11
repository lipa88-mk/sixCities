import './style.css';
import { FC } from 'react';

const PageNotFound: FC = () => (
  <main className='container-404'>
    <h1>404 Not Found</h1>
    <a href={'/'} className='container-404__link'>Go back Home</a>
  </main>
);

export default PageNotFound;
