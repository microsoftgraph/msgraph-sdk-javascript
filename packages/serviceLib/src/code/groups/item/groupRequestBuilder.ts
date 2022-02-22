import {Group} from '../../models/microsoft/graph/';
import {AcceptedSendersRequestBuilder} from './acceptedSenders/';
import {AddFavoriteRequestBuilder} from './addFavorite/';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/';
import {AppRoleAssignmentRequestBuilder} from './appRoleAssignments/item/';
import {AssignLicenseRequestBuilder} from './assignLicense/';
import {CalendarRequestBuilder} from './calendar/';
import {CalendarViewRequestBuilder} from './calendarView/';
import {EventRequestBuilder as ia36db38b9385abdf1fb756951e1536690223e4982b7e2084afc76bf2470a7803} from './calendarView/item/';
import {CheckGrantedPermissionsForAppRequestBuilder} from './checkGrantedPermissionsForApp/';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/';
import {ConversationsRequestBuilder} from './conversations/';
import {ConversationRequestBuilder} from './conversations/item/';
import {CreatedOnBehalfOfRequestBuilder} from './createdOnBehalfOf/';
import {DriveRequestBuilder as i7a0a837279bf2fec69933ce253cb923f7db8aeaf5bc180d4308e449cdc4e8ac1} from './drive/';
import {DrivesRequestBuilder} from './drives/';
import {DriveRequestBuilder as ib9af17f14dd37abfe384964670ca0df0d68d34f36cec5cd487499b1745b40a84} from './drives/item/';
import {EventsRequestBuilder} from './events/';
import {EventRequestBuilder as ib76fec8f1b7e684b5298f34b67296de875a3a9413e4909f48e21bb28eb942d83} from './events/item/';
import {ExtensionsRequestBuilder} from './extensions/';
import {ExtensionRequestBuilder} from './extensions/item/';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/';
import {GroupLifecyclePolicyRequestBuilder} from './groupLifecyclePolicies/item/';
import {MemberOfRequestBuilder} from './memberOf/';
import {MembersRequestBuilder} from './members/';
import {MembersWithLicenseErrorsRequestBuilder} from './membersWithLicenseErrors/';
import {OnenoteRequestBuilder} from './onenote/';
import {OwnersRequestBuilder} from './owners/';
import {PermissionGrantsRequestBuilder} from './permissionGrants/';
import {ResourceSpecificPermissionGrantRequestBuilder} from './permissionGrants/item/';
import {PhotoRequestBuilder} from './photo/';
import {PhotosRequestBuilder} from './photos/';
import {ProfilePhotoRequestBuilder} from './photos/item/';
import {PlannerRequestBuilder} from './planner/';
import {RejectedSendersRequestBuilder} from './rejectedSenders/';
import {RemoveFavoriteRequestBuilder} from './removeFavorite/';
import {RenewRequestBuilder} from './renew/';
import {ResetUnseenCountRequestBuilder} from './resetUnseenCount/';
import {RestoreRequestBuilder} from './restore/';
import {SettingsRequestBuilder} from './settings/';
import {GroupSettingRequestBuilder} from './settings/item/';
import {SitesRequestBuilder} from './sites/';
import {SiteRequestBuilder} from './sites/item/';
import {SubscribeByMailRequestBuilder} from './subscribeByMail/';
import {TeamRequestBuilder} from './team/';
import {ThreadsRequestBuilder} from './threads/';
import {ConversationThreadRequestBuilder} from './threads/item/';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/';
import {TransitiveMembersRequestBuilder} from './transitiveMembers/';
import {UnsubscribeByMailRequestBuilder} from './unsubscribeByMail/';
import {ValidatePropertiesRequestBuilder} from './validateProperties/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}  */
export class GroupRequestBuilder {
    public get acceptedSenders(): AcceptedSendersRequestBuilder {
        return new AcceptedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get addFavorite(): AddFavoriteRequestBuilder {
        return new AddFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkGrantedPermissionsForApp(): CheckGrantedPermissionsForAppRequestBuilder {
        return new CheckGrantedPermissionsForAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get conversations(): ConversationsRequestBuilder {
        return new ConversationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drive(): i7a0a837279bf2fec69933ce253cb923f7db8aeaf5bc180d4308e449cdc4e8ac1 {
        return new i7a0a837279bf2fec69933ce253cb923f7db8aeaf5bc180d4308e449cdc4e8ac1(this.pathParameters, this.requestAdapter);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get membersWithLicenseErrors(): MembersWithLicenseErrorsRequestBuilder {
        return new MembersWithLicenseErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get photos(): PhotosRequestBuilder {
        return new PhotosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rejectedSenders(): RejectedSendersRequestBuilder {
        return new RejectedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get removeFavorite(): RemoveFavoriteRequestBuilder {
        return new RemoveFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get renew(): RenewRequestBuilder {
        return new RenewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get resetUnseenCount(): ResetUnseenCountRequestBuilder {
        return new ResetUnseenCountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subscribeByMail(): SubscribeByMailRequestBuilder {
        return new SubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get threads(): ThreadsRequestBuilder {
        return new ThreadsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transitiveMembers(): TransitiveMembersRequestBuilder {
        return new TransitiveMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unsubscribeByMail(): UnsubscribeByMailRequestBuilder {
        return new UnsubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.groups.item.appRoleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : AppRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment_id"] = id
        return new AppRoleAssignmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public calendarViewById(id: string) : ia36db38b9385abdf1fb756951e1536690223e4982b7e2084afc76bf2470a7803 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new ia36db38b9385abdf1fb756951e1536690223e4982b7e2084afc76bf2470a7803(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.conversations.item collection
     * @param id Unique identifier of the item
     * @returns a conversationRequestBuilder
     */
    public conversationsById(id: string) : ConversationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversation_id"] = id
        return new ConversationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete entity from groups
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
     * Get entity from groups by key
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
     * Update entity in groups
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Group | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Delete entity from groups
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
     * Gets an item from the MicrosoftGraph.groups.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: string) : ib9af17f14dd37abfe384964670ca0df0d68d34f36cec5cd487499b1745b40a84 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive_id"] = id
        return new ib9af17f14dd37abfe384964670ca0df0d68d34f36cec5cd487499b1745b40a84(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.events.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public eventsById(id: string) : ib76fec8f1b7e684b5298f34b67296de875a3a9413e4909f48e21bb28eb942d83 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new ib76fec8f1b7e684b5298f34b67296de875a3a9413e4909f48e21bb28eb942d83(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a extensionRequestBuilder
     */
    public extensionsById(id: string) : ExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension_id"] = id
        return new ExtensionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get entity from groups by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Group | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Group>(requestInfo, Group, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.groupLifecyclePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a groupLifecyclePolicyRequestBuilder
     */
    public groupLifecyclePoliciesById(id: string) : GroupLifecyclePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupLifecyclePolicy_id"] = id
        return new GroupLifecyclePolicyRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in groups
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Group | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.permissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a resourceSpecificPermissionGrantRequestBuilder
     */
    public permissionGrantsById(id: string) : ResourceSpecificPermissionGrantRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceSpecificPermissionGrant_id"] = id
        return new ResourceSpecificPermissionGrantRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.photos.item collection
     * @param id Unique identifier of the item
     * @returns a profilePhotoRequestBuilder
     */
    public photosById(id: string) : ProfilePhotoRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["profilePhoto_id"] = id
        return new ProfilePhotoRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.settings.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingRequestBuilder
     */
    public settingsById(id: string) : GroupSettingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting_id"] = id
        return new GroupSettingRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.sites.item collection
     * @param id Unique identifier of the item
     * @returns a siteRequestBuilder
     */
    public sitesById(id: string) : SiteRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site_id"] = id
        return new SiteRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.threads.item collection
     * @param id Unique identifier of the item
     * @returns a conversationThreadRequestBuilder
     */
    public threadsById(id: string) : ConversationThreadRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationThread_id"] = id
        return new ConversationThreadRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
