import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SortingList } from './sorting-list';
import { Sorting } from '../../const';

describe('Application Routing', () => {
  const onChange = jest.fn();
  it('should render current sorting', ()=>{
    const fakeComponent = <SortingList currentSorting={Sorting.Popular} onChange={onChange}/>;
    render(fakeComponent);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getAllByText(Sorting.Popular)).toHaveLength(2);
    expect(screen.getByText(Sorting.PriseHightToLow)).toBeInTheDocument();
    expect(screen.getByText(Sorting.PriseLowToHight)).toBeInTheDocument();
    expect(screen.getByText(Sorting.Rating)).toBeInTheDocument();
  });

  it('should be able to change sorting', async ()=>{
    const fakeComponent = <SortingList currentSorting={Sorting.Popular} onChange={onChange}/>;
    render(fakeComponent);
    expect(screen.getByTestId('sorting-list')).not.toHaveClass('places__options--opened');

    await userEvent.click(screen.getByTestId('sorting-type'));
    expect(screen.getByTestId('sorting-list')).toHaveClass('places__options--opened');

    await userEvent.click(screen.getByTestId('sorting-option-Rating'));
    expect(screen.getByTestId('sorting-list')).not.toHaveClass('places__options--opened');
    expect(screen.getByText(Sorting.Rating)).toBeInTheDocument();
  });
});
