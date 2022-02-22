import {DeviceAppManagement} from '../models/microsoft/graph/';
import {AndroidManagedAppProtectionsRequestBuilder} from './androidManagedAppProtections/';
import {AndroidManagedAppProtectionRequestBuilder} from './androidManagedAppProtections/item/';
import {DefaultManagedAppProtectionsRequestBuilder} from './defaultManagedAppProtections/';
import {DefaultManagedAppProtectionRequestBuilder} from './defaultManagedAppProtections/item/';
import {IosManagedAppProtectionsRequestBuilder} from './iosManagedAppProtections/';
import {IosManagedAppProtectionRequestBuilder} from './iosManagedAppProtections/item/';
import {ManagedAppPoliciesRequestBuilder} from './managedAppPolicies/';
import {ManagedAppPolicyRequestBuilder} from './managedAppPolicies/item/';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/';
import {ManagedAppRegistrationRequestBuilder} from './managedAppRegistrations/item/';
import {ManagedAppStatusesRequestBuilder} from './managedAppStatuses/';
import {ManagedAppStatusRequestBuilder} from './managedAppStatuses/item/';
import {ManagedEBooksRequestBuilder} from './managedEBooks/';
import {ManagedEBookRequestBuilder} from './managedEBooks/item/';
import {MdmWindowsInformationProtectionPoliciesRequestBuilder} from './mdmWindowsInformationProtectionPolicies/';
import {MdmWindowsInformationProtectionPolicyRequestBuilder} from './mdmWindowsInformationProtectionPolicies/item/';
import {MobileAppCategoriesRequestBuilder} from './mobileAppCategories/';
import {MobileAppCategoryRequestBuilder} from './mobileAppCategories/item/';
import {MobileAppConfigurationsRequestBuilder} from './mobileAppConfigurations/';
import {ManagedDeviceMobileAppConfigurationRequestBuilder} from './mobileAppConfigurations/item/';
import {MobileAppsRequestBuilder} from './mobileApps/';
import {MobileAppRequestBuilder} from './mobileApps/item/';
import {SyncMicrosoftStoreForBusinessAppsRequestBuilder} from './syncMicrosoftStoreForBusinessApps/';
import {TargetedManagedAppConfigurationsRequestBuilder} from './targetedManagedAppConfigurations/';
import {TargetedManagedAppConfigurationRequestBuilder} from './targetedManagedAppConfigurations/item/';
import {VppTokensRequestBuilder} from './vppTokens/';
import {VppTokenRequestBuilder} from './vppTokens/item/';
import {WindowsInformationProtectionPoliciesRequestBuilder} from './windowsInformationProtectionPolicies/';
import {WindowsInformationProtectionPolicyRequestBuilder} from './windowsInformationProtectionPolicies/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceAppManagement  */
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
     * @returns a androidManagedAppProtectionRequestBuilder
     */
    public androidManagedAppProtectionsById(id: string) : AndroidManagedAppProtectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["androidManagedAppProtection_id"] = id
        return new AndroidManagedAppProtectionRequestBuilder(urlTplParams, this.requestAdapter);
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
     * Update deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceAppManagement | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Gets an item from the MicrosoftGraph.deviceAppManagement.defaultManagedAppProtections.item collection
     * @param id Unique identifier of the item
     * @returns a defaultManagedAppProtectionRequestBuilder
     */
    public defaultManagedAppProtectionsById(id: string) : DefaultManagedAppProtectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["defaultManagedAppProtection_id"] = id
        return new DefaultManagedAppProtectionRequestBuilder(urlTplParams, this.requestAdapter);
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
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceAppManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<DeviceAppManagement>(requestInfo, DeviceAppManagement, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.iosManagedAppProtections.item collection
     * @param id Unique identifier of the item
     * @returns a iosManagedAppProtectionRequestBuilder
     */
    public iosManagedAppProtectionsById(id: string) : IosManagedAppProtectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["iosManagedAppProtection_id"] = id
        return new IosManagedAppProtectionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppPolicyRequestBuilder
     */
    public managedAppPoliciesById(id: string) : ManagedAppPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy_id"] = id
        return new ManagedAppPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppRegistrationRequestBuilder
     */
    public managedAppRegistrationsById(id: string) : ManagedAppRegistrationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppRegistration_id"] = id
        return new ManagedAppRegistrationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a managedAppStatusRequestBuilder
     */
    public managedAppStatusesById(id: string) : ManagedAppStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppStatus_id"] = id
        return new ManagedAppStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedEBooks.item collection
     * @param id Unique identifier of the item
     * @returns a managedEBookRequestBuilder
     */
    public managedEBooksById(id: string) : ManagedEBookRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedEBook_id"] = id
        return new ManagedEBookRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mdmWindowsInformationProtectionPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a mdmWindowsInformationProtectionPolicyRequestBuilder
     */
    public mdmWindowsInformationProtectionPoliciesById(id: string) : MdmWindowsInformationProtectionPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mdmWindowsInformationProtectionPolicy_id"] = id
        return new MdmWindowsInformationProtectionPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppCategories.item collection
     * @param id Unique identifier of the item
     * @returns a mobileAppCategoryRequestBuilder
     */
    public mobileAppCategoriesById(id: string) : MobileAppCategoryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileAppCategory_id"] = id
        return new MobileAppCategoryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationRequestBuilder
     */
    public mobileAppConfigurationsById(id: string) : ManagedDeviceMobileAppConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfiguration_id"] = id
        return new ManagedDeviceMobileAppConfigurationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileApps.item collection
     * @param id Unique identifier of the item
     * @returns a mobileAppRequestBuilder
     */
    public mobileAppsById(id: string) : MobileAppRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mobileApp_id"] = id
        return new MobileAppRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update deviceAppManagement
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceAppManagement | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.targetedManagedAppConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a targetedManagedAppConfigurationRequestBuilder
     */
    public targetedManagedAppConfigurationsById(id: string) : TargetedManagedAppConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["targetedManagedAppConfiguration_id"] = id
        return new TargetedManagedAppConfigurationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.vppTokens.item collection
     * @param id Unique identifier of the item
     * @returns a vppTokenRequestBuilder
     */
    public vppTokensById(id: string) : VppTokenRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["vppToken_id"] = id
        return new VppTokenRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.windowsInformationProtectionPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a windowsInformationProtectionPolicyRequestBuilder
     */
    public windowsInformationProtectionPoliciesById(id: string) : WindowsInformationProtectionPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionPolicy_id"] = id
        return new WindowsInformationProtectionPolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
