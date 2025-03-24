import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { expect, test } from 'vitest';
import App from './App';
import { store } from './app/store';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeTruthy();
});
