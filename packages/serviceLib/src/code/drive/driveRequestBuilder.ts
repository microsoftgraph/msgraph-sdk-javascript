import {Drive} from '../models/microsoft/graph/';
import {BundlesRequestBuilder} from './bundles/';
import {DriveItemRequestBuilder as ie8bea6b11d1f30727646860f643cc8ca93e130741b786c53eea459ad3e60093b} from './bundles/item/';
import {FollowingRequestBuilder} from './following/';
import {DriveItemRequestBuilder as i570b4469af2630b8042d4c3c02a20fc8feed43969231f81b8fabf0aab6f90b38} from './following/item/';
import {ItemsRequestBuilder} from './items/';
import {DriveItemRequestBuilder as i39f4c37a1945f726045c398817c0a8671679990685a0bb40ecc54ef98865b9dc} from './items/item/';
import {ListRequestBuilder} from './list/';
import {RecentRequestBuilder} from './recent/';
import {RootRequestBuilder} from './root/';
import {SearchWithQRequestBuilder} from './searchWithQ/';
import {SharedWithMeRequestBuilder} from './sharedWithMe/';
import {SpecialRequestBuilder} from './special/';
import {DriveItemRequestBuilder as i85c2319a7bfd81fe6040d965db965e363b6f230dd117640d669ac516aca2e537} from './special/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /drive  */
export class DriveRequestBuilder {
    public get bundles(): BundlesRequestBuilder {
        return new BundlesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get following(): FollowingRequestBuilder {
        return new FollowingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get list(): ListRequestBuilder {
        return new ListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get root(): RootRequestBuilder {
        return new RootRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get special(): SpecialRequestBuilder {
        return new SpecialRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.drive.bundles.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public bundlesById(id: string) : ie8bea6b11d1f30727646860f643cc8ca93e130741b786c53eea459ad3e60093b {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new ie8bea6b11d1f30727646860f643cc8ca93e130741b786c53eea459ad3e60093b(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DriveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drive{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get drive
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
     * Update drive
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Drive | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Gets an item from the MicrosoftGraph.drive.following.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public followingById(id: string) : i570b4469af2630b8042d4c3c02a20fc8feed43969231f81b8fabf0aab6f90b38 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new i570b4469af2630b8042d4c3c02a20fc8feed43969231f81b8fabf0aab6f90b38(urlTplParams, this.requestAdapter);
    };
    /**
     * Get drive
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Drive>(requestInfo, Drive, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.drive.items.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public itemsById(id: string) : i39f4c37a1945f726045c398817c0a8671679990685a0bb40ecc54ef98865b9dc {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new i39f4c37a1945f726045c398817c0a8671679990685a0bb40ecc54ef98865b9dc(urlTplParams, this.requestAdapter);
    };
    /**
     * Update drive
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Drive | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /drive/microsoft.graph.recent()
     * @returns a recentRequestBuilder
     */
    public recent() : RecentRequestBuilder {
        return new RecentRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /drive/microsoft.graph.search(q='{q}')
     * @param q Usage: q={q}
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.pathParameters, this.requestAdapter, q);
    };
    /**
     * Builds and executes requests for operations under /drive/microsoft.graph.sharedWithMe()
     * @returns a sharedWithMeRequestBuilder
     */
    public sharedWithMe() : SharedWithMeRequestBuilder {
        return new SharedWithMeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.drive.special.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public specialById(id: string) : i85c2319a7bfd81fe6040d965db965e363b6f230dd117640d669ac516aca2e537 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new i85c2319a7bfd81fe6040d965db965e363b6f230dd117640d669ac516aca2e537(urlTplParams, this.requestAdapter);
    };
}
