import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { City } from './city';
import { cities } from '../../const';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';

describe('Component: City', () => {
  const history = createMemoryHistory();

  it('should be rendered correctly', () => {
    const onClick = jest.fn();

    render(
      <HistoryRouter history={history}>
        <City name={cities[0]} isActive onClick={onClick} />
      </HistoryRouter>
    );

    expect(screen.getByText(cities[0])).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('tabs__item--active');
  });

  it('onClick should be called when user has chosen a city', async () => {
    const onClick = jest.fn();

    render(
      <HistoryRouter history={history}>
        <City name={cities[0]} isActive={false} onClick={onClick} />
      </HistoryRouter>
    );

    await userEvent.click(screen.getByRole('link'));

    expect(onClick).toHaveBeenCalledWith(cities[0]);
  });
});
