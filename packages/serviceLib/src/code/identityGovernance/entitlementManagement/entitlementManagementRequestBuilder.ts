import {EntitlementManagement} from '../../models/microsoft/graph/';
import {AccessPackageAssignmentApprovalsRequestBuilder} from './accessPackageAssignmentApprovals/';
import {ApprovalRequestBuilder} from './accessPackageAssignmentApprovals/item/';
import {AccessPackagesRequestBuilder} from './accessPackages/';
import {AccessPackageRequestBuilder} from './accessPackages/item/';
import {AssignmentRequestsRequestBuilder} from './assignmentRequests/';
import {AccessPackageAssignmentRequestRequestBuilder} from './assignmentRequests/item/';
import {AssignmentsRequestBuilder} from './assignments/';
import {AccessPackageAssignmentRequestBuilder} from './assignments/item/';
import {CatalogsRequestBuilder} from './catalogs/';
import {AccessPackageCatalogRequestBuilder} from './catalogs/item/';
import {ConnectedOrganizationsRequestBuilder} from './connectedOrganizations/';
import {ConnectedOrganizationRequestBuilder} from './connectedOrganizations/item/';
import {SettingsRequestBuilder} from './settings/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identityGovernance/entitlementManagement  */
export class EntitlementManagementRequestBuilder {
    public get accessPackageAssignmentApprovals(): AccessPackageAssignmentApprovalsRequestBuilder {
        return new AccessPackageAssignmentApprovalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get accessPackages(): AccessPackagesRequestBuilder {
        return new AccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignmentRequests(): AssignmentRequestsRequestBuilder {
        return new AssignmentRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get catalogs(): CatalogsRequestBuilder {
        return new CatalogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get connectedOrganizations(): ConnectedOrganizationsRequestBuilder {
        return new ConnectedOrganizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.accessPackageAssignmentApprovals.item collection
     * @param id Unique identifier of the item
     * @returns a approvalRequestBuilder
     */
    public accessPackageAssignmentApprovalsById(id: string) : ApprovalRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["approval_id"] = id
        return new ApprovalRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.accessPackages.item collection
     * @param id Unique identifier of the item
     * @returns a accessPackageRequestBuilder
     */
    public accessPackagesById(id: string) : AccessPackageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage_id"] = id
        return new AccessPackageRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.assignmentRequests.item collection
     * @param id Unique identifier of the item
     * @returns a accessPackageAssignmentRequestRequestBuilder
     */
    public assignmentRequestsById(id: string) : AccessPackageAssignmentRequestRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignmentRequest_id"] = id
        return new AccessPackageAssignmentRequestRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a accessPackageAssignmentRequestBuilder
     */
    public assignmentsById(id: string) : AccessPackageAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignment_id"] = id
        return new AccessPackageAssignmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.catalogs.item collection
     * @param id Unique identifier of the item
     * @returns a accessPackageCatalogRequestBuilder
     */
    public catalogsById(id: string) : AccessPackageCatalogRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageCatalog_id"] = id
        return new AccessPackageCatalogRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.connectedOrganizations.item collection
     * @param id Unique identifier of the item
     * @returns a connectedOrganizationRequestBuilder
     */
    public connectedOrganizationsById(id: string) : ConnectedOrganizationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connectedOrganization_id"] = id
        return new ConnectedOrganizationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EntitlementManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property entitlementManagement for identityGovernance
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
     * Get entitlementManagement from identityGovernance
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
     * Update the navigation property entitlementManagement in identityGovernance
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EntitlementManagement | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Delete navigation property entitlementManagement for identityGovernance
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
     * Get entitlementManagement from identityGovernance
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EntitlementManagement
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EntitlementManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<EntitlementManagement>(requestInfo, EntitlementManagement, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property entitlementManagement in identityGovernance
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EntitlementManagement | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
