import {DeviceAppManagement} from '../models/microsoft/graph/';
import {createDeviceAppManagementFromDiscriminatorValue} from '../models/microsoft/graph/createDeviceAppManagementFromDiscriminatorValue';
import {ODataError} from '../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AndroidManagedAppProtectionsRequestBuilder} from './androidManagedAppProtections/androidManagedAppProtectionsRequestBuilder';
import {AndroidManagedAppProtectionItemRequestBuilder} from './androidManagedAppProtections/item/androidManagedAppProtectionItemRequestBuilder';
import {DefaultManagedAppProtectionsRequestBuilder} from './defaultManagedAppProtections/defaultManagedAppProtectionsRequestBuilder';
import {DefaultManagedAppProtectionItemRequestBuilder} from './defaultManagedAppProtections/item/defaultManagedAppProtectionItemRequestBuilder';
import {IosManagedAppProtectionsRequestBuilder} from './iosManagedAppProtections/iosManagedAppProtectionsRequestBuilder';
import {IosManagedAppProtectionItemRequestBuilder} from './iosManagedAppProtections/item/iosManagedAppProtectionItemRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder} from './managedAppPolicies/item/managedAppPolicyItemRequestBuilder';
import {ManagedAppPoliciesRequestBuilder} from './managedAppPolicies/managedAppPoliciesRequestBuilder';
import {ManagedAppRegistrationItemRequestBuilder} from './managedAppRegistrations/item/managedAppRegistrationItemRequestBuilder';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/managedAppRegistrationsRequestBuilder';
import {ManagedAppStatusItemRequestBuilder} from './managedAppStatuses/item/managedAppStatusItemRequestBuilder';
import {ManagedAppStatusesRequestBuilder} from './managedAppStatuses/managedAppStatusesRequestBuilder';
import {ManagedEBookItemRequestBuilder} from './managedEBooks/item/managedEBookItemRequestBuilder';
import {ManagedEBooksRequestBuilder} from './managedEBooks/managedEBooksRequestBuilder';
import {MdmWindowsInformationProtectionPolicyItemRequestBuilder} from './mdmWindowsInformationProtectionPolicies/item/mdmWindowsInformationProtectionPolicyItemRequestBuilder';
import {MdmWindowsInformationProtectionPoliciesRequestBuilder} from './mdmWindowsInformationProtectionPolicies/mdmWindowsInformationProtectionPoliciesRequestBuilder';
import {MobileAppCategoryItemRequestBuilder} from './mobileAppCategories/item/mobileAppCategoryItemRequestBuilder';
import {MobileAppCategoriesRequestBuilder} from './mobileAppCategories/mobileAppCategoriesRequestBuilder';
import {ManagedDeviceMobileAppConfigurationItemRequestBuilder} from './mobileAppConfigurations/item/managedDeviceMobileAppConfigurationItemRequestBuilder';
import {MobileAppConfigurationsRequestBuilder} from './mobileAppConfigurations/mobileAppConfigurationsRequestBuilder';
import {MobileAppItemRequestBuilder} from './mobileApps/item/mobileAppItemRequestBuilder';
import {MobileAppsRequestBuilder} from './mobileApps/mobileAppsRequestBuilder';
import {SyncMicrosoftStoreForBusinessAppsRequestBuilder} from './syncMicrosoftStoreForBusinessApps/syncMicrosoftStoreForBusinessAppsRequestBuilder';
import {TargetedManagedAppConfigurationItemRequestBuilder} from './targetedManagedAppConfigurations/item/targetedManagedAppConfigurationItemRequestBuilder';
import {TargetedManagedAppConfigurationsRequestBuilder} from './targetedManagedAppConfigurations/targetedManagedAppConfigurationsRequestBuilder';
import {VppTokenItemRequestBuilder} from './vppTokens/item/vppTokenItemRequestBuilder';
import {VppTokensRequestBuilder} from './vppTokens/vppTokensRequestBuilder';
import {WindowsInformationProtectionPolicyItemRequestBuilder} from './windowsInformationProtectionPolicies/item/windowsInformationProtectionPolicyItemRequestBuilder';
import {WindowsInformationProtectionPoliciesRequestBuilder} from './windowsInformationProtectionPolicies/windowsInformationProtectionPoliciesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceAppManagement singleton.  */
export class DeviceAppManagementRequestBuilder {
    public get androidManagedAppProtections(): AndroidManagedAppProtectionsRequestBuilder {
        return new AndroidManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get defaultManagedAppProtections(): DefaultManagedAppProtectionsRequestBuilder {
        return new DefaultManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get iosManagedAppProtections(): IosManagedAppProtectionsRequestBuilder {
        return new IosManagedAppProtectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedAppPolicies(): ManagedAppPoliciesRequestBuilder {
        return new ManagedAppPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedAppStatuses(): ManagedAppStatusesRequestBuilder {
        return new ManagedAppStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedEBooks(): ManagedEBooksRequestBuilder {
        return new ManagedEBooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mdmWindowsInformationProtectionPolicies(): MdmWindowsInformationProtectionPoliciesRequestBuilder {
        return new MdmWindowsInformationProtectionPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mobileAppCategories(): MobileAppCategoriesRequestBuilder {
        return new MobileAppCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mobileAppConfigurations(): MobileAppConfigurationsRequestBuilder {
        return new MobileAppConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mobileApps(): MobileAppsRequestBuilder {
        return new MobileAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get syncMicrosoftStoreForBusinessApps(): SyncMicrosoftStoreForBusinessAppsRequestBuilder {
        return new SyncMicrosoftStoreForBusinessAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get targetedManagedAppConfigurations(): TargetedManagedAppConfigurationsRequestBuilder {
        return new TargetedManagedAppConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get vppTokens(): VppTokensRequestBuilder {
        return new VppTokensRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get windowsInformationProtectionPolicies(): WindowsInformationProtectionPoliciesRequestBuilder {
        return new WindowsInformationProtectionPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.androidManagedAppProtections.item collection
     * @param id Unique identifier of the item
     * @returns a androidManagedAppProtectionItemRequestBuilder
     */
    public androidManagedAppProtectionsById(id: string) : AndroidManagedAppProtectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["androidManagedAppProtection_id"] = id
        return new AndroidManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceAppManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get deviceAppManagement
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceAppManagement | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.defaultManagedAppProtections.item collection
     * @param id Unique identifier of the item
     * @returns a defaultManagedAppProtectionItemRequestBuilder
     */
    public defaultManagedAppProtectionsById(id: string) : DefaultManagedAppProtectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["defaultManagedAppProtection_id"] = id
        return new DefaultManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get deviceAppManagement
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceAppManagement
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceAppManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceAppManagement>(requestInfo, createDeviceAppManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.iosManagedAppProtections.item collection
     * @param id Unique identifier of the item
     * @returns a iosManagedAppProtectionItemRequestBuilder
     */
    public iosManagedAppProtectionsById(id: string) : IosManagedAppProtectionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosManagedAppProtection_id"] = id
        return new IosManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyItemRequestBuilder
     */
    public managedAppPoliciesById(id: string) : ManagedAppPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy_id"] = id
        return new ManagedAppPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppRegistrationItemRequestBuilder
     */
    public managedAppRegistrationsById(id: string) : ManagedAppRegistrationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppRegistration_id"] = id
        return new ManagedAppRegistrationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppStatusItemRequestBuilder
     */
    public managedAppStatusesById(id: string) : ManagedAppStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppStatus_id"] = id
        return new ManagedAppStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedEBooks.item collection
     * @param id Unique identifier of the item
     * @returns a managedEBookItemRequestBuilder
     */
    public managedEBooksById(id: string) : ManagedEBookItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedEBook_id"] = id
        return new ManagedEBookItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mdmWindowsInformationProtectionPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a mdmWindowsInformationProtectionPolicyItemRequestBuilder
     */
    public mdmWindowsInformationProtectionPoliciesById(id: string) : MdmWindowsInformationProtectionPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mdmWindowsInformationProtectionPolicy_id"] = id
        return new MdmWindowsInformationProtectionPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppCategories.item collection
     * @param id Unique identifier of the item
     * @returns a mobileAppCategoryItemRequestBuilder
     */
    public mobileAppCategoriesById(id: string) : MobileAppCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppCategory_id"] = id
        return new MobileAppCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationItemRequestBuilder
     */
    public mobileAppConfigurationsById(id: string) : ManagedDeviceMobileAppConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfiguration_id"] = id
        return new ManagedDeviceMobileAppConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileApps.item collection
     * @param id Unique identifier of the item
     * @returns a mobileAppItemRequestBuilder
     */
    public mobileAppsById(id: string) : MobileAppItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileApp_id"] = id
        return new MobileAppItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceAppManagement | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the MicrosoftGraph.deviceAppManagement.targetedManagedAppConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a targetedManagedAppConfigurationItemRequestBuilder
     */
    public targetedManagedAppConfigurationsById(id: string) : TargetedManagedAppConfigurationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["targetedManagedAppConfiguration_id"] = id
        return new TargetedManagedAppConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.vppTokens.item collection
     * @param id Unique identifier of the item
     * @returns a vppTokenItemRequestBuilder
     */
    public vppTokensById(id: string) : VppTokenItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["vppToken_id"] = id
        return new VppTokenItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.windowsInformationProtectionPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a windowsInformationProtectionPolicyItemRequestBuilder
     */
    public windowsInformationProtectionPoliciesById(id: string) : WindowsInformationProtectionPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionPolicy_id"] = id
        return new WindowsInformationProtectionPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
