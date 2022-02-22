import {CloudCommunications} from '../models/microsoft/graph/';
import {CallRecordsRequestBuilder} from './callRecords/';
import {CallRecordRequestBuilder} from './callRecords/item/';
import {CallsRequestBuilder} from './calls/';
import {CallRequestBuilder} from './calls/item/';
import {GetPresencesByUserIdRequestBuilder} from './getPresencesByUserId/';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/';
import {OnlineMeetingRequestBuilder} from './onlineMeetings/item/';
import {PresencesRequestBuilder} from './presences/';
import {PresenceRequestBuilder} from './presences/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /communications  */
export class CommunicationsRequestBuilder {
    public get callRecords(): CallRecordsRequestBuilder {
        return new CallRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calls(): CallsRequestBuilder {
        return new CallsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getPresencesByUserId(): GetPresencesByUserIdRequestBuilder {
        return new GetPresencesByUserIdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get presences(): PresencesRequestBuilder {
        return new PresencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.communications.callRecords.item collection
     * @param id Unique identifier of the item
     * @returns a callRecordRequestBuilder
     */
    public callRecordsById(id: string) : CallRecordRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["callRecord_id"] = id
        return new CallRecordRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.communications.calls.item collection
     * @param id Unique identifier of the item
     * @returns a callRequestBuilder
     */
    public callsById(id: string) : CallRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["call_id"] = id
        return new CallRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CommunicationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get communications
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
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
     * Update communications
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: CloudCommunications | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Get communications
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CloudCommunications
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CloudCommunications | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<CloudCommunications>(requestInfo, CloudCommunications, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.communications.onlineMeetings.item collection
     * @param id Unique identifier of the item
     * @returns a onlineMeetingRequestBuilder
     */
    public onlineMeetingsById(id: string) : OnlineMeetingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onlineMeeting_id"] = id
        return new OnlineMeetingRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update communications
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: CloudCommunications | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.communications.presences.item collection
     * @param id Unique identifier of the item
     * @returns a presenceRequestBuilder
     */
    public presencesById(id: string) : PresenceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["presence_id"] = id
        return new PresenceRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
