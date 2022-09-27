// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import App from './App';

describe('Basic render tests', () => {
  let pca: PublicClientApplication;

  beforeEach(() => {
    pca = new PublicClientApplication({
      auth: {
        clientId: ''
      }
    });

    jest.spyOn(pca, 'addEventCallback').mockImplementation((fn) => {
      return '';
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders welcome page', async () => {
    await act(async () => { // eslint-disable-line
      render(<App pca={pca} />);
    });

    const titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(/React Graph Tutorial/i);
  });
});
