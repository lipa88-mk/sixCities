import { Link } from 'react-router-dom';
import './style.css';

const Page404 = (): JSX.Element => (
  <main className='container-404'>
    <h1>Page is missing</h1>
    <Link to={'/'} className='container-404__link'>Go back Home</Link>
  </main>
);

export {Page404};
