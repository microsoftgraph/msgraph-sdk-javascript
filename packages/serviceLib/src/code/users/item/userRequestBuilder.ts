import {User} from '../../models/microsoft/graph/';
import {ActivitiesRequestBuilder} from './activities/';
import {UserActivityRequestBuilder} from './activities/item/';
import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/';
import {AppRoleAssignmentRequestBuilder} from './appRoleAssignments/item/';
import {AssignLicenseRequestBuilder} from './assignLicense/';
import {AuthenticationRequestBuilder} from './authentication/';
import {CalendarRequestBuilder as i6c719fe1902715ac5e701cbfa8880a9331eff8e6ff5e79876082974dd28e5f19} from './calendar/';
import {CalendarGroupsRequestBuilder} from './calendarGroups/';
import {CalendarGroupRequestBuilder} from './calendarGroups/item/';
import {CalendarsRequestBuilder} from './calendars/';
import {CalendarRequestBuilder as i6b2e5bd64aa71f587973c58d48c020f6ee2dd414d7205621e72447ea089cc020} from './calendars/item/';
import {CalendarViewRequestBuilder} from './calendarView/';
import {EventRequestBuilder as i02f1c21df6b8e8d87396a2bfec8c19625596f8a057b96be3884dac5033c97801} from './calendarView/item/';
import {ChangePasswordRequestBuilder} from './changePassword/';
import {ChatsRequestBuilder} from './chats/';
import {ChatRequestBuilder} from './chats/item/';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/';
import {ContactFoldersRequestBuilder} from './contactFolders/';
import {ContactFolderRequestBuilder} from './contactFolders/item/';
import {ContactsRequestBuilder} from './contacts/';
import {ContactRequestBuilder} from './contacts/item/';
import {CreatedObjectsRequestBuilder} from './createdObjects/';
import {DeviceManagementTroubleshootingEventsRequestBuilder} from './deviceManagementTroubleshootingEvents/';
import {DeviceManagementTroubleshootingEventRequestBuilder} from './deviceManagementTroubleshootingEvents/item/';
import {DirectReportsRequestBuilder} from './directReports/';
import {DriveRequestBuilder as i4eeb439f3427693f979cee247885d0d1aa14c0c13cc37da4db458d8f4e89494b} from './drive/';
import {DrivesRequestBuilder} from './drives/';
import {DriveRequestBuilder as i199655a7773d606af13b86cfe07a47ac1379bafd5538083ec6d3e6a872123994} from './drives/item/';
import {EventsRequestBuilder} from './events/';
import {EventRequestBuilder as ie665d741fa0072ee71512b172a759b3526399df37bfc53ed75b0ae08659cc908} from './events/item/';
import {ExportPersonalDataRequestBuilder} from './exportPersonalData/';
import {ExtensionsRequestBuilder} from './extensions/';
import {ExtensionRequestBuilder} from './extensions/item/';
import {FindMeetingTimesRequestBuilder} from './findMeetingTimes/';
import {FollowedSitesRequestBuilder} from './followedSites/';
import {GetMailTipsRequestBuilder} from './getMailTips/';
import {GetManagedAppDiagnosticStatusesRequestBuilder} from './getManagedAppDiagnosticStatuses/';
import {GetManagedAppPoliciesRequestBuilder} from './getManagedAppPolicies/';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/';
import {InferenceClassificationRequestBuilder} from './inferenceClassification/';
import {InsightsRequestBuilder} from './insights/';
import {JoinedTeamsRequestBuilder} from './joinedTeams/';
import {TeamRequestBuilder} from './joinedTeams/item/';
import {LicenseDetailsRequestBuilder} from './licenseDetails/';
import {MailFoldersRequestBuilder} from './mailFolders/';
import {MailFolderRequestBuilder} from './mailFolders/item/';
import {ManagedAppRegistrationsRequestBuilder} from './managedAppRegistrations/';
import {ManagedDevicesRequestBuilder} from './managedDevices/';
import {ManagedDeviceRequestBuilder} from './managedDevices/item/';
import {ManagerRequestBuilder} from './manager/';
import {MemberOfRequestBuilder} from './memberOf/';
import {MessagesRequestBuilder} from './messages/';
import {MessageRequestBuilder} from './messages/item/';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/';
import {OnenoteRequestBuilder} from './onenote/';
import {OnlineMeetingsRequestBuilder} from './onlineMeetings/';
import {OnlineMeetingRequestBuilder} from './onlineMeetings/item/';
import {OutlookRequestBuilder} from './outlook/';
import {OwnedDevicesRequestBuilder} from './ownedDevices/';
import {OwnedObjectsRequestBuilder} from './ownedObjects/';
import {PeopleRequestBuilder} from './people/';
import {PersonRequestBuilder} from './people/item/';
import {PhotoRequestBuilder} from './photo/';
import {PhotosRequestBuilder} from './photos/';
import {ProfilePhotoRequestBuilder} from './photos/item/';
import {PlannerRequestBuilder} from './planner/';
import {PresenceRequestBuilder} from './presence/';
import {RegisteredDevicesRequestBuilder} from './registeredDevices/';
import {ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder} from './reminderViewWithStartDateTimeWithEndDateTime/';
import {RemoveAllDevicesFromManagementRequestBuilder} from './removeAllDevicesFromManagement/';
import {ReprocessLicenseAssignmentRequestBuilder} from './reprocessLicenseAssignment/';
import {RestoreRequestBuilder} from './restore/';
import {RevokeSignInSessionsRequestBuilder} from './revokeSignInSessions/';
import {ScopedRoleMemberOfRequestBuilder} from './scopedRoleMemberOf/';
import {ScopedRoleMembershipRequestBuilder} from './scopedRoleMemberOf/item/';
import {SendMailRequestBuilder} from './sendMail/';
import {SettingsRequestBuilder} from './settings/';
import {TeamworkRequestBuilder} from './teamwork/';
import {TodoRequestBuilder} from './todo/';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/';
import {TranslateExchangeIdsRequestBuilder} from './translateExchangeIds/';
import {WipeManagedAppRegistrationsByDeviceTagRequestBuilder} from './wipeManagedAppRegistrationsByDeviceTag/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}  */
export class UserRequestBuilder {
    public get activities(): ActivitiesRequestBuilder {
        return new ActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authentication(): AuthenticationRequestBuilder {
        return new AuthenticationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendar(): i6c719fe1902715ac5e701cbfa8880a9331eff8e6ff5e79876082974dd28e5f19 {
        return new i6c719fe1902715ac5e701cbfa8880a9331eff8e6ff5e79876082974dd28e5f19(this.pathParameters, this.requestAdapter);
    }
    public get calendarGroups(): CalendarGroupsRequestBuilder {
        return new CalendarGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendars(): CalendarsRequestBuilder {
        return new CalendarsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get changePassword(): ChangePasswordRequestBuilder {
        return new ChangePasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contactFolders(): ContactFoldersRequestBuilder {
        return new ContactFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceManagementTroubleshootingEvents(): DeviceManagementTroubleshootingEventsRequestBuilder {
        return new DeviceManagementTroubleshootingEventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directReports(): DirectReportsRequestBuilder {
        return new DirectReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drive(): i4eeb439f3427693f979cee247885d0d1aa14c0c13cc37da4db458d8f4e89494b {
        return new i4eeb439f3427693f979cee247885d0d1aa14c0c13cc37da4db458d8f4e89494b(this.pathParameters, this.requestAdapter);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get exportPersonalData(): ExportPersonalDataRequestBuilder {
        return new ExportPersonalDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get findMeetingTimes(): FindMeetingTimesRequestBuilder {
        return new FindMeetingTimesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get followedSites(): FollowedSitesRequestBuilder {
        return new FollowedSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMailTips(): GetMailTipsRequestBuilder {
        return new GetMailTipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get inferenceClassification(): InferenceClassificationRequestBuilder {
        return new InferenceClassificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get insights(): InsightsRequestBuilder {
        return new InsightsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get joinedTeams(): JoinedTeamsRequestBuilder {
        return new JoinedTeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get licenseDetails(): LicenseDetailsRequestBuilder {
        return new LicenseDetailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mailFolders(): MailFoldersRequestBuilder {
        return new MailFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedAppRegistrations(): ManagedAppRegistrationsRequestBuilder {
        return new ManagedAppRegistrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedDevices(): ManagedDevicesRequestBuilder {
        return new ManagedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get manager(): ManagerRequestBuilder {
        return new ManagerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get onlineMeetings(): OnlineMeetingsRequestBuilder {
        return new OnlineMeetingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get outlook(): OutlookRequestBuilder {
        return new OutlookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ownedDevices(): OwnedDevicesRequestBuilder {
        return new OwnedDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get people(): PeopleRequestBuilder {
        return new PeopleRequestBuilder(this.pathParameters, this.requestAdapter);
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
    public get presence(): PresenceRequestBuilder {
        return new PresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get registeredDevices(): RegisteredDevicesRequestBuilder {
        return new RegisteredDevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get removeAllDevicesFromManagement(): RemoveAllDevicesFromManagementRequestBuilder {
        return new RemoveAllDevicesFromManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get reprocessLicenseAssignment(): ReprocessLicenseAssignmentRequestBuilder {
        return new ReprocessLicenseAssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get revokeSignInSessions(): RevokeSignInSessionsRequestBuilder {
        return new RevokeSignInSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get scopedRoleMemberOf(): ScopedRoleMemberOfRequestBuilder {
        return new ScopedRoleMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sendMail(): SendMailRequestBuilder {
        return new SendMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get todo(): TodoRequestBuilder {
        return new TodoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get translateExchangeIds(): TranslateExchangeIdsRequestBuilder {
        return new TranslateExchangeIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get wipeManagedAppRegistrationsByDeviceTag(): WipeManagedAppRegistrationsByDeviceTagRequestBuilder {
        return new WipeManagedAppRegistrationsByDeviceTagRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.users.item.activities.item collection
     * @param id Unique identifier of the item
     * @returns a userActivityRequestBuilder
     */
    public activitiesById(id: string) : UserActivityRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userActivity_id"] = id
        return new UserActivityRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.appRoleAssignments.item collection
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
     * Gets an item from the MicrosoftGraph.users.item.calendarGroups.item collection
     * @param id Unique identifier of the item
     * @returns a calendarGroupRequestBuilder
     */
    public calendarGroupsById(id: string) : CalendarGroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarGroup_id"] = id
        return new CalendarGroupRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.calendars.item collection
     * @param id Unique identifier of the item
     * @returns a calendarRequestBuilder
     */
    public calendarsById(id: string) : i6b2e5bd64aa71f587973c58d48c020f6ee2dd414d7205621e72447ea089cc020 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendar_id"] = id
        return new i6b2e5bd64aa71f587973c58d48c020f6ee2dd414d7205621e72447ea089cc020(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public calendarViewById(id: string) : i02f1c21df6b8e8d87396a2bfec8c19625596f8a057b96be3884dac5033c97801 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new i02f1c21df6b8e8d87396a2bfec8c19625596f8a057b96be3884dac5033c97801(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.chats.item collection
     * @param id Unique identifier of the item
     * @returns a chatRequestBuilder
     */
    public chatsById(id: string) : ChatRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chat_id"] = id
        return new ChatRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.contactFolders.item collection
     * @param id Unique identifier of the item
     * @returns a contactFolderRequestBuilder
     */
    public contactFoldersById(id: string) : ContactFolderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contactFolder_id"] = id
        return new ContactFolderRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.contacts.item collection
     * @param id Unique identifier of the item
     * @returns a contactRequestBuilder
     */
    public contactsById(id: string) : ContactRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contact_id"] = id
        return new ContactRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete entity from users
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
     * Get entity from users by key
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
     * Update entity in users
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: User | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Delete entity from users
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
     * Gets an item from the MicrosoftGraph.users.item.deviceManagementTroubleshootingEvents.item collection
     * @param id Unique identifier of the item
     * @returns a deviceManagementTroubleshootingEventRequestBuilder
     */
    public deviceManagementTroubleshootingEventsById(id: string) : DeviceManagementTroubleshootingEventRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementTroubleshootingEvent_id"] = id
        return new DeviceManagementTroubleshootingEventRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: string) : i199655a7773d606af13b86cfe07a47ac1379bafd5538083ec6d3e6a872123994 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive_id"] = id
        return new i199655a7773d606af13b86cfe07a47ac1379bafd5538083ec6d3e6a872123994(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.events.item collection
     * @param id Unique identifier of the item
     * @returns a eventRequestBuilder
     */
    public eventsById(id: string) : ie665d741fa0072ee71512b172a759b3526399df37bfc53ed75b0ae08659cc908 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new ie665d741fa0072ee71512b172a759b3526399df37bfc53ed75b0ae08659cc908(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.extensions.item collection
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
     * Get entity from users by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of User
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<User | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<User>(requestInfo, User, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/microsoft.graph.getManagedAppDiagnosticStatuses()
     * @returns a getManagedAppDiagnosticStatusesRequestBuilder
     */
    public getManagedAppDiagnosticStatuses() : GetManagedAppDiagnosticStatusesRequestBuilder {
        return new GetManagedAppDiagnosticStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/microsoft.graph.getManagedAppPolicies()
     * @returns a getManagedAppPoliciesRequestBuilder
     */
    public getManagedAppPolicies() : GetManagedAppPoliciesRequestBuilder {
        return new GetManagedAppPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.joinedTeams.item collection
     * @param id Unique identifier of the item
     * @returns a teamRequestBuilder
     */
    public joinedTeamsById(id: string) : TeamRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team_id"] = id
        return new TeamRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.licenseDetails.item collection
     * @param id Unique identifier of the item
     * @returns a licenseDetailsRequestBuilder
     */
    public licenseDetailsById(id: string) : LicenseDetailsRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["licenseDetails_id"] = id
        return new LicenseDetailsRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.mailFolders.item collection
     * @param id Unique identifier of the item
     * @returns a mailFolderRequestBuilder
     */
    public mailFoldersById(id: string) : MailFolderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mailFolder_id"] = id
        return new MailFolderRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.managedDevices.item collection
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
     * Gets an item from the MicrosoftGraph.users.item.messages.item collection
     * @param id Unique identifier of the item
     * @returns a messageRequestBuilder
     */
    public messagesById(id: string) : MessageRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["message_id"] = id
        return new MessageRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.onlineMeetings.item collection
     * @param id Unique identifier of the item
     * @returns a onlineMeetingRequestBuilder
     */
    public onlineMeetingsById(id: string) : OnlineMeetingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onlineMeeting_id"] = id
        return new OnlineMeetingRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in users
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: User | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.people.item collection
     * @param id Unique identifier of the item
     * @returns a personRequestBuilder
     */
    public peopleById(id: string) : PersonRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["person_id"] = id
        return new PersonRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.photos.item collection
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
     * Builds and executes requests for operations under /users/{user-id}/microsoft.graph.reminderView(StartDateTime='{StartDateTime}',EndDateTime='{EndDateTime}')
     * @param EndDateTime Usage: EndDateTime={EndDateTime}
     * @param StartDateTime Usage: StartDateTime={StartDateTime}
     * @returns a reminderViewWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public reminderViewWithStartDateTimeWithEndDateTime(startDateTime: string | undefined, endDateTime: string | undefined) : ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!endDateTime) throw new Error("endDateTime cannot be undefined");
        if(!startDateTime) throw new Error("startDateTime cannot be undefined");
        return new ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, startDateTime, endDateTime);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.scopedRoleMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a scopedRoleMembershipRequestBuilder
     */
    public scopedRoleMemberOfById(id: string) : ScopedRoleMembershipRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership_id"] = id
        return new ScopedRoleMembershipRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
