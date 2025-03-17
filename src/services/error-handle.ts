import { store } from '../store';
import { clearErrorAction } from '../store/action';
import { setError } from '../store/site-process/site-process';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
