import {DeviceManagement} from '../models/microsoft/graph/';
import {ApplePushNotificationCertificateRequestBuilder} from './applePushNotificationCertificate/';
import {ComplianceManagementPartnersRequestBuilder} from './complianceManagementPartners/';
import {ComplianceManagementPartnerRequestBuilder} from './complianceManagementPartners/item/';
import {ConditionalAccessSettingsRequestBuilder} from './conditionalAccessSettings/';
import {DetectedAppsRequestBuilder} from './detectedApps/';
import {DetectedAppRequestBuilder} from './detectedApps/item/';
import {DeviceCategoriesRequestBuilder} from './deviceCategories/';
import {DeviceCategoryRequestBuilder} from './deviceCategories/item/';
import {DeviceCompliancePoliciesRequestBuilder} from './deviceCompliancePolicies/';
import {DeviceCompliancePolicyRequestBuilder} from './deviceCompliancePolicies/item/';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilder} from './deviceCompliancePolicyDeviceStateSummary/';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/';
import {DeviceCompliancePolicySettingStateSummaryRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/item/';
import {DeviceConfigurationDeviceStateSummariesRequestBuilder} from './deviceConfigurationDeviceStateSummaries/';
import {DeviceConfigurationsRequestBuilder} from './deviceConfigurations/';
import {DeviceConfigurationRequestBuilder} from './deviceConfigurations/item/';
import {DeviceEnrollmentConfigurationsRequestBuilder} from './deviceEnrollmentConfigurations/';
import {DeviceEnrollmentConfigurationRequestBuilder} from './deviceEnrollmentConfigurations/item/';
import {DeviceManagementPartnersRequestBuilder} from './deviceManagementPartners/';
import {DeviceManagementPartnerRequestBuilder} from './deviceManagementPartners/item/';
import {ExchangeConnectorsRequestBuilder} from './exchangeConnectors/';
import {DeviceManagementExchangeConnectorRequestBuilder} from './exchangeConnectors/item/';
import {GetEffectivePermissionsWithScopeRequestBuilder} from './getEffectivePermissionsWithScope/';
import {ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/';
import {ImportedWindowsAutopilotDeviceIdentityRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/item/';
import {IosUpdateStatusesRequestBuilder} from './iosUpdateStatuses/';
import {IosUpdateDeviceStatusRequestBuilder} from './iosUpdateStatuses/item/';
import {ManagedDeviceOverviewRequestBuilder} from './managedDeviceOverview/';
import {ManagedDevicesRequestBuilder} from './managedDevices/';
import {ManagedDeviceRequestBuilder} from './managedDevices/item/';
import {MobileThreatDefenseConnectorsRequestBuilder} from './mobileThreatDefenseConnectors/';
import {MobileThreatDefenseConnectorRequestBuilder} from './mobileThreatDefenseConnectors/item/';
import {NotificationMessageTemplatesRequestBuilder} from './notificationMessageTemplates/';
import {NotificationMessageTemplateRequestBuilder} from './notificationMessageTemplates/item/';
import {RemoteAssistancePartnersRequestBuilder} from './remoteAssistancePartners/';
import {RemoteAssistancePartnerRequestBuilder} from './remoteAssistancePartners/item/';
import {ReportsRequestBuilder} from './reports/';
import {ResourceOperationsRequestBuilder} from './resourceOperations/';
import {ResourceOperationRequestBuilder} from './resourceOperations/item/';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/';
import {DeviceAndAppManagementRoleAssignmentRequestBuilder} from './roleAssignments/item/';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/';
import {RoleDefinitionRequestBuilder} from './roleDefinitions/item/';
import {SoftwareUpdateStatusSummaryRequestBuilder} from './softwareUpdateStatusSummary/';
import {TelecomExpenseManagementPartnersRequestBuilder} from './telecomExpenseManagementPartners/';
import {TelecomExpenseManagementPartnerRequestBuilder} from './telecomExpenseManagementPartners/item/';
import {TermsAndConditionsRequestBuilder} from './termsAndConditions/';
import {TroubleshootingEventsRequestBuilder} from './troubleshootingEvents/';
import {DeviceManagementTroubleshootingEventRequestBuilder} from './troubleshootingEvents/item/';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder} from './verifyWindowsEnrollmentAutoDiscoveryWithDomainName/';
import {WindowsAutopilotDeviceIdentitiesRequestBuilder} from './windowsAutopilotDeviceIdentities/';
import {WindowsAutopilotDeviceIdentityRequestBuilder} from './windowsAutopilotDeviceIdentities/item/';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/';
import {WindowsInformationProtectionAppLearningSummaryRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/item/';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/';
import {WindowsInformationProtectionNetworkLearningSummaryRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement  */
export class DeviceManagementRequestBuilder {
    public get applePushNotificationCertificate(): ApplePushNotificationCertificateRequestBuilder {
        return new ApplePushNotificationCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get complianceManagementPartners(): ComplianceManagementPartnersRequestBuilder {
        return new ComplianceManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get conditionalAccessSettings(): ConditionalAccessSettingsRequestBuilder {
        return new ConditionalAccessSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get detectedApps(): DetectedAppsRequestBuilder {
        return new DetectedAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCategories(): DeviceCategoriesRequestBuilder {
        return new DeviceCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCompliancePolicies(): DeviceCompliancePoliciesRequestBuilder {
        return new DeviceCompliancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCompliancePolicyDeviceStateSummary(): DeviceCompliancePolicyDeviceStateSummaryRequestBuilder {
        return new DeviceCompliancePolicyDeviceStateSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCompliancePolicySettingStateSummaries(): DeviceCompliancePolicySettingStateSummariesRequestBuilder {
        return new DeviceCompliancePolicySettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceConfigurationDeviceStateSummaries(): DeviceConfigurationDeviceStateSummariesRequestBuilder {
        return new DeviceConfigurationDeviceStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceConfigurations(): DeviceConfigurationsRequestBuilder {
        return new DeviceConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceEnrollmentConfigurations(): DeviceEnrollmentConfigurationsRequestBuilder {
        return new DeviceEnrollmentConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceManagementPartners(): DeviceManagementPartnersRequestBuilder {
        return new DeviceManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get exchangeConnectors(): ExchangeConnectorsRequestBuilder {
        return new ExchangeConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get importedWindowsAutopilotDeviceIdentities(): ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get iosUpdateStatuses(): IosUpdateStatusesRequestBuilder {
        return new IosUpdateStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedDeviceOverview(): ManagedDeviceOverviewRequestBuilder {
        return new ManagedDeviceOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mobileThreatDefenseConnectors(): MobileThreatDefenseConnectorsRequestBuilder {
        return new MobileThreatDefenseConnectorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get notificationMessageTemplates(): NotificationMessageTemplatesRequestBuilder {
        return new NotificationMessageTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get remoteAssistancePartners(): RemoteAssistancePartnersRequestBuilder {
        return new RemoteAssistancePartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get reports(): ReportsRequestBuilder {
        return new ReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get resourceOperations(): ResourceOperationsRequestBuilder {
        return new ResourceOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get roleDefinitions(): RoleDefinitionsRequestBuilder {
        return new RoleDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get softwareUpdateStatusSummary(): SoftwareUpdateStatusSummaryRequestBuilder {
        return new SoftwareUpdateStatusSummaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get telecomExpenseManagementPartners(): TelecomExpenseManagementPartnersRequestBuilder {
        return new TelecomExpenseManagementPartnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get termsAndConditions(): TermsAndConditionsRequestBuilder {
        return new TermsAndConditionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get troubleshootingEvents(): TroubleshootingEventsRequestBuilder {
        return new TroubleshootingEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get windowsAutopilotDeviceIdentities(): WindowsAutopilotDeviceIdentitiesRequestBuilder {
        return new WindowsAutopilotDeviceIdentitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get windowsInformationProtectionAppLearningSummaries(): WindowsInformationProtectionAppLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionAppLearningSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get windowsInformationProtectionNetworkLearningSummaries(): WindowsInformationProtectionNetworkLearningSummariesRequestBuilder {
        return new WindowsInformationProtectionNetworkLearningSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.complianceManagementPartners.item collection
     * @param id Unique identifier of the item
     * @returns a complianceManagementPartnerRequestBuilder
     */
    public complianceManagementPartnersById(id: string) : ComplianceManagementPartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["complianceManagementPartner_id"] = id
        return new ComplianceManagementPartnerRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get deviceManagement
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
     * Update deviceManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceManagement | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Gets an item from the MicrosoftGraph.deviceManagement.detectedApps.item collection
     * @param id Unique identifier of the item
     * @returns a detectedAppRequestBuilder
     */
    public detectedAppsById(id: string) : DetectedAppRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["detectedApp_id"] = id
        return new DetectedAppRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCategories.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCategoryRequestBuilder
     */
    public deviceCategoriesById(id: string) : DeviceCategoryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCategory_id"] = id
        return new DeviceCategoryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyRequestBuilder
     */
    public deviceCompliancePoliciesById(id: string) : DeviceCompliancePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicy_id"] = id
        return new DeviceCompliancePolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicySettingStateSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicySettingStateSummaryRequestBuilder
     */
    public deviceCompliancePolicySettingStateSummariesById(id: string) : DeviceCompliancePolicySettingStateSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicySettingStateSummary_id"] = id
        return new DeviceCompliancePolicySettingStateSummaryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationRequestBuilder
     */
    public deviceConfigurationsById(id: string) : DeviceConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfiguration_id"] = id
        return new DeviceConfigurationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceEnrollmentConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a deviceEnrollmentConfigurationRequestBuilder
     */
    public deviceEnrollmentConfigurationsById(id: string) : DeviceEnrollmentConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceEnrollmentConfiguration_id"] = id
        return new DeviceEnrollmentConfigurationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceManagementPartners.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementPartnerRequestBuilder
     */
    public deviceManagementPartnersById(id: string) : DeviceManagementPartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementPartner_id"] = id
        return new DeviceManagementPartnerRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.exchangeConnectors.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementExchangeConnectorRequestBuilder
     */
    public exchangeConnectorsById(id: string) : DeviceManagementExchangeConnectorRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementExchangeConnector_id"] = id
        return new DeviceManagementExchangeConnectorRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get deviceManagement
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagement
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<DeviceManagement>(requestInfo, DeviceManagement, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /deviceManagement/microsoft.graph.getEffectivePermissions(scope='{scope}')
     * @param scope Usage: scope={scope}
     * @returns a getEffectivePermissionsWithScopeRequestBuilder
     */
    public getEffectivePermissionsWithScope(scope: string | undefined) : GetEffectivePermissionsWithScopeRequestBuilder {
        if(!scope) throw new Error("scope cannot be undefined");
        return new GetEffectivePermissionsWithScopeRequestBuilder(this.pathParameters, this.requestAdapter, scope);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.importedWindowsAutopilotDeviceIdentities.item collection
     * @param id Unique identifier of the item
     * @returns a importedWindowsAutopilotDeviceIdentityRequestBuilder
     */
    public importedWindowsAutopilotDeviceIdentitiesById(id: string) : ImportedWindowsAutopilotDeviceIdentityRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["importedWindowsAutopilotDeviceIdentity_id"] = id
        return new ImportedWindowsAutopilotDeviceIdentityRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.iosUpdateStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a iosUpdateDeviceStatusRequestBuilder
     */
    public iosUpdateStatusesById(id: string) : IosUpdateDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosUpdateDeviceStatus_id"] = id
        return new IosUpdateDeviceStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.managedDevices.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceRequestBuilder
     */
    public managedDevicesById(id: string) : ManagedDeviceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDevice_id"] = id
        return new ManagedDeviceRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.mobileThreatDefenseConnectors.item collection
     * @param id Unique identifier of the item
     * @returns a mobileThreatDefenseConnectorRequestBuilder
     */
    public mobileThreatDefenseConnectorsById(id: string) : MobileThreatDefenseConnectorRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileThreatDefenseConnector_id"] = id
        return new MobileThreatDefenseConnectorRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.notificationMessageTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a notificationMessageTemplateRequestBuilder
     */
    public notificationMessageTemplatesById(id: string) : NotificationMessageTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["notificationMessageTemplate_id"] = id
        return new NotificationMessageTemplateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update deviceManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceManagement | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.remoteAssistancePartners.item collection
     * @param id Unique identifier of the item
     * @returns a remoteAssistancePartnerRequestBuilder
     */
    public remoteAssistancePartnersById(id: string) : RemoteAssistancePartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["remoteAssistancePartner_id"] = id
        return new RemoteAssistancePartnerRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.resourceOperations.item collection
     * @param id Unique identifier of the item
     * @returns a resourceOperationRequestBuilder
     */
    public resourceOperationsById(id: string) : ResourceOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceOperation_id"] = id
        return new ResourceOperationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.roleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a deviceAndAppManagementRoleAssignmentRequestBuilder
     */
    public roleAssignmentsById(id: string) : DeviceAndAppManagementRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceAndAppManagementRoleAssignment_id"] = id
        return new DeviceAndAppManagementRoleAssignmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.roleDefinitions.item collection
     * @param id Unique identifier of the item
     * @returns a roleDefinitionRequestBuilder
     */
    public roleDefinitionsById(id: string) : RoleDefinitionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["roleDefinition_id"] = id
        return new RoleDefinitionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.telecomExpenseManagementPartners.item collection
     * @param id Unique identifier of the item
     * @returns a telecomExpenseManagementPartnerRequestBuilder
     */
    public telecomExpenseManagementPartnersById(id: string) : TelecomExpenseManagementPartnerRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["telecomExpenseManagementPartner_id"] = id
        return new TelecomExpenseManagementPartnerRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.termsAndConditions.item collection
     * @param id Unique identifier of the item
     * @returns a termsAndConditionsRequestBuilder
     */
    public termsAndConditionsById(id: string) : TermsAndConditionsRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["termsAndConditions_id"] = id
        return new TermsAndConditionsRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.troubleshootingEvents.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementTroubleshootingEventRequestBuilder
     */
    public troubleshootingEventsById(id: string) : DeviceManagementTroubleshootingEventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementTroubleshootingEvent_id"] = id
        return new DeviceManagementTroubleshootingEventRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /deviceManagement/microsoft.graph.verifyWindowsEnrollmentAutoDiscovery(domainName='{domainName}')
     * @param domainName Usage: domainName={domainName}
     * @returns a verifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder
     */
    public verifyWindowsEnrollmentAutoDiscoveryWithDomainName(domainName: string | undefined) : VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder {
        if(!domainName) throw new Error("domainName cannot be undefined");
        return new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder(this.pathParameters, this.requestAdapter, domainName);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsAutopilotDeviceIdentities.item collection
     * @param id Unique identifier of the item
     * @returns a windowsAutopilotDeviceIdentityRequestBuilder
     */
    public windowsAutopilotDeviceIdentitiesById(id: string) : WindowsAutopilotDeviceIdentityRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsAutopilotDeviceIdentity_id"] = id
        return new WindowsAutopilotDeviceIdentityRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsInformationProtectionAppLearningSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a windowsInformationProtectionAppLearningSummaryRequestBuilder
     */
    public windowsInformationProtectionAppLearningSummariesById(id: string) : WindowsInformationProtectionAppLearningSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionAppLearningSummary_id"] = id
        return new WindowsInformationProtectionAppLearningSummaryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsInformationProtectionNetworkLearningSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a windowsInformationProtectionNetworkLearningSummaryRequestBuilder
     */
    public windowsInformationProtectionNetworkLearningSummariesById(id: string) : WindowsInformationProtectionNetworkLearningSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionNetworkLearningSummary_id"] = id
        return new WindowsInformationProtectionNetworkLearningSummaryRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
