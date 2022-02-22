import {AdminRequestBuilder} from './admin/';
import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/';
import {AgreementAcceptanceRequestBuilder} from './agreementAcceptances/item/';
import {AgreementsRequestBuilder} from './agreements/';
import {AgreementRequestBuilder} from './agreements/item/';
import {AppCatalogsRequestBuilder} from './appCatalogs/';
import {ApplicationsRequestBuilder} from './applications/';
import {ApplicationRequestBuilder} from './applications/item/';
import {ApplicationTemplatesRequestBuilder} from './applicationTemplates/';
import {ApplicationTemplateRequestBuilder} from './applicationTemplates/item/';
import {AuditLogsRequestBuilder} from './auditLogs/';
import {AuthenticationMethodConfigurationsRequestBuilder} from './authenticationMethodConfigurations/';
import {AuthenticationMethodConfigurationRequestBuilder} from './authenticationMethodConfigurations/item/';
import {AuthenticationMethodsPolicyRequestBuilder} from './authenticationMethodsPolicy/';
import {BrandingRequestBuilder} from './branding/';
import {CertificateBasedAuthConfigurationRequestBuilder} from './certificateBasedAuthConfiguration/';
import {ChatsRequestBuilder} from './chats/';
import {ChatRequestBuilder} from './chats/item/';
import {CommunicationsRequestBuilder} from './communications/';
import {ComplianceRequestBuilder} from './compliance/';
import {ConnectionsRequestBuilder} from './connections/';
import {ExternalConnectionRequestBuilder} from './connections/item/';
import {ContactsRequestBuilder} from './contacts/';
import {OrgContactRequestBuilder} from './contacts/item/';
import {ContractsRequestBuilder} from './contracts/';
import {ContractRequestBuilder} from './contracts/item/';
import {DataPolicyOperationsRequestBuilder} from './dataPolicyOperations/';
import {DataPolicyOperationRequestBuilder} from './dataPolicyOperations/item/';
import {DeviceAppManagementRequestBuilder} from './deviceAppManagement/';
import {DeviceManagementRequestBuilder} from './deviceManagement/';
import {DevicesRequestBuilder} from './devices/';
import {DeviceRequestBuilder} from './devices/item/';
import {DirectoryRequestBuilder} from './directory/';
import {DirectoryObjectsRequestBuilder} from './directoryObjects/';
import {DirectoryObjectRequestBuilder} from './directoryObjects/item/';
import {DirectoryRolesRequestBuilder} from './directoryRoles/';
import {DirectoryRoleRequestBuilder} from './directoryRoles/item/';
import {DirectoryRoleTemplatesRequestBuilder} from './directoryRoleTemplates/';
import {DirectoryRoleTemplateRequestBuilder} from './directoryRoleTemplates/item/';
import {DomainDnsRecordsRequestBuilder} from './domainDnsRecords/';
import {DomainDnsRecordRequestBuilder} from './domainDnsRecords/item/';
import {DomainsRequestBuilder} from './domains/';
import {DomainRequestBuilder} from './domains/item/';
import {DriveRequestBuilder as idd52882826a9bc89cb164caf0cc23e2cbb893fc35bb678090663056b437c4450} from './drive/';
import {DrivesRequestBuilder} from './drives/';
import {DriveRequestBuilder as ia10b1b090b200a6fc019aaaa448bbaab35f973bd12d5508a5c3720529509cb60} from './drives/item/';
import {EducationRequestBuilder} from './education/';
import {ExternalRequestBuilder} from './external/';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/';
import {GroupLifecyclePolicyRequestBuilder} from './groupLifecyclePolicies/item/';
import {GroupsRequestBuilder} from './groups/';
import {GroupRequestBuilder} from './groups/item/';
import {GroupSettingsRequestBuilder} from './groupSettings/';
import {GroupSettingRequestBuilder} from './groupSettings/item/';
import {GroupSettingTemplatesRequestBuilder} from './groupSettingTemplates/';
import {GroupSettingTemplateRequestBuilder} from './groupSettingTemplates/item/';
import {IdentityRequestBuilder} from './identity/';
import {IdentityGovernanceRequestBuilder} from './identityGovernance/';
import {IdentityProtectionRequestBuilder} from './identityProtection/';
import {IdentityProvidersRequestBuilder} from './identityProviders/';
import {IdentityProviderRequestBuilder} from './identityProviders/item/';
import {InformationProtectionRequestBuilder} from './informationProtection/';
import {InvitationsRequestBuilder} from './invitations/';
import {InvitationRequestBuilder} from './invitations/item/';
import {LocalizationsRequestBuilder} from './localizations/';
import {OrganizationalBrandingLocalizationRequestBuilder} from './localizations/item/';
import {MeRequestBuilder} from './me/';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/';
import {OAuth2PermissionGrantRequestBuilder} from './oauth2PermissionGrants/item/';
import {OrganizationRequestBuilder} from './organization/';
import {PermissionGrantsRequestBuilder} from './permissionGrants/';
import {ResourceSpecificPermissionGrantRequestBuilder} from './permissionGrants/item/';
import {PlacesRequestBuilder} from './places/';
import {PlaceRequestBuilder} from './places/item/';
import {PlannerRequestBuilder} from './planner/';
import {PoliciesRequestBuilder} from './policies/';
import {PrintRequestBuilder} from './print/';
import {PrivacyRequestBuilder} from './privacy/';
import {ReportsRequestBuilder} from './reports/';
import {RoleManagementRequestBuilder} from './roleManagement/';
import {SchemaExtensionsRequestBuilder} from './schemaExtensions/';
import {SchemaExtensionRequestBuilder} from './schemaExtensions/item/';
import {ScopedRoleMembershipsRequestBuilder} from './scopedRoleMemberships/';
import {ScopedRoleMembershipRequestBuilder} from './scopedRoleMemberships/item/';
import {SearchRequestBuilder} from './search/';
import {SecurityRequestBuilder} from './security/';
import {ServicePrincipalsRequestBuilder} from './servicePrincipals/';
import {ServicePrincipalRequestBuilder} from './servicePrincipals/item/';
import {SharesRequestBuilder} from './shares/';
import {SharedDriveItemRequestBuilder} from './shares/item/';
import {SitesRequestBuilder} from './sites/';
import {SiteRequestBuilder} from './sites/item/';
import {SolutionsRequestBuilder} from './solutions/';
import {SubscribedSkusRequestBuilder} from './subscribedSkus/';
import {SubscribedSkuRequestBuilder} from './subscribedSkus/item/';
import {SubscriptionsRequestBuilder} from './subscriptions/';
import {SubscriptionRequestBuilder} from './subscriptions/item/';
import {TeamsRequestBuilder} from './teams/';
import {TeamRequestBuilder} from './teams/item/';
import {TeamsTemplatesRequestBuilder} from './teamsTemplates/';
import {TeamsTemplateRequestBuilder} from './teamsTemplates/item/';
import {TeamworkRequestBuilder} from './teamwork/';
import {UsersRequestBuilder} from './users/';
import {UserRequestBuilder} from './users/item/';
import {WorkbooksRequestBuilder} from './workbooks/';
import {DriveItemRequestBuilder} from './workbooks/item/';
import {enableBackingStoreForSerializationWriterFactory, getPathParameters, HttpMethod, Parsable, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, RequestInformation, RequestOption, ResponseHandler, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';

/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
export class GraphServiceClient {
    public get admin(): AdminRequestBuilder {
        return new AdminRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get agreementAcceptances(): AgreementAcceptancesRequestBuilder {
        return new AgreementAcceptancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get agreements(): AgreementsRequestBuilder {
        return new AgreementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appCatalogs(): AppCatalogsRequestBuilder {
        return new AppCatalogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applications(): ApplicationsRequestBuilder {
        return new ApplicationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applicationTemplates(): ApplicationTemplatesRequestBuilder {
        return new ApplicationTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get auditLogs(): AuditLogsRequestBuilder {
        return new AuditLogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder {
        return new AuthenticationMethodConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder {
        return new AuthenticationMethodsPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get branding(): BrandingRequestBuilder {
        return new BrandingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get certificateBasedAuthConfiguration(): CertificateBasedAuthConfigurationRequestBuilder {
        return new CertificateBasedAuthConfigurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get chats(): ChatsRequestBuilder {
        return new ChatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get communications(): CommunicationsRequestBuilder {
        return new CommunicationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get compliance(): ComplianceRequestBuilder {
        return new ComplianceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get connections(): ConnectionsRequestBuilder {
        return new ConnectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get contracts(): ContractsRequestBuilder {
        return new ContractsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dataPolicyOperations(): DataPolicyOperationsRequestBuilder {
        return new DataPolicyOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceAppManagement(): DeviceAppManagementRequestBuilder {
        return new DeviceAppManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceManagement(): DeviceManagementRequestBuilder {
        return new DeviceManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get devices(): DevicesRequestBuilder {
        return new DevicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directory(): DirectoryRequestBuilder {
        return new DirectoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directoryObjects(): DirectoryObjectsRequestBuilder {
        return new DirectoryObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directoryRoles(): DirectoryRolesRequestBuilder {
        return new DirectoryRolesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder {
        return new DirectoryRoleTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get domainDnsRecords(): DomainDnsRecordsRequestBuilder {
        return new DomainDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get domains(): DomainsRequestBuilder {
        return new DomainsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get drive(): idd52882826a9bc89cb164caf0cc23e2cbb893fc35bb678090663056b437c4450 {
        return new idd52882826a9bc89cb164caf0cc23e2cbb893fc35bb678090663056b437c4450(this.pathParameters, this.requestAdapter);
    }
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get education(): EducationRequestBuilder {
        return new EducationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get external(): ExternalRequestBuilder {
        return new ExternalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groups(): GroupsRequestBuilder {
        return new GroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupSettings(): GroupSettingsRequestBuilder {
        return new GroupSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get groupSettingTemplates(): GroupSettingTemplatesRequestBuilder {
        return new GroupSettingTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identity(): IdentityRequestBuilder {
        return new IdentityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityGovernance(): IdentityGovernanceRequestBuilder {
        return new IdentityGovernanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityProtection(): IdentityProtectionRequestBuilder {
        return new IdentityProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get identityProviders(): IdentityProvidersRequestBuilder {
        return new IdentityProvidersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get informationProtection(): InformationProtectionRequestBuilder {
        return new InformationProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get invitations(): InvitationsRequestBuilder {
        return new InvitationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get localizations(): LocalizationsRequestBuilder {
        return new LocalizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get me(): MeRequestBuilder {
        return new MeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get organization(): OrganizationRequestBuilder {
        return new OrganizationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get places(): PlacesRequestBuilder {
        return new PlacesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get policies(): PoliciesRequestBuilder {
        return new PoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get print(): PrintRequestBuilder {
        return new PrintRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get privacy(): PrivacyRequestBuilder {
        return new PrivacyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get reports(): ReportsRequestBuilder {
        return new ReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get roleManagement(): RoleManagementRequestBuilder {
        return new RoleManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get schemaExtensions(): SchemaExtensionsRequestBuilder {
        return new SchemaExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder {
        return new ScopedRoleMembershipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get search(): SearchRequestBuilder {
        return new SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get security(): SecurityRequestBuilder {
        return new SecurityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get servicePrincipals(): ServicePrincipalsRequestBuilder {
        return new ServicePrincipalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get shares(): SharesRequestBuilder {
        return new SharesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get solutions(): SolutionsRequestBuilder {
        return new SolutionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subscribedSkus(): SubscribedSkusRequestBuilder {
        return new SubscribedSkusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teams(): TeamsRequestBuilder {
        return new TeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teamsTemplates(): TeamsTemplatesRequestBuilder {
        return new TeamsTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teamwork(): TeamworkRequestBuilder {
        return new TeamworkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbooks(): WorkbooksRequestBuilder {
        return new WorkbooksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.agreementAcceptances.item collection
     * @param id Unique identifier of the item
     * @returns a agreementAcceptanceRequestBuilder
     */
    public agreementAcceptancesById(id: string) : AgreementAcceptanceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementAcceptance_id"] = id
        return new AgreementAcceptanceRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.agreements.item collection
     * @param id Unique identifier of the item
     * @returns a agreementRequestBuilder
     */
    public agreementsById(id: string) : AgreementRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreement_id"] = id
        return new AgreementRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.applications.item collection
     * @param id Unique identifier of the item
     * @returns a applicationRequestBuilder
     */
    public applicationsById(id: string) : ApplicationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["application_id"] = id
        return new ApplicationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.applicationTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a applicationTemplateRequestBuilder
     */
    public applicationTemplatesById(id: string) : ApplicationTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["applicationTemplate_id"] = id
        return new ApplicationTemplateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.authenticationMethodConfigurations.item collection
     * @param id Unique identifier of the item
     * @returns a authenticationMethodConfigurationRequestBuilder
     */
    public authenticationMethodConfigurationsById(id: string) : AuthenticationMethodConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationMethodConfiguration_id"] = id
        return new AuthenticationMethodConfigurationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.certificateBasedAuthConfiguration.item collection
     * @param id Unique identifier of the item
     * @returns a certificateBasedAuthConfigurationRequestBuilder
     */
    public certificateBasedAuthConfigurationById(id: string) : CertificateBasedAuthConfigurationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["certificateBasedAuthConfiguration_id"] = id
        return new CertificateBasedAuthConfigurationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.chats.item collection
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
     * Gets an item from the MicrosoftGraph.connections.item collection
     * @param id Unique identifier of the item
     * @returns a externalConnectionRequestBuilder
     */
    public connectionsById(id: string) : ExternalConnectionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["externalConnection_id"] = id
        return new ExternalConnectionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GraphServiceClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    };
    /**
     * Gets an item from the MicrosoftGraph.contacts.item collection
     * @param id Unique identifier of the item
     * @returns a orgContactRequestBuilder
     */
    public contactsById(id: string) : OrgContactRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["orgContact_id"] = id
        return new OrgContactRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.contracts.item collection
     * @param id Unique identifier of the item
     * @returns a contractRequestBuilder
     */
    public contractsById(id: string) : ContractRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contract_id"] = id
        return new ContractRequestBuilder(urlTplParams, this.requestAdapter);
    };
    public createGetRequestInformation(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.dataPolicyOperations.item collection
     * @param id Unique identifier of the item
     * @returns a dataPolicyOperationRequestBuilder
     */
    public dataPolicyOperationsById(id: string) : DataPolicyOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataPolicyOperation_id"] = id
        return new DataPolicyOperationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.devices.item collection
     * @param id Unique identifier of the item
     * @returns a deviceRequestBuilder
     */
    public devicesById(id: string) : DeviceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["device_id"] = id
        return new DeviceRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.directoryObjects.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectRequestBuilder
     */
    public directoryObjectsById(id: string) : DirectoryObjectRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject_id"] = id
        return new DirectoryObjectRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.directoryRoles.item collection
     * @param id Unique identifier of the item
     * @returns a directoryRoleRequestBuilder
     */
    public directoryRolesById(id: string) : DirectoryRoleRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryRole_id"] = id
        return new DirectoryRoleRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.directoryRoleTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a directoryRoleTemplateRequestBuilder
     */
    public directoryRoleTemplatesById(id: string) : DirectoryRoleTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryRoleTemplate_id"] = id
        return new DirectoryRoleTemplateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.domainDnsRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordRequestBuilder
     */
    public domainDnsRecordsById(id: string) : DomainDnsRecordRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord_id"] = id
        return new DomainDnsRecordRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.domains.item collection
     * @param id Unique identifier of the item
     * @returns a domainRequestBuilder
     */
    public domainsById(id: string) : DomainRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domain_id"] = id
        return new DomainRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.drives.item collection
     * @param id Unique identifier of the item
     * @returns a driveRequestBuilder
     */
    public drivesById(id: string) : ia10b1b090b200a6fc019aaaa448bbaab35f973bd12d5508a5c3720529509cb60 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive_id"] = id
        return new ia10b1b090b200a6fc019aaaa448bbaab35f973bd12d5508a5c3720529509cb60(urlTplParams, this.requestAdapter);
    };
    public get(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groupLifecyclePolicies.item collection
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
     * Gets an item from the MicrosoftGraph.groups.item collection
     * @param id Unique identifier of the item
     * @returns a groupRequestBuilder
     */
    public groupsById(id: string) : GroupRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group_id"] = id
        return new GroupRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groupSettings.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingRequestBuilder
     */
    public groupSettingsById(id: string) : GroupSettingRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting_id"] = id
        return new GroupSettingRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groupSettingTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a groupSettingTemplateRequestBuilder
     */
    public groupSettingTemplatesById(id: string) : GroupSettingTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSettingTemplate_id"] = id
        return new GroupSettingTemplateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.identityProviders.item collection
     * @param id Unique identifier of the item
     * @returns a identityProviderRequestBuilder
     */
    public identityProvidersById(id: string) : IdentityProviderRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProvider_id"] = id
        return new IdentityProviderRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.invitations.item collection
     * @param id Unique identifier of the item
     * @returns a invitationRequestBuilder
     */
    public invitationsById(id: string) : InvitationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["invitation_id"] = id
        return new InvitationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.localizations.item collection
     * @param id Unique identifier of the item
     * @returns a organizationalBrandingLocalizationRequestBuilder
     */
    public localizationsById(id: string) : OrganizationalBrandingLocalizationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organizationalBrandingLocalization_id"] = id
        return new OrganizationalBrandingLocalizationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.oauth2PermissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a oAuth2PermissionGrantRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant_id"] = id
        return new OAuth2PermissionGrantRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.organization.item collection
     * @param id Unique identifier of the item
     * @returns a organizationRequestBuilder
     */
    public organizationById(id: string) : OrganizationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organization_id"] = id
        return new OrganizationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.permissionGrants.item collection
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
     * Gets an item from the MicrosoftGraph.places.item collection
     * @param id Unique identifier of the item
     * @returns a placeRequestBuilder
     */
    public placesById(id: string) : PlaceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["place_id"] = id
        return new PlaceRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.schemaExtensions.item collection
     * @param id Unique identifier of the item
     * @returns a schemaExtensionRequestBuilder
     */
    public schemaExtensionsById(id: string) : SchemaExtensionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schemaExtension_id"] = id
        return new SchemaExtensionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.scopedRoleMemberships.item collection
     * @param id Unique identifier of the item
     * @returns a scopedRoleMembershipRequestBuilder
     */
    public scopedRoleMembershipsById(id: string) : ScopedRoleMembershipRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership_id"] = id
        return new ScopedRoleMembershipRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item collection
     * @param id Unique identifier of the item
     * @returns a servicePrincipalRequestBuilder
     */
    public servicePrincipalsById(id: string) : ServicePrincipalRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["servicePrincipal_id"] = id
        return new ServicePrincipalRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.shares.item collection
     * @param id Unique identifier of the item
     * @returns a sharedDriveItemRequestBuilder
     */
    public sharesById(id: string) : SharedDriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedDriveItem_id"] = id
        return new SharedDriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item collection
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
     * Gets an item from the MicrosoftGraph.subscribedSkus.item collection
     * @param id Unique identifier of the item
     * @returns a subscribedSkuRequestBuilder
     */
    public subscribedSkusById(id: string) : SubscribedSkuRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscribedSku_id"] = id
        return new SubscribedSkuRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a subscriptionRequestBuilder
     */
    public subscriptionsById(id: string) : SubscriptionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription_id"] = id
        return new SubscriptionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teams.item collection
     * @param id Unique identifier of the item
     * @returns a teamRequestBuilder
     */
    public teamsById(id: string) : TeamRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team_id"] = id
        return new TeamRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.teamsTemplates.item collection
     * @param id Unique identifier of the item
     * @returns a teamsTemplateRequestBuilder
     */
    public teamsTemplatesById(id: string) : TeamsTemplateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsTemplate_id"] = id
        return new TeamsTemplateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item collection
     * @param id Unique identifier of the item
     * @returns a userRequestBuilder
     */
    public usersById(id: string) : UserRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["user_id"] = id
        return new UserRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item collection
     * @param id Unique identifier of the item
     * @returns a driveItemRequestBuilder
     */
    public workbooksById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem_id"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
