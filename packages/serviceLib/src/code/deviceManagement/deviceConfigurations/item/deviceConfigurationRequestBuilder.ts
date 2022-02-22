import {DeviceConfiguration} from '../../../models/microsoft/graph/';
import {AssignRequestBuilder} from './assign/';
import {AssignmentsRequestBuilder} from './assignments/';
import {DeviceConfigurationAssignmentRequestBuilder} from './assignments/item/';
import {DeviceSettingStateSummariesRequestBuilder} from './deviceSettingStateSummaries/';
import {SettingStateDeviceSummaryRequestBuilder} from './deviceSettingStateSummaries/item/';
import {DeviceStatusesRequestBuilder} from './deviceStatuses/';
import {DeviceConfigurationDeviceStatusRequestBuilder} from './deviceStatuses/item/';
import {DeviceStatusOverviewRequestBuilder} from './deviceStatusOverview/';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder} from './getOmaSettingPlainTextValueWithSecretReferenceValueId/';
import {UserStatusesRequestBuilder} from './userStatuses/';
import {DeviceConfigurationUserStatusRequestBuilder} from './userStatuses/item/';
import {UserStatusOverviewRequestBuilder} from './userStatusOverview/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement/deviceConfigurations/{deviceConfiguration-id}  */
export class DeviceConfigurationRequestBuilder {
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceSettingStateSummaries(): DeviceSettingStateSummariesRequestBuilder {
        return new DeviceSettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceStatusOverview(): DeviceStatusOverviewRequestBuilder {
        return new DeviceStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get userStatusOverview(): UserStatusOverviewRequestBuilder {
        return new UserStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationAssignmentRequestBuilder
     */
    public assignmentsById(id: string) : DeviceConfigurationAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationAssignment_id"] = id
        return new DeviceConfigurationAssignmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceConfigurationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The device configurations.
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
     * The device configurations.
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
     * The device configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceConfiguration | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * The device configurations.
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
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.item.deviceSettingStateSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a settingStateDeviceSummaryRequestBuilder
     */
    public deviceSettingStateSummariesById(id: string) : SettingStateDeviceSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["settingStateDeviceSummary_id"] = id
        return new SettingStateDeviceSummaryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.item.deviceStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationDeviceStatusRequestBuilder
     */
    public deviceStatusesById(id: string) : DeviceConfigurationDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationDeviceStatus_id"] = id
        return new DeviceConfigurationDeviceStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The device configurations.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfiguration
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfiguration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<DeviceConfiguration>(requestInfo, DeviceConfiguration, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/microsoft.graph.getOmaSettingPlainTextValue(secretReferenceValueId='{secretReferenceValueId}')
     * @param secretReferenceValueId Usage: secretReferenceValueId={secretReferenceValueId}
     * @returns a getOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder
     */
    public getOmaSettingPlainTextValueWithSecretReferenceValueId(secretReferenceValueId: string | undefined) : GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder {
        if(!secretReferenceValueId) throw new Error("secretReferenceValueId cannot be undefined");
        return new GetOmaSettingPlainTextValueWithSecretReferenceValueIdRequestBuilder(this.pathParameters, this.requestAdapter, secretReferenceValueId);
    };
    /**
     * The device configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceConfiguration | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.item.userStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationUserStatusRequestBuilder
     */
    public userStatusesById(id: string) : DeviceConfigurationUserStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationUserStatus_id"] = id
        return new DeviceConfigurationUserStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
