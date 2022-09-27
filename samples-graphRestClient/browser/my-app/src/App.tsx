// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { MsalProvider } from '@azure/msal-react'
import { IPublicClientApplication } from '@azure/msal-browser';

import ProvideAppContext from './AppContext';
import ErrorMessage from './ErrorMessage';
import NavBar from './NavBar';
import Welcome from './Welcome';
import Group from './Groups';
import 'bootstrap/dist/css/bootstrap.css';

// <AppPropsSnippet>
type AppProps = {
  pca: IPublicClientApplication
};
// </AppPropsSnippet>

export default function App({ pca }: AppProps): JSX.Element {
  return (
    <MsalProvider instance={pca}>
      <ProvideAppContext>
        <Router>
          <NavBar />
          <Container>
            <ErrorMessage />
            <Routes>
              <Route path="/"
                element={
                  <Welcome />
                } />
              <Route path="/group"
                element={
                  <Group />
                } />
            </Routes>
          </Container>
        </Router>
      </ProvideAppContext>
    </MsalProvider>
  );
}
