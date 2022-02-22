import {DeviceManagementReports} from '../../models/microsoft/graph/';
import {ExportJobsRequestBuilder} from './exportJobs/';
import {DeviceManagementExportJobRequestBuilder} from './exportJobs/item/';
import {GetCachedReportRequestBuilder} from './getCachedReport/';
import {GetCompliancePolicyNonComplianceReportRequestBuilder} from './getCompliancePolicyNonComplianceReport/';
import {GetCompliancePolicyNonComplianceSummaryReportRequestBuilder} from './getCompliancePolicyNonComplianceSummaryReport/';
import {GetComplianceSettingNonComplianceReportRequestBuilder} from './getComplianceSettingNonComplianceReport/';
import {GetConfigurationPolicyNonComplianceReportRequestBuilder} from './getConfigurationPolicyNonComplianceReport/';
import {GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder} from './getConfigurationPolicyNonComplianceSummaryReport/';
import {GetConfigurationSettingNonComplianceReportRequestBuilder} from './getConfigurationSettingNonComplianceReport/';
import {GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder} from './getDeviceManagementIntentPerSettingContributingProfiles/';
import {GetDeviceManagementIntentSettingsReportRequestBuilder} from './getDeviceManagementIntentSettingsReport/';
import {GetDeviceNonComplianceReportRequestBuilder} from './getDeviceNonComplianceReport/';
import {GetHistoricalReportRequestBuilder} from './getHistoricalReport/';
import {GetPolicyNonComplianceMetadataRequestBuilder} from './getPolicyNonComplianceMetadata/';
import {GetPolicyNonComplianceReportRequestBuilder} from './getPolicyNonComplianceReport/';
import {GetPolicyNonComplianceSummaryReportRequestBuilder} from './getPolicyNonComplianceSummaryReport/';
import {GetReportFiltersRequestBuilder} from './getReportFilters/';
import {GetSettingNonComplianceReportRequestBuilder} from './getSettingNonComplianceReport/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement/reports  */
export class ReportsRequestBuilder {
    public get exportJobs(): ExportJobsRequestBuilder {
        return new ExportJobsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getCachedReport(): GetCachedReportRequestBuilder {
        return new GetCachedReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getCompliancePolicyNonComplianceReport(): GetCompliancePolicyNonComplianceReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getCompliancePolicyNonComplianceSummaryReport(): GetCompliancePolicyNonComplianceSummaryReportRequestBuilder {
        return new GetCompliancePolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getComplianceSettingNonComplianceReport(): GetComplianceSettingNonComplianceReportRequestBuilder {
        return new GetComplianceSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getConfigurationPolicyNonComplianceReport(): GetConfigurationPolicyNonComplianceReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getConfigurationPolicyNonComplianceSummaryReport(): GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetConfigurationPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getConfigurationSettingNonComplianceReport(): GetConfigurationSettingNonComplianceReportRequestBuilder {
        return new GetConfigurationSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getDeviceManagementIntentPerSettingContributingProfiles(): GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder {
        return new GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getDeviceManagementIntentSettingsReport(): GetDeviceManagementIntentSettingsReportRequestBuilder {
        return new GetDeviceManagementIntentSettingsReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getDeviceNonComplianceReport(): GetDeviceNonComplianceReportRequestBuilder {
        return new GetDeviceNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getHistoricalReport(): GetHistoricalReportRequestBuilder {
        return new GetHistoricalReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getPolicyNonComplianceMetadata(): GetPolicyNonComplianceMetadataRequestBuilder {
        return new GetPolicyNonComplianceMetadataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getPolicyNonComplianceReport(): GetPolicyNonComplianceReportRequestBuilder {
        return new GetPolicyNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getPolicyNonComplianceSummaryReport(): GetPolicyNonComplianceSummaryReportRequestBuilder {
        return new GetPolicyNonComplianceSummaryReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getReportFilters(): GetReportFiltersRequestBuilder {
        return new GetReportFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getSettingNonComplianceReport(): GetSettingNonComplianceReportRequestBuilder {
        return new GetSettingNonComplianceReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/reports{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Reports singleton
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
     * Reports singleton
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
     * Reports singleton
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceManagementReports | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Reports singleton
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
     * Gets an item from the MicrosoftGraph.deviceManagement.reports.exportJobs.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementExportJobRequestBuilder
     */
    public exportJobsById(id: string) : DeviceManagementExportJobRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementExportJob_id"] = id
        return new DeviceManagementExportJobRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Reports singleton
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagementReports
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagementReports | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<DeviceManagementReports>(requestInfo, DeviceManagementReports, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Reports singleton
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceManagementReports | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
