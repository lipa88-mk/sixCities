import Logo from './logo';
import { render, screen } from '@testing-library/react';

describe('Component: Logo', () => {
  it('should be rendered correctly', () => {
    render(<Logo />);
    expect(screen.getByRole('link')).toHaveClass('header__logo-link');
    expect(screen.getByRole('img')).toHaveClass('header__logo');
  });
});
