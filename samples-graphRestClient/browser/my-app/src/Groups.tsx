// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { useEffect, useState } from 'react';
import { MicrosoftGraphGroup } from "@microsoft/microsoft-graph-types";
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { AuthenticatedTemplate } from '@azure/msal-react';

import { getGroups } from './GraphService';
import { useAppContext } from './AppContext';

export default function Group() {
  const app = useAppContext();

  const [groups, setGroups] = useState<MicrosoftGraphGroup[]>();

  useEffect(() => {
    const loadEvents = async () => {
      if (app.user && !groups) {
        try {
          const groups = await getGroups(app.authProvider!);
          setGroups(groups);
        } catch (err) {
          const error = err as Error;
          app.displayError!(error.message);
        }
      }
    };

    loadEvents();
  });

  return (<>
    {groups?.map(g => (
        <div key={g.id}>{g.displayName}</div>
    ))}
</>);
  // </ReturnSnippet>
}
