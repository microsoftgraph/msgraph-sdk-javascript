import { assert } from 'chai'

import { Event } from '@microsoft/microsoft-graph-types'

import { getClient, randomString } from "./test-helper"

declare const describe, it;

describe('Delta Query', function() {
  this.timeout(10*1000);
  let today = new Date();
  let tomorrow = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000);
  let nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  let deltaLink:string;

  let mockEvent:Event = {
    "originalStartTimeZone": tomorrow.toISOString(),
    "originalEndTimeZone": tomorrow.toISOString(),
    "reminderMinutesBeforeStart": 99,
    "isReminderOn": true,
    "subject": randomString()
  }


  it('Gets the delta link for the initial calendar view list', function() {
    return getClient()
      .api("/me/calendarview/delta")
      .query({
        "startdatetime" : today.toISOString(),
        "enddatetime": nextWeek.toISOString()
      })
      .version("beta")
      .get()
      .then((res) => {
        return getClient()
          .api(res['@odata.nextLink'])
          .get()
          .then((pageTwoRes) => {
            deltaLink = pageTwoRes['@odata.deltaLink'];
          });
      });
  });

  it('Creates a calendar event to see changes in the delta response', function() {
    return getClient()
      .api('/me/events')
      .post(mockEvent);
  });

  it('Uses delta token to see changed calendar view', function() {
    return getClient()
      .api(deltaLink)
      .get()
      .then((res) => {
        let events:Event[] = res.value;
        for (let event of events) {
          if (event.subject == mockEvent.subject) {
            return Promise.resolve();
          }
        }
        throw "Didn't find created event when using delta token";
      })
  });
});