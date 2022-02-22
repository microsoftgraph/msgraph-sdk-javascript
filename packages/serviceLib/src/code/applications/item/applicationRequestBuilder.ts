import {Application} from '../../models/microsoft/graph/';
import {AddKeyRequestBuilder} from './addKey/';
import {AddPasswordRequestBuilder} from './addPassword/';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/';
import {CreatedOnBehalfOfRequestBuilder} from './createdOnBehalfOf/';
import {ExtensionPropertiesRequestBuilder} from './extensionProperties/';
import {ExtensionPropertyRequestBuilder} from './extensionProperties/item/';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/';
import {LogoRequestBuilder} from './logo/';
import {OwnersRequestBuilder} from './owners/';
import {RemoveKeyRequestBuilder} from './removeKey/';
import {RemovePasswordRequestBuilder} from './removePassword/';
import {RestoreRequestBuilder} from './restore/';
import {SetVerifiedPublisherRequestBuilder} from './setVerifiedPublisher/';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/';
import {UnsetVerifiedPublisherRequestBuilder} from './unsetVerifiedPublisher/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /applications/{application-id}  */
export class ApplicationRequestBuilder {
    public get addKey(): AddKeyRequestBuilder {
        return new AddKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get addPassword(): AddPasswordRequestBuilder {
        return new AddPasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get extensionProperties(): ExtensionPropertiesRequestBuilder {
        return new ExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get logo(): LogoRequestBuilder {
        return new LogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get removeKey(): RemoveKeyRequestBuilder {
        return new RemoveKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get removePassword(): RemovePasswordRequestBuilder {
        return new RemovePasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get setVerifiedPublisher(): SetVerifiedPublisherRequestBuilder {
        return new SetVerifiedPublisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unsetVerifiedPublisher(): UnsetVerifiedPublisherRequestBuilder {
        return new UnsetVerifiedPublisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ApplicationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/applications/{application_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from applications
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
     * Get entity from applications by key
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
     * Update entity in applications
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Application | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Delete entity from applications
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
     * Gets an item from the MicrosoftGraph.applications.item.extensionProperties.item collection
     * @param id Unique identifier of the item
     * @returns a extensionPropertyRequestBuilder
     */
    public extensionPropertiesById(id: string) : ExtensionPropertyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extensionProperty_id"] = id
        return new ExtensionPropertyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get entity from applications by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Application
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Application | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Application>(requestInfo, Application, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update entity in applications
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Application | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
