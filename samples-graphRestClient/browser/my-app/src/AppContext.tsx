// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, {
  useContext,
  createContext,
  useState,
  MouseEventHandler,
  useEffect
} from 'react';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';

import { getUser } from './GraphService';
import config from './Config';
import { SimpleAuthenticationProvider } from '@microsoft/microsoft-graph-client';
import { get } from 'https';

// <AppContextSnippet>
export interface AppUser {
  displayName?: string,
  email?: string,
  avatar?: string,
  timeZone?: string,
  timeFormat?: string
};

export interface AppError {
  message: string,
  debug?: string
};

type AppContext = {
  user?: AppUser;
  error?: AppError;
  signIn?: MouseEventHandler<HTMLElement>;
  signOut?: MouseEventHandler<HTMLElement>;
  displayError?: Function;
  clearError?: Function;
  authProvider?: SimpleAuthenticationProvider;
}

const appContext = createContext<AppContext>({
  user: undefined,
  error: undefined,
  signIn: undefined,
  signOut: undefined,
  displayError: undefined,
  clearError: undefined,
  authProvider: undefined
});

export function useAppContext(): AppContext {
  return useContext(appContext);
}

interface ProvideAppContextProps {
  children: React.ReactNode;
}

export default function ProvideAppContext({ children }: ProvideAppContextProps) {
  const auth = useProvideAppContext();
  return (
    <appContext.Provider value={auth}>
      {children}
    </appContext.Provider>
  );
}
// </AppContextSnippet>

function useProvideAppContext() {
  const msal = useMsal();
  const [user, setUser] = useState<AppUser | undefined>(undefined);
  const [error, setError] = useState<AppError | undefined>(undefined);

  const displayError = (message: string, debug?: string) => {
    setError({ message, debug });
  }

  const clearError = () => {
    setError(undefined);
  }

  // <AuthProviderSnippet>
  // Used by the Graph SDK to authenticate API calls
  const authProvider = new SimpleAuthenticationProvider( async() => {return getAccessToken()});
  // </AuthProviderSnippet>

  async function getAccessToken(){
    
    try {
        const scopes = config.scopes;
        const accounts = msal.instance
          .getAllAccounts();

        if (accounts.length <= 0) throw new Error('login_required');
        // Get the access token silently
        // If the cache contains a non-expired token, this function
        // will just return the cached token. Otherwise, it will
        // make a request to the Azure OAuth endpoint to get a token
        var silentResult = await msal.instance
          .acquireTokenSilent({
            scopes: scopes,
            account: msal.instance.getActiveAccount()!,
          });

        return silentResult.accessToken;
      } catch (err) {
          throw err;
      }
  }
  
  // <UseEffectSnippet>
  useEffect(() => {
    const checkUser = async () => {
      if (!user) {
        try {
          // Check if user is already signed in
          const account = msal.instance.getActiveAccount();
          if (account) {
            // Get the user from Microsoft Graph
            const user = await getUser(authProvider);

            setUser({
              displayName: user.displayName || '',
              email: user.mail || user.userPrincipalName || '',
              timeFormat: user.mailboxSettings?.timeFormat || 'h:mm a',
              timeZone: user.mailboxSettings?.timeZone || 'UTC'
            });
          }
        } catch (err: any) {
          displayError(err.message);
        }
      }
    };
    checkUser();
  });
  // </UseEffectSnippet>

  // <SignInSnippet>
  const signIn = async () => {
    await msal.instance.loginPopup({
      scopes: config.scopes,
      prompt: 'select_account'
    });

    // Get the user from Microsoft Graph
    const user = await getUser(authProvider);

    setUser({
      displayName: user.displayName || '',
      email: user.mail || user.userPrincipalName || '',
      timeFormat: user.mailboxSettings?.timeFormat || '',
      timeZone: user.mailboxSettings?.timeZone || 'UTC'
    });
  };
  // </SignInSnippet>

  // <SignOutSnippet>
  const signOut = async () => {
    await msal.instance.logoutPopup();
    setUser(undefined);
  };
  // </SignOutSnippet>

  return {
    user,
    error,
    signIn,
    signOut,
    displayError,
    clearError,
    authProvider
  };
}
