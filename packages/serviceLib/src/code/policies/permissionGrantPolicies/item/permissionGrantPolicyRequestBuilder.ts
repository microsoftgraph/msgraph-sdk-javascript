import {PermissionGrantPolicy} from '../../../models/microsoft/graph/';
import {ExcludesRequestBuilder} from './excludes/';
import {PermissionGrantConditionSetRequestBuilder as i1f0d122c86c6a366301a7a1f8acdf8a5879068868b89385bdd599b13eea127e7} from './excludes/item/';
import {IncludesRequestBuilder} from './includes/';
import {PermissionGrantConditionSetRequestBuilder as i4280f13d3407b036727718d1949a7b7bd954a50589d9733ebb0fd70da149f81c} from './includes/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /policies/permissionGrantPolicies/{permissionGrantPolicy-id}  */
export class PermissionGrantPolicyRequestBuilder {
    public get excludes(): ExcludesRequestBuilder {
        return new ExcludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get includes(): IncludesRequestBuilder {
        return new IncludesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PermissionGrantPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/permissionGrantPolicies/{permissionGrantPolicy_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
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
     * The policy that specifies the conditions under which consent can be granted.
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
     * The policy that specifies the conditions under which consent can be granted.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: PermissionGrantPolicy | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * The policy that specifies the conditions under which consent can be granted.
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
     * Gets an item from the MicrosoftGraph.policies.permissionGrantPolicies.item.excludes.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantConditionSetRequestBuilder
     */
    public excludesById(id: string) : i1f0d122c86c6a366301a7a1f8acdf8a5879068868b89385bdd599b13eea127e7 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet_id"] = id
        return new i1f0d122c86c6a366301a7a1f8acdf8a5879068868b89385bdd599b13eea127e7(urlTplParams, this.requestAdapter);
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PermissionGrantPolicy
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PermissionGrantPolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<PermissionGrantPolicy>(requestInfo, PermissionGrantPolicy, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.permissionGrantPolicies.item.includes.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantConditionSetRequestBuilder
     */
    public includesById(id: string) : i4280f13d3407b036727718d1949a7b7bd954a50589d9733ebb0fd70da149f81c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet_id"] = id
        return new i4280f13d3407b036727718d1949a7b7bd954a50589d9733ebb0fd70da149f81c(urlTplParams, this.requestAdapter);
    };
    /**
     * The policy that specifies the conditions under which consent can be granted.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: PermissionGrantPolicy | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
