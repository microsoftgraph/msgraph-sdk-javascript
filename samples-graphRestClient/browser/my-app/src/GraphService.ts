// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <GetUserSnippet>
import { Client, getGraphRestSDKClient, GraphRequestOptions, GraphRestSDKClient, PageCollection, PageIterator, SimpleAuthenticationProvider,QueryOptions } from '@microsoft/microsoft-graph-client';
import { MicrosoftGraphUser, MicrosoftGraphGroup } from "@microsoft/microsoft-graph-types"
import '@microsoft/microsoft-graph-client/users';
import "@microsoft/microsoft-graph-client/groups/group";

let graphRestClient: GraphRestSDKClient | undefined = undefined;

function ensureClient(authProvider: SimpleAuthenticationProvider) {
  if (!graphRestClient) {
    const client = Client.init({
      authProvider,
    });
    graphRestClient = getGraphRestSDKClient(client);
  }

  return  graphRestClient;
}

export async function getUser(authProvider: SimpleAuthenticationProvider): Promise<MicrosoftGraphUser> {
  ensureClient(authProvider);

  // Return the /me API endpoint result as a User object
  const user = await graphRestClient!.api('/me').get();

  return user;
}
// </GetUserSnippet>


export async function getGroups(authProvider: SimpleAuthenticationProvider): Promise<MicrosoftGraphGroup[]> {
    ensureClient(authProvider);
  
    // Return the /me API endpoint result as a User object
    const group = await graphRestClient!.api('/groups').get();
  
    return group.value!;
  }

// <GetUserWeekCalendarSnippet>

// </GetUserWeekCalendarSnippet>

// <CreateEventSnippet>
// export async function createEvent(authProvider: SimpleAuthenticationProvider,
//   newEvent: Event): Promise<MicrosoftGraphEvent> {
//   ensureClient(authProvider);

//   // POST /me/events
//   // JSON representation of the new event is sent in the
//   // request body
//   return await graphRestClient!
//     .api('/me/events')
//     .post(newEvent);
// }
// // </CreateEventSnippet>
