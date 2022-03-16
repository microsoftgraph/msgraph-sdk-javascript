import {IdentityContainer} from '../models/microsoft/graph/';
import {createIdentityContainerFromDiscriminatorValue} from '../models/microsoft/graph/createIdentityContainerFromDiscriminatorValue';
import {ODataError} from '../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ApiConnectorsRequestBuilder} from './apiConnectors/apiConnectorsRequestBuilder';
import {IdentityApiConnectorItemRequestBuilder} from './apiConnectors/item/identityApiConnectorItemRequestBuilder';
import {B2xUserFlowsRequestBuilder} from './b2xUserFlows/b2xUserFlowsRequestBuilder';
import {B2xIdentityUserFlowItemRequestBuilder} from './b2xUserFlows/item/b2xIdentityUserFlowItemRequestBuilder';
import {ConditionalAccessRequestBuilder} from './conditionalAccess/conditionalAccessRequestBuilder';
import {IdentityProvidersRequestBuilder} from './identityProviders/identityProvidersRequestBuilder';
import {IdentityProviderBaseItemRequestBuilder} from './identityProviders/item/identityProviderBaseItemRequestBuilder';
import {IdentityUserFlowAttributeItemRequestBuilder} from './userFlowAttributes/item/identityUserFlowAttributeItemRequestBuilder';
import {UserFlowAttributesRequestBuilder} from './userFlowAttributes/userFlowAttributesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton.  */
export class IdentityRequestBuilder {
    public get apiConnectors(): ApiConnectorsRequestBuilder {
        return new ApiConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get b2xUserFlows(): B2xUserFlowsRequestBuilder {
        return new B2xUserFlowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get conditionalAccess(): ConditionalAccessRequestBuilder {
        return new ConditionalAccessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get userFlowAttributes(): UserFlowAttributesRequestBuilder {
        return new UserFlowAttributesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.identity.apiConnectors.item collection
     * @param id Unique identifier of the item
     * @returns a identityApiConnectorItemRequestBuilder
     */
    public apiConnectorsById(id: string) : IdentityApiConnectorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityApiConnector_id"] = id
        return new IdentityApiConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identity.b2xUserFlows.item collection
     * @param id Unique identifier of the item
     * @returns a b2xIdentityUserFlowItemRequestBuilder
     */
    public b2xUserFlowsById(id: string) : B2xIdentityUserFlowItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["b2xIdentityUserFlow_id"] = id
        return new B2xIdentityUserFlowItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IdentityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get identity
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
     * Update identity
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: IdentityContainer | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Get identity
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityContainer
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityContainer | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IdentityContainer>(requestInfo, createIdentityContainerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.identity.identityProviders.item collection
     * @param id Unique identifier of the item
     * @returns a identityProviderBaseItemRequestBuilder
     */
    public identityProvidersById(id: string) : IdentityProviderBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProviderBase_id"] = id
        return new IdentityProviderBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update identity
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: IdentityContainer | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.identity.userFlowAttributes.item collection
     * @param id Unique identifier of the item
     * @returns a identityUserFlowAttributeItemRequestBuilder
     */
    public userFlowAttributesById(id: string) : IdentityUserFlowAttributeItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityUserFlowAttribute_id"] = id
        return new IdentityUserFlowAttributeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
