import {Domain} from '../../models/microsoft/graph/';
import {DomainNameReferencesRequestBuilder} from './domainNameReferences/';
import {ForceDeleteRequestBuilder} from './forceDelete/';
import {ServiceConfigurationRecordsRequestBuilder} from './serviceConfigurationRecords/';
import {DomainDnsRecordRequestBuilder as i23588bf5aad417fa7f08986d270dfcfc5627f0f06de36a3fc6924a04a5b3f637} from './serviceConfigurationRecords/item/';
import {VerificationDnsRecordsRequestBuilder} from './verificationDnsRecords/';
import {DomainDnsRecordRequestBuilder as i6b00260bf1ef1780c5f75fec17d0035454b96a07279e48626467eb886af12321} from './verificationDnsRecords/item/';
import {VerifyRequestBuilder} from './verify/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /domains/{domain-id}  */
export class DomainRequestBuilder {
    public get domainNameReferences(): DomainNameReferencesRequestBuilder {
        return new DomainNameReferencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get forceDelete(): ForceDeleteRequestBuilder {
        return new ForceDeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get serviceConfigurationRecords(): ServiceConfigurationRecordsRequestBuilder {
        return new ServiceConfigurationRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get verificationDnsRecords(): VerificationDnsRecordsRequestBuilder {
        return new VerificationDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get verify(): VerifyRequestBuilder {
        return new VerifyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DomainRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/domains/{domain_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from domains
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
     * Get entity from domains by key
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
     * Update entity in domains
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Domain | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Delete entity from domains
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
     * Get entity from domains by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Domain
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Domain | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Domain>(requestInfo, Domain, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update entity in domains
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Domain | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.domains.item.serviceConfigurationRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordRequestBuilder
     */
    public serviceConfigurationRecordsById(id: string) : i23588bf5aad417fa7f08986d270dfcfc5627f0f06de36a3fc6924a04a5b3f637 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord_id"] = id
        return new i23588bf5aad417fa7f08986d270dfcfc5627f0f06de36a3fc6924a04a5b3f637(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.domains.item.verificationDnsRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordRequestBuilder
     */
    public verificationDnsRecordsById(id: string) : i6b00260bf1ef1780c5f75fec17d0035454b96a07279e48626467eb886af12321 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord_id"] = id
        return new i6b00260bf1ef1780c5f75fec17d0035454b96a07279e48626467eb886af12321(urlTplParams, this.requestAdapter);
    };
}
