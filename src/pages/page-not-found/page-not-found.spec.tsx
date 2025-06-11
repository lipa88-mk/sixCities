import {render, screen} from '@testing-library/react';
import NotFoundScreen from './page-not-found';

describe('PageNotFound component is rendered', () => {

  it('should render the PageNotFound component', () => {
    render(
      <NotFoundScreen />
    );
    const heading = screen.getByRole('heading', {name: /404 Not Found/i});
    expect(heading).toBeInTheDocument();
    const link = screen.getByRole('link', {name: /Go back Home/i});
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
