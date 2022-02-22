import {Drive} from '../../models/microsoft/graph/';
import {BundlesRequestBuilder} from './bundles/';
import {DriveItemRequestBuilder as i200ee4aa0b3270068ff41ce809c7d544d8d5bdace98f673a1cfa393cff41f350} from './bundles/item/';
import {FollowingRequestBuilder} from './following/';
import {DriveItemRequestBuilder as i74d729607018f40d36255a23cd27e048d556bb48afc5634632c1f5ed07ea128e} from './following/item/';
import {ItemsRequestBuilder} from './items/';
import {DriveItemRequestBuilder as i198930de9845340c245b355bfa9024fabefc33dd90e4e3bcb5a6d98e5ea02d8c} from './items/item/';
import {ListRequestBuilder} from './list/';
import {RecentRequestBuilder} from './recent/';
import {RootRequestBuilder} from './root/';
import {SearchWithQRequestBuilder} from './searchWithQ/';
import {SharedWithMeRequestBuilder} from './sharedWithMe/';
import {SpecialRequestBuilder} from './special/';
import {DriveItemRequestBuilder as i75e44cde69433edf45de21c607c9da6c7ce3ee13dbaab0a0ab8582b904cb2edb} from './special/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /drives/{drive-id}  */
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
     * Gets an item from the MicrosoftGraph.drives.item.bundles.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public bundlesById(id: string) : i200ee4aa0b3270068ff41ce809c7d544d8d5bdace98f673a1cfa393cff41f350 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new i200ee4aa0b3270068ff41ce809c7d544d8d5bdace98f673a1cfa393cff41f350(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DriveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drives/{drive_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from drives
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
     * Get entity from drives by key
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
     * Update entity in drives
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
     * Delete entity from drives
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
     * Gets an item from the MicrosoftGraph.drives.item.following.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public followingById(id: string) : i74d729607018f40d36255a23cd27e048d556bb48afc5634632c1f5ed07ea128e {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new i74d729607018f40d36255a23cd27e048d556bb48afc5634632c1f5ed07ea128e(urlTplParams, this.requestAdapter);
    };
    /**
     * Get entity from drives by key
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
     * Gets an item from the MicrosoftGraph.drives.item.items.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public itemsById(id: string) : i198930de9845340c245b355bfa9024fabefc33dd90e4e3bcb5a6d98e5ea02d8c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new i198930de9845340c245b355bfa9024fabefc33dd90e4e3bcb5a6d98e5ea02d8c(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in drives
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
     * Builds and executes requests for operations under /drives/{drive-id}/microsoft.graph.recent()
     * @returns a recentRequestBuilder
     */
    public recent() : RecentRequestBuilder {
        return new RecentRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /drives/{drive-id}/microsoft.graph.search(q='{q}')
     * @param q Usage: q={q}
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.pathParameters, this.requestAdapter, q);
    };
    /**
     * Builds and executes requests for operations under /drives/{drive-id}/microsoft.graph.sharedWithMe()
     * @returns a sharedWithMeRequestBuilder
     */
    public sharedWithMe() : SharedWithMeRequestBuilder {
        return new SharedWithMeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.drives.item.special.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public specialById(id: string) : i75e44cde69433edf45de21c607c9da6c7ce3ee13dbaab0a0ab8582b904cb2edb {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new i75e44cde69433edf45de21c607c9da6c7ce3ee13dbaab0a0ab8582b904cb2edb(urlTplParams, this.requestAdapter);
    };
}
