import {AdminRequestBuilder} from './admin/';
import {AgreementAcceptancesRequestBuilder} from './agreementAcceptances/';
import {AgreementAcceptanceItemRequestBuilder} from './agreementAcceptances/item/';
import {AgreementsRequestBuilder} from './agreements/';
import {AgreementItemRequestBuilder} from './agreements/item/';
import {AppCatalogsRequestBuilder} from './appCatalogs/';
import {ApplicationsRequestBuilder} from './applications/';
import {ApplicationItemRequestBuilder} from './applications/item/';
import {ApplicationTemplatesRequestBuilder} from './applicationTemplates/';
import {ApplicationTemplateItemRequestBuilder} from './applicationTemplates/item/';
import {AuditLogsRequestBuilder} from './auditLogs/';
import {AuthenticationMethodConfigurationsRequestBuilder} from './authenticationMethodConfigurations/';
import {AuthenticationMethodConfigurationItemRequestBuilder} from './authenticationMethodConfigurations/item/';
import {AuthenticationMethodsPolicyRequestBuilder} from './authenticationMethodsPolicy/';
import {BrandingRequestBuilder} from './branding/';
import {CertificateBasedAuthConfigurationRequestBuilder} from './certificateBasedAuthConfiguration/';
import {CertificateBasedAuthConfigurationItemRequestBuilder} from './certificateBasedAuthConfiguration/item/';
import {ChatsRequestBuilder} from './chats/';
import {ChatItemRequestBuilder} from './chats/item/';
import {CommunicationsRequestBuilder} from './communications/';
import {ComplianceRequestBuilder} from './compliance/';
import {ConnectionsRequestBuilder} from './connections/';
import {ExternalConnectionItemRequestBuilder} from './connections/item/';
import {ContactsRequestBuilder} from './contacts/';
import {OrgContactItemRequestBuilder} from './contacts/item/';
import {ContractsRequestBuilder} from './contracts/';
import {ContractItemRequestBuilder} from './contracts/item/';
import {DataPolicyOperationsRequestBuilder} from './dataPolicyOperations/';
import {DataPolicyOperationItemRequestBuilder} from './dataPolicyOperations/item/';
import {DeviceAppManagementRequestBuilder} from './deviceAppManagement/';
import {DeviceManagementRequestBuilder} from './deviceManagement/';
import {DevicesRequestBuilder} from './devices/';
import {DeviceItemRequestBuilder} from './devices/item/';
import {DirectoryRequestBuilder} from './directory/';
import {DirectoryObjectsRequestBuilder} from './directoryObjects/';
import {DirectoryObjectItemRequestBuilder} from './directoryObjects/item/';
import {DirectoryRolesRequestBuilder} from './directoryRoles/';
import {DirectoryRoleItemRequestBuilder} from './directoryRoles/item/';
import {DirectoryRoleTemplatesRequestBuilder} from './directoryRoleTemplates/';
import {DirectoryRoleTemplateItemRequestBuilder} from './directoryRoleTemplates/item/';
import {DomainDnsRecordsRequestBuilder} from './domainDnsRecords/';
import {DomainDnsRecordItemRequestBuilder} from './domainDnsRecords/item/';
import {DomainsRequestBuilder} from './domains/';
import {DomainItemRequestBuilder} from './domains/item/';
import {DriveRequestBuilder} from './drive/';
import {DrivesRequestBuilder} from './drives/';
import {DriveItemRequestBuilder} from './drives/item/';
import {EducationRequestBuilder} from './education/';
import {ExternalRequestBuilder} from './external/';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/';
import {GroupLifecyclePolicyItemRequestBuilder} from './groupLifecyclePolicies/item/';
import {GroupsRequestBuilder} from './groups/';
import {GroupItemRequestBuilder} from './groups/item/';
import {GroupSettingsRequestBuilder} from './groupSettings/';
import {GroupSettingItemRequestBuilder} from './groupSettings/item/';
import {GroupSettingTemplatesRequestBuilder} from './groupSettingTemplates/';
import {GroupSettingTemplateItemRequestBuilder} from './groupSettingTemplates/item/';
import {IdentityRequestBuilder} from './identity/';
import {IdentityGovernanceRequestBuilder} from './identityGovernance/';
import {IdentityProtectionRequestBuilder} from './identityProtection/';
import {IdentityProvidersRequestBuilder} from './identityProviders/';
import {IdentityProviderItemRequestBuilder} from './identityProviders/item/';
import {InformationProtectionRequestBuilder} from './informationProtection/';
import {InvitationsRequestBuilder} from './invitations/';
import {InvitationItemRequestBuilder} from './invitations/item/';
import {LocalizationsRequestBuilder} from './localizations/';
import {OrganizationalBrandingLocalizationItemRequestBuilder} from './localizations/item/';
import {MeRequestBuilder} from './me/';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/';
import {OrganizationRequestBuilder} from './organization/';
import {OrganizationItemRequestBuilder} from './organization/item/';
import {PermissionGrantsRequestBuilder} from './permissionGrants/';
import {ResourceSpecificPermissionGrantItemRequestBuilder} from './permissionGrants/item/';
import {PlacesRequestBuilder} from './places/';
import {PlaceItemRequestBuilder} from './places/item/';
import {PlannerRequestBuilder} from './planner/';
import {PoliciesRequestBuilder} from './policies/';
import {PrintRequestBuilder} from './print/';
import {PrivacyRequestBuilder} from './privacy/';
import {ReportsRequestBuilder} from './reports/';
import {RoleManagementRequestBuilder} from './roleManagement/';
import {SchemaExtensionsRequestBuilder} from './schemaExtensions/';
import {SchemaExtensionItemRequestBuilder} from './schemaExtensions/item/';
import {ScopedRoleMembershipsRequestBuilder} from './scopedRoleMemberships/';
import {ScopedRoleMembershipItemRequestBuilder} from './scopedRoleMemberships/item/';
import {SearchRequestBuilder} from './search/';
import {SecurityRequestBuilder} from './security/';
import {ServicePrincipalsRequestBuilder} from './servicePrincipals/';
import {ServicePrincipalItemRequestBuilder} from './servicePrincipals/item/';
import {SharesRequestBuilder} from './shares/';
import {SharedDriveItemItemRequestBuilder} from './shares/item/';
import {SitesRequestBuilder} from './sites/';
import {SiteItemRequestBuilder} from './sites/item/';
import {SolutionsRequestBuilder} from './solutions/';
import {SubscribedSkusRequestBuilder} from './subscribedSkus/';
import {SubscribedSkuItemRequestBuilder} from './subscribedSkus/item/';
import {SubscriptionsRequestBuilder} from './subscriptions/';
import {SubscriptionItemRequestBuilder} from './subscriptions/item/';
import {TeamsRequestBuilder} from './teams/';
import {TeamItemRequestBuilder} from './teams/item/';
import {TeamsTemplatesRequestBuilder} from './teamsTemplates/';
import {TeamsTemplateItemRequestBuilder} from './teamsTemplates/item/';
import {TeamworkRequestBuilder} from './teamwork/';
import {UsersRequestBuilder} from './users/';
import {UserItemRequestBuilder} from './users/item/';
import {WorkbooksRequestBuilder} from './workbooks/';
import {DriveItemItemRequestBuilder} from './workbooks/item/';
import {enableBackingStoreForSerializationWriterFactory, getPathParameters, HttpMethod, Parsable, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, RequestInformation, RequestOption, ResponseHandler, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import { Client, ClientOptions, GraphRequest } from '@microsoft/microsoft-graph-client';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';

/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
export class GraphServiceClient  extends Client{
    private readonly urlTemplate: string;

    private readonly requestAdapter: RequestAdapter;
    private readonly pathParameters: Record<string, unknown>;
    public get me(): MeRequestBuilder {
        return new MeRequestBuilder(this.pathParameters, this.requestAdapter);
    }

   
    public constructor(clientOptions: ClientOptions) {
        super(clientOptions);
        const requestAdapter = new FetchRequestAdapter(clientOptions.authProvider)
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    };
   
   
    public static init(clientOptions: ClientOptions): GraphServiceClient {
        const client = new GraphServiceClient(clientOptions);
        return client;
    }

    public api(path: string): GraphRequest {
        return super.api(path);
    }
}
