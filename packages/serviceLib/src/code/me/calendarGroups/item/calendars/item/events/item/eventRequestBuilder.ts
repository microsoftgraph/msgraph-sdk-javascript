import {Event} from '../../../../../../../models/microsoft/graph/';
import {AcceptRequestBuilder} from './accept/';
import {AttachmentsRequestBuilder} from './attachments/';
import {AttachmentRequestBuilder} from './attachments/item/';
import {CalendarRequestBuilder} from './calendar/';
import {CancelRequestBuilder} from './cancel/';
import {DeclineRequestBuilder} from './decline/';
import {DismissReminderRequestBuilder} from './dismissReminder/';
import {ExtensionsRequestBuilder} from './extensions/';
import {ExtensionRequestBuilder} from './extensions/item/';
import {ForwardRequestBuilder} from './forward/';
import {InstancesRequestBuilder} from './instances/';
import {EventRequestBuilder as ic53b043d6cce9b9ffc3c5b32bc8ee772ef57d108e141426c6c0c06a281081796} from './instances/item/';
import {MultiValueExtendedPropertiesRequestBuilder} from './multiValueExtendedProperties/';
import {MultiValueLegacyExtendedPropertyRequestBuilder} from './multiValueExtendedProperties/item/';
import {SingleValueExtendedPropertiesRequestBuilder} from './singleValueExtendedProperties/';
import {SingleValueLegacyExtendedPropertyRequestBuilder} from './singleValueExtendedProperties/item/';
import {SnoozeReminderRequestBuilder} from './snoozeReminder/';
import {TentativelyAcceptRequestBuilder} from './tentativelyAccept/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}  */
export class EventRequestBuilder {
    public get accept(): AcceptRequestBuilder {
        return new AcceptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get decline(): DeclineRequestBuilder {
        return new DeclineRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dismissReminder(): DismissReminderRequestBuilder {
        return new DismissReminderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get forward(): ForwardRequestBuilder {
        return new ForwardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get instances(): InstancesRequestBuilder {
        return new InstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get snoozeReminder(): SnoozeReminderRequestBuilder {
        return new SnoozeReminderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tentativelyAccept(): TentativelyAcceptRequestBuilder {
        return new TentativelyAcceptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.me.calendarGroups.item.calendars.item.events.item.attachments.item collection
     * @param id Unique identifier of the item
     * @returns a attachmentRequestBuilder
     */
    public attachmentsById(id: string) : AttachmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attachment_id"] = id
        return new AttachmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EventRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/calendarGroups/{calendarGroup_id}/calendars/{calendar_id}/events/{event_id}{?select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Event | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.calendarGroups.item.calendars.item.events.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionRequestBuilder
     */
    public extensionsById(id: string) : ExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension_id"] = id
        return new ExtensionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Event
     */
    public get(q?: {
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Event | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Event>(requestInfo, Event, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.calendarGroups.item.calendars.item.events.item.instances.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public instancesById(id: string) : ic53b043d6cce9b9ffc3c5b32bc8ee772ef57d108e141426c6c0c06a281081796 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id1"] = id
        return new ic53b043d6cce9b9ffc3c5b32bc8ee772ef57d108e141426c6c0c06a281081796(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.calendarGroups.item.calendars.item.events.item.multiValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a multiValueLegacyExtendedPropertyRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: string) : MultiValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["multiValueLegacyExtendedProperty_id"] = id
        return new MultiValueLegacyExtendedPropertyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The events in the calendar. Navigation property. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Event | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.me.calendarGroups.item.calendars.item.events.item.singleValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a singleValueLegacyExtendedPropertyRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: string) : SingleValueLegacyExtendedPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["singleValueLegacyExtendedProperty_id"] = id
        return new SingleValueLegacyExtendedPropertyRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
