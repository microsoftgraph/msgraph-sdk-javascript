import {DeviceManagement} from '../models/microsoft/graph/';
import {ApplePushNotificationCertificateRequestBuilder} from './applePushNotificationCertificate/';
import {ComplianceManagementPartnersRequestBuilder} from './complianceManagementPartners/';
import {ComplianceManagementPartnerItemRequestBuilder} from './complianceManagementPartners/item/';
import {ConditionalAccessSettingsRequestBuilder} from './conditionalAccessSettings/';
import {DetectedAppsRequestBuilder} from './detectedApps/';
import {DetectedAppItemRequestBuilder} from './detectedApps/item/';
import {DeviceCategoriesRequestBuilder} from './deviceCategories/';
import {DeviceCategoryItemRequestBuilder} from './deviceCategories/item/';
import {DeviceCompliancePoliciesRequestBuilder} from './deviceCompliancePolicies/';
import {DeviceCompliancePolicyItemRequestBuilder} from './deviceCompliancePolicies/item/';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilder} from './deviceCompliancePolicyDeviceStateSummary/';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/';
import {DeviceCompliancePolicySettingStateSummaryItemRequestBuilder} from './deviceCompliancePolicySettingStateSummaries/item/';
import {DeviceConfigurationDeviceStateSummariesRequestBuilder} from './deviceConfigurationDeviceStateSummaries/';
import {DeviceConfigurationsRequestBuilder} from './deviceConfigurations/';
import {DeviceConfigurationItemRequestBuilder} from './deviceConfigurations/item/';
import {DeviceEnrollmentConfigurationsRequestBuilder} from './deviceEnrollmentConfigurations/';
import {DeviceEnrollmentConfigurationItemRequestBuilder} from './deviceEnrollmentConfigurations/item/';
import {DeviceManagementPartnersRequestBuilder} from './deviceManagementPartners/';
import {DeviceManagementPartnerItemRequestBuilder} from './deviceManagementPartners/item/';
import {ExchangeConnectorsRequestBuilder} from './exchangeConnectors/';
import {DeviceManagementExchangeConnectorItemRequestBuilder} from './exchangeConnectors/item/';
import {GetEffectivePermissionsWithScopeRequestBuilder} from './getEffectivePermissionsWithScope/';
import {ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/';
import {ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder} from './importedWindowsAutopilotDeviceIdentities/item/';
import {IosUpdateStatusesRequestBuilder} from './iosUpdateStatuses/';
import {IosUpdateDeviceStatusItemRequestBuilder} from './iosUpdateStatuses/item/';
import {ManagedDeviceOverviewRequestBuilder} from './managedDeviceOverview/';
import {ManagedDevicesRequestBuilder} from './managedDevices/';
import {ManagedDeviceItemRequestBuilder} from './managedDevices/item/';
import {MobileThreatDefenseConnectorsRequestBuilder} from './mobileThreatDefenseConnectors/';
import {MobileThreatDefenseConnectorItemRequestBuilder} from './mobileThreatDefenseConnectors/item/';
import {NotificationMessageTemplatesRequestBuilder} from './notificationMessageTemplates/';
import {NotificationMessageTemplateItemRequestBuilder} from './notificationMessageTemplates/item/';
import {RemoteAssistancePartnersRequestBuilder} from './remoteAssistancePartners/';
import {RemoteAssistancePartnerItemRequestBuilder} from './remoteAssistancePartners/item/';
import {ReportsRequestBuilder} from './reports/';
import {ResourceOperationsRequestBuilder} from './resourceOperations/';
import {ResourceOperationItemRequestBuilder} from './resourceOperations/item/';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/';
import {DeviceAndAppManagementRoleAssignmentItemRequestBuilder} from './roleAssignments/item/';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/';
import {RoleDefinitionItemRequestBuilder} from './roleDefinitions/item/';
import {SoftwareUpdateStatusSummaryRequestBuilder} from './softwareUpdateStatusSummary/';
import {TelecomExpenseManagementPartnersRequestBuilder} from './telecomExpenseManagementPartners/';
import {TelecomExpenseManagementPartnerItemRequestBuilder} from './telecomExpenseManagementPartners/item/';
import {TermsAndConditionsRequestBuilder} from './termsAndConditions/';
import {TermsAndConditionsItemRequestBuilder} from './termsAndConditions/item/';
import {TroubleshootingEventsRequestBuilder} from './troubleshootingEvents/';
import {DeviceManagementTroubleshootingEventItemRequestBuilder} from './troubleshootingEvents/item/';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder} from './verifyWindowsEnrollmentAutoDiscoveryWithDomainName/';
import {WindowsAutopilotDeviceIdentitiesRequestBuilder} from './windowsAutopilotDeviceIdentities/';
import {WindowsAutopilotDeviceIdentityItemRequestBuilder} from './windowsAutopilotDeviceIdentities/item/';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/';
import {WindowsInformationProtectionAppLearningSummaryItemRequestBuilder} from './windowsInformationProtectionAppLearningSummaries/item/';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/';
import {WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder} from './windowsInformationProtectionNetworkLearningSummaries/item/';
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
     * @returns a complianceManagementPartnerItemRequestBuilder
     */
    public complianceManagementPartnersById(id: string) : ComplianceManagementPartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["complianceManagementPartner_id"] = id
        return new ComplianceManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
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
     * @returns a detectedAppItemRequestBuilder
     */
    public detectedAppsById(id: string) : DetectedAppItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["detectedApp_id"] = id
        return new DetectedAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCategories.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCategoryItemRequestBuilder
     */
    public deviceCategoriesById(id: string) : DeviceCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCategory_id"] = id
        return new DeviceCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyItemRequestBuilder
     */
    public deviceCompliancePoliciesById(id: string) : DeviceCompliancePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicy_id"] = id
        return new DeviceCompliancePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicySettingStateSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicySettingStateSummaryItemRequestBuilder
     */
    public deviceCompliancePolicySettingStateSummariesById(id: string) : DeviceCompliancePolicySettingStateSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicySettingStateSummary_id"] = id
        return new DeviceCompliancePolicySettingStateSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationItemRequestBuilder
     */
    public deviceConfigurationsById(id: string) : DeviceConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfiguration_id"] = id
        return new DeviceConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceEnrollmentConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a deviceEnrollmentConfigurationItemRequestBuilder
     */
    public deviceEnrollmentConfigurationsById(id: string) : DeviceEnrollmentConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceEnrollmentConfiguration_id"] = id
        return new DeviceEnrollmentConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceManagementPartners.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementPartnerItemRequestBuilder
     */
    public deviceManagementPartnersById(id: string) : DeviceManagementPartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementPartner_id"] = id
        return new DeviceManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.exchangeConnectors.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementExchangeConnectorItemRequestBuilder
     */
    public exchangeConnectorsById(id: string) : DeviceManagementExchangeConnectorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementExchangeConnector_id"] = id
        return new DeviceManagementExchangeConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
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
     * @returns a importedWindowsAutopilotDeviceIdentityItemRequestBuilder
     */
    public importedWindowsAutopilotDeviceIdentitiesById(id: string) : ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["importedWindowsAutopilotDeviceIdentity_id"] = id
        return new ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.iosUpdateStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a iosUpdateDeviceStatusItemRequestBuilder
     */
    public iosUpdateStatusesById(id: string) : IosUpdateDeviceStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosUpdateDeviceStatus_id"] = id
        return new IosUpdateDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.managedDevices.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceItemRequestBuilder
     */
    public managedDevicesById(id: string) : ManagedDeviceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDevice_id"] = id
        return new ManagedDeviceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.mobileThreatDefenseConnectors.item collection
     * @param id Unique identifier of the item
     * @returns a mobileThreatDefenseConnectorItemRequestBuilder
     */
    public mobileThreatDefenseConnectorsById(id: string) : MobileThreatDefenseConnectorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileThreatDefenseConnector_id"] = id
        return new MobileThreatDefenseConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.notificationMessageTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a notificationMessageTemplateItemRequestBuilder
     */
    public notificationMessageTemplatesById(id: string) : NotificationMessageTemplateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["notificationMessageTemplate_id"] = id
        return new NotificationMessageTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
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
     * @returns a remoteAssistancePartnerItemRequestBuilder
     */
    public remoteAssistancePartnersById(id: string) : RemoteAssistancePartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["remoteAssistancePartner_id"] = id
        return new RemoteAssistancePartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.resourceOperations.item collection
     * @param id Unique identifier of the item
     * @returns a resourceOperationItemRequestBuilder
     */
    public resourceOperationsById(id: string) : ResourceOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceOperation_id"] = id
        return new ResourceOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.roleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a deviceAndAppManagementRoleAssignmentItemRequestBuilder
     */
    public roleAssignmentsById(id: string) : DeviceAndAppManagementRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceAndAppManagementRoleAssignment_id"] = id
        return new DeviceAndAppManagementRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.roleDefinitions.item collection
     * @param id Unique identifier of the item
     * @returns a roleDefinitionItemRequestBuilder
     */
    public roleDefinitionsById(id: string) : RoleDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["roleDefinition_id"] = id
        return new RoleDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.telecomExpenseManagementPartners.item collection
     * @param id Unique identifier of the item
     * @returns a telecomExpenseManagementPartnerItemRequestBuilder
     */
    public telecomExpenseManagementPartnersById(id: string) : TelecomExpenseManagementPartnerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["telecomExpenseManagementPartner_id"] = id
        return new TelecomExpenseManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.termsAndConditions.item collection
     * @param id Unique identifier of the item
     * @returns a termsAndConditionsItemRequestBuilder
     */
    public termsAndConditionsById(id: string) : TermsAndConditionsItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["termsAndConditions_id"] = id
        return new TermsAndConditionsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.troubleshootingEvents.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementTroubleshootingEventItemRequestBuilder
     */
    public troubleshootingEventsById(id: string) : DeviceManagementTroubleshootingEventItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementTroubleshootingEvent_id"] = id
        return new DeviceManagementTroubleshootingEventItemRequestBuilder(urlTplParams, this.requestAdapter);
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
     * @returns a windowsAutopilotDeviceIdentityItemRequestBuilder
     */
    public windowsAutopilotDeviceIdentitiesById(id: string) : WindowsAutopilotDeviceIdentityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsAutopilotDeviceIdentity_id"] = id
        return new WindowsAutopilotDeviceIdentityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsInformationProtectionAppLearningSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a windowsInformationProtectionAppLearningSummaryItemRequestBuilder
     */
    public windowsInformationProtectionAppLearningSummariesById(id: string) : WindowsInformationProtectionAppLearningSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionAppLearningSummary_id"] = id
        return new WindowsInformationProtectionAppLearningSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsInformationProtectionNetworkLearningSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a windowsInformationProtectionNetworkLearningSummaryItemRequestBuilder
     */
    public windowsInformationProtectionNetworkLearningSummariesById(id: string) : WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionNetworkLearningSummary_id"] = id
        return new WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
