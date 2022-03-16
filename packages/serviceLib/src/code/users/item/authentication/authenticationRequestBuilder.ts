import {Authentication} from '../../../models/microsoft/graph/';
import {createAuthenticationFromDiscriminatorValue} from '../../../models/microsoft/graph/createAuthenticationFromDiscriminatorValue';
import {ODataError} from '../../../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {Fido2MethodsRequestBuilder} from './fido2Methods/fido2MethodsRequestBuilder';
import {Fido2AuthenticationMethodItemRequestBuilder} from './fido2Methods/item/fido2AuthenticationMethodItemRequestBuilder';
import {AuthenticationMethodItemRequestBuilder} from './methods/item/authenticationMethodItemRequestBuilder';
import {MethodsRequestBuilder} from './methods/methodsRequestBuilder';
import {MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder} from './microsoftAuthenticatorMethods/item/microsoftAuthenticatorAuthenticationMethodItemRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilder} from './microsoftAuthenticatorMethods/microsoftAuthenticatorMethodsRequestBuilder';
import {WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder} from './windowsHelloForBusinessMethods/item/windowsHelloForBusinessAuthenticationMethodItemRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilder} from './windowsHelloForBusinessMethods/windowsHelloForBusinessMethodsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authentication property of the microsoft.graph.user entity.  */
export class AuthenticationRequestBuilder {
    public get fido2Methods(): Fido2MethodsRequestBuilder {
        return new Fido2MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get methods(): MethodsRequestBuilder {
        return new MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get microsoftAuthenticatorMethods(): MicrosoftAuthenticatorMethodsRequestBuilder {
        return new MicrosoftAuthenticatorMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get windowsHelloForBusinessMethods(): WindowsHelloForBusinessMethodsRequestBuilder {
        return new WindowsHelloForBusinessMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/authentication{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property authentication for users
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
     * Get authentication from users
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
     * Update the navigation property authentication in users
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Authentication | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Delete navigation property authentication for users
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.authentication.fido2Methods.item collection
     * @param id Unique identifier of the item
     * @returns a fido2AuthenticationMethodItemRequestBuilder
     */
    public fido2MethodsById(id: string) : Fido2AuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["fido2AuthenticationMethod_id"] = id
        return new Fido2AuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get authentication from users
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Authentication | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Authentication>(requestInfo, createAuthenticationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.authentication.methods.item collection
     * @param id Unique identifier of the item
     * @returns a authenticationMethodItemRequestBuilder
     */
    public methodsById(id: string) : AuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationMethod_id"] = id
        return new AuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.authentication.microsoftAuthenticatorMethods.item collection
     * @param id Unique identifier of the item
     * @returns a microsoftAuthenticatorAuthenticationMethodItemRequestBuilder
     */
    public microsoftAuthenticatorMethodsById(id: string) : MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["microsoftAuthenticatorAuthenticationMethod_id"] = id
        return new MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property authentication in users
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Authentication | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the MicrosoftGraph.users.item.authentication.windowsHelloForBusinessMethods.item collection
     * @param id Unique identifier of the item
     * @returns a windowsHelloForBusinessAuthenticationMethodItemRequestBuilder
     */
    public windowsHelloForBusinessMethodsById(id: string) : WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsHelloForBusinessAuthenticationMethod_id"] = id
        return new WindowsHelloForBusinessAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
