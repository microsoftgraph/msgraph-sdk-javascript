import {Schedule} from '../../../models/microsoft/graph/';
import {OfferShiftRequestsRequestBuilder} from './offerShiftRequests/';
import {OfferShiftRequestRequestBuilder} from './offerShiftRequests/item/';
import {OpenShiftChangeRequestsRequestBuilder} from './openShiftChangeRequests/';
import {OpenShiftChangeRequestRequestBuilder} from './openShiftChangeRequests/item/';
import {OpenShiftsRequestBuilder} from './openShifts/';
import {OpenShiftRequestBuilder} from './openShifts/item/';
import {SchedulingGroupsRequestBuilder} from './schedulingGroups/';
import {SchedulingGroupRequestBuilder} from './schedulingGroups/item/';
import {ShareRequestBuilder} from './share/';
import {ShiftsRequestBuilder} from './shifts/';
import {ShiftRequestBuilder} from './shifts/item/';
import {SwapShiftsChangeRequestsRequestBuilder} from './swapShiftsChangeRequests/';
import {SwapShiftsChangeRequestRequestBuilder} from './swapShiftsChangeRequests/item/';
import {TimeOffReasonsRequestBuilder} from './timeOffReasons/';
import {TimeOffReasonRequestBuilder} from './timeOffReasons/item/';
import {TimeOffRequestsRequestBuilder} from './timeOffRequests/';
import {TimeOffRequestRequestBuilder} from './timeOffRequests/item/';
import {TimesOffRequestBuilder} from './timesOff/';
import {TimeOffRequestBuilder} from './timesOff/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /teams/{team-id}/schedule  */
export class ScheduleRequestBuilder {
    public get offerShiftRequests(): OfferShiftRequestsRequestBuilder {
        return new OfferShiftRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get openShiftChangeRequests(): OpenShiftChangeRequestsRequestBuilder {
        return new OpenShiftChangeRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get openShifts(): OpenShiftsRequestBuilder {
        return new OpenShiftsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get schedulingGroups(): SchedulingGroupsRequestBuilder {
        return new SchedulingGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get share(): ShareRequestBuilder {
        return new ShareRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get shifts(): ShiftsRequestBuilder {
        return new ShiftsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get swapShiftsChangeRequests(): SwapShiftsChangeRequestsRequestBuilder {
        return new SwapShiftsChangeRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get timeOffReasons(): TimeOffReasonsRequestBuilder {
        return new TimeOffReasonsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get timeOffRequests(): TimeOffRequestsRequestBuilder {
        return new TimeOffRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get timesOff(): TimesOffRequestBuilder {
        return new TimesOffRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ScheduleRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/teams/{team_id}/schedule{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The schedule of shifts for this team.
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
     * The schedule of shifts for this team.
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
     * The schedule of shifts for this team.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Schedule | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * The schedule of shifts for this team.
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
     * The schedule of shifts for this team.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Schedule
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Schedule | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Schedule>(requestInfo, Schedule, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.offerShiftRequests.item collection
     * @param id Unique identifier of the item
     * @returns a offerShiftRequestRequestBuilder
     */
    public offerShiftRequestsById(id: string) : OfferShiftRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["offerShiftRequest_id"] = id
        return new OfferShiftRequestRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.openShiftChangeRequests.item collection
     * @param id Unique identifier of the item
     * @returns a openShiftChangeRequestRequestBuilder
     */
    public openShiftChangeRequestsById(id: string) : OpenShiftChangeRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShiftChangeRequest_id"] = id
        return new OpenShiftChangeRequestRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.openShifts.item collection
     * @param id Unique identifier of the item
     * @returns a openShiftRequestBuilder
     */
    public openShiftsById(id: string) : OpenShiftRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShift_id"] = id
        return new OpenShiftRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The schedule of shifts for this team.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Schedule | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.schedulingGroups.item collection
     * @param id Unique identifier of the item
     * @returns a schedulingGroupRequestBuilder
     */
    public schedulingGroupsById(id: string) : SchedulingGroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schedulingGroup_id"] = id
        return new SchedulingGroupRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.shifts.item collection
     * @param id Unique identifier of the item
     * @returns a shiftRequestBuilder
     */
    public shiftsById(id: string) : ShiftRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["shift_id"] = id
        return new ShiftRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.swapShiftsChangeRequests.item collection
     * @param id Unique identifier of the item
     * @returns a swapShiftsChangeRequestRequestBuilder
     */
    public swapShiftsChangeRequestsById(id: string) : SwapShiftsChangeRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["swapShiftsChangeRequest_id"] = id
        return new SwapShiftsChangeRequestRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.timeOffReasons.item collection
     * @param id Unique identifier of the item
     * @returns a timeOffReasonRequestBuilder
     */
    public timeOffReasonsById(id: string) : TimeOffReasonRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffReason_id"] = id
        return new TimeOffReasonRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.timeOffRequests.item collection
     * @param id Unique identifier of the item
     * @returns a timeOffRequestRequestBuilder
     */
    public timeOffRequestsById(id: string) : TimeOffRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffRequest_id"] = id
        return new TimeOffRequestRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item.schedule.timesOff.item collection
     * @param id Unique identifier of the item
     * @returns a timeOffRequestBuilder
     */
    public timesOffById(id: string) : TimeOffRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOff_id"] = id
        return new TimeOffRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
