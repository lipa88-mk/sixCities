import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginScreen from './login-screen';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';


const mockStore = configureMockStore();

describe('LoginScreen page is rendered', () => {
  it('should render the LoginScreen when user navigate to "login" url', async () => {
    const history = createMemoryHistory();
    history.push('/login');
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <LoginScreen />
        </HistoryRouter>
      </Provider>
    );

    const title = screen.getByRole('heading', {name: /Sign in/i});
    expect(title).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/E-mail/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');

    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');

    const submitButton = screen.getByRole('button', {name: /Sign in/i});
    expect(submitButton).toBeInTheDocument();

    await userEvent.type(emailInput, 'fakelogin');
    await userEvent.type(passwordInput, '123456');

    expect(screen.getByDisplayValue(/fakelogin/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
