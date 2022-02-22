import {AuditLogRoot} from '../models/microsoft/graph/';
import {DirectoryAuditsRequestBuilder} from './directoryAudits/';
import {DirectoryAuditRequestBuilder} from './directoryAudits/item/';
import {ProvisioningRequestBuilder} from './provisioning/';
import {ProvisioningObjectSummaryRequestBuilder} from './provisioning/item/';
import {RestrictedSignInsRequestBuilder} from './restrictedSignIns/';
import {RestrictedSignInRequestBuilder} from './restrictedSignIns/item/';
import {SignInsRequestBuilder} from './signIns/';
import {SignInRequestBuilder} from './signIns/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /auditLogs  */
export class AuditLogsRequestBuilder {
    public get directoryAudits(): DirectoryAuditsRequestBuilder {
        return new DirectoryAuditsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get provisioning(): ProvisioningRequestBuilder {
        return new ProvisioningRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get restrictedSignIns(): RestrictedSignInsRequestBuilder {
        return new RestrictedSignInsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get signIns(): SignInsRequestBuilder {
        return new SignInsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AuditLogsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/auditLogs{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get auditLogs
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
     * Update auditLogs
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AuditLogRoot | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Gets an item from the MicrosoftGraph.auditLogs.directoryAudits.item collection
     * @param id Unique identifier of the item
     * @returns a directoryAuditRequestBuilder
     */
    public directoryAuditsById(id: string) : DirectoryAuditRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryAudit_id"] = id
        return new DirectoryAuditRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get auditLogs
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuditLogRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuditLogRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<AuditLogRoot>(requestInfo, AuditLogRoot, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update auditLogs
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: AuditLogRoot | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.auditLogs.provisioning.item collection
     * @param id Unique identifier of the item
     * @returns a provisioningObjectSummaryRequestBuilder
     */
    public provisioningById(id: string) : ProvisioningObjectSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["provisioningObjectSummary_id"] = id
        return new ProvisioningObjectSummaryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.auditLogs.restrictedSignIns.item collection
     * @param id Unique identifier of the item
     * @returns a restrictedSignInRequestBuilder
     */
    public restrictedSignInsById(id: string) : RestrictedSignInRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["restrictedSignIn_id"] = id
        return new RestrictedSignInRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.auditLogs.signIns.item collection
     * @param id Unique identifier of the item
     * @returns a signInRequestBuilder
     */
    public signInsById(id: string) : SignInRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["signIn_id"] = id
        return new SignInRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
