import {ManagedDevice} from '../../../models/microsoft/graph/';
import {BypassActivationLockRequestBuilder} from './bypassActivationLock/';
import {CleanWindowsDeviceRequestBuilder} from './cleanWindowsDevice/';
import {DeleteUserFromSharedAppleDeviceRequestBuilder} from './deleteUserFromSharedAppleDevice/';
import {DeviceCategoryRequestBuilder} from './deviceCategory/';
import {DeviceCompliancePolicyStatesRequestBuilder} from './deviceCompliancePolicyStates/';
import {DeviceCompliancePolicyStateRequestBuilder} from './deviceCompliancePolicyStates/item/';
import {DeviceConfigurationStatesRequestBuilder} from './deviceConfigurationStates/';
import {DeviceConfigurationStateRequestBuilder} from './deviceConfigurationStates/item/';
import {DisableLostModeRequestBuilder} from './disableLostMode/';
import {LocateDeviceRequestBuilder} from './locateDevice/';
import {LogoutSharedAppleDeviceActiveUserRequestBuilder} from './logoutSharedAppleDeviceActiveUser/';
import {RebootNowRequestBuilder} from './rebootNow/';
import {RecoverPasscodeRequestBuilder} from './recoverPasscode/';
import {RemoteLockRequestBuilder} from './remoteLock/';
import {RequestRemoteAssistanceRequestBuilder} from './requestRemoteAssistance/';
import {ResetPasscodeRequestBuilder} from './resetPasscode/';
import {RetireRequestBuilder} from './retire/';
import {ShutDownRequestBuilder} from './shutDown/';
import {SyncDeviceRequestBuilder} from './syncDevice/';
import {UpdateWindowsDeviceAccountRequestBuilder} from './updateWindowsDeviceAccount/';
import {WindowsDefenderScanRequestBuilder} from './windowsDefenderScan/';
import {WindowsDefenderUpdateSignaturesRequestBuilder} from './windowsDefenderUpdateSignatures/';
import {WipeRequestBuilder} from './wipe/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/managedDevices/{managedDevice-id}  */
export class ManagedDeviceRequestBuilder {
    public get bypassActivationLock(): BypassActivationLockRequestBuilder {
        return new BypassActivationLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cleanWindowsDevice(): CleanWindowsDeviceRequestBuilder {
        return new CleanWindowsDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deleteUserFromSharedAppleDevice(): DeleteUserFromSharedAppleDeviceRequestBuilder {
        return new DeleteUserFromSharedAppleDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCategory(): DeviceCategoryRequestBuilder {
        return new DeviceCategoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCompliancePolicyStates(): DeviceCompliancePolicyStatesRequestBuilder {
        return new DeviceCompliancePolicyStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceConfigurationStates(): DeviceConfigurationStatesRequestBuilder {
        return new DeviceConfigurationStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get disableLostMode(): DisableLostModeRequestBuilder {
        return new DisableLostModeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get locateDevice(): LocateDeviceRequestBuilder {
        return new LocateDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get logoutSharedAppleDeviceActiveUser(): LogoutSharedAppleDeviceActiveUserRequestBuilder {
        return new LogoutSharedAppleDeviceActiveUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get rebootNow(): RebootNowRequestBuilder {
        return new RebootNowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get recoverPasscode(): RecoverPasscodeRequestBuilder {
        return new RecoverPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get remoteLock(): RemoteLockRequestBuilder {
        return new RemoteLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get requestRemoteAssistance(): RequestRemoteAssistanceRequestBuilder {
        return new RequestRemoteAssistanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get resetPasscode(): ResetPasscodeRequestBuilder {
        return new ResetPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get retire(): RetireRequestBuilder {
        return new RetireRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get shutDown(): ShutDownRequestBuilder {
        return new ShutDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get syncDevice(): SyncDeviceRequestBuilder {
        return new SyncDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get updateWindowsDeviceAccount(): UpdateWindowsDeviceAccountRequestBuilder {
        return new UpdateWindowsDeviceAccountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get windowsDefenderScan(): WindowsDefenderScanRequestBuilder {
        return new WindowsDefenderScanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get windowsDefenderUpdateSignatures(): WindowsDefenderUpdateSignaturesRequestBuilder {
        return new WindowsDefenderUpdateSignaturesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get wipe(): WipeRequestBuilder {
        return new WipeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedDeviceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/managedDevices/{managedDevice_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The managed devices associated with the user.
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
     * The managed devices associated with the user.
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
     * The managed devices associated with the user.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDevice | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * The managed devices associated with the user.
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
     * Gets an item from the MicrosoftGraph.me.managedDevices.item.deviceCompliancePolicyStates.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyStateRequestBuilder
     */
    public deviceCompliancePolicyStatesById(id: string) : DeviceCompliancePolicyStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicyState_id"] = id
        return new DeviceCompliancePolicyStateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.me.managedDevices.item.deviceConfigurationStates.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationStateRequestBuilder
     */
    public deviceConfigurationStatesById(id: string) : DeviceConfigurationStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationState_id"] = id
        return new DeviceConfigurationStateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The managed devices associated with the user.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDevice
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDevice | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<ManagedDevice>(requestInfo, ManagedDevice, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The managed devices associated with the user.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedDevice | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
