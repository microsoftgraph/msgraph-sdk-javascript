import {Entity} from './index';
import {PermissionType} from './permissionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionGrantConditionSet extends Entity implements Parsable {
    /** A list of appId values for the client applications to match with, or a list with the single value all to match any client application. Default is the single value all.  */
    private _clientApplicationIds?: string[] | undefined;
    /** A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the single value all to match with client apps from any publisher. Default is the single value all.  */
    private _clientApplicationPublisherIds?: string[] | undefined;
    /** Set to true to only match on client applications with a verified publisher. Set to false to match on any client app, even if it does not have a verified publisher. Default is false.  */
    private _clientApplicationsFromVerifiedPublisherOnly?: boolean | undefined;
    /** A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single value all to match with client apps registered in any tenant. Default is the single value all.  */
    private _clientApplicationTenantIds?: string[] | undefined;
    /** The permission classification for the permission being granted, or all to match with any permission classification (including permissions which are not classified). Default is all.  */
    private _permissionClassification?: string | undefined;
    /** The list of id values for the specific permissions to match with, or a list with the single value all to match with any permission. The id of delegated permissions can be found in the oauth2PermissionScopes property of the API's **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's **servicePrincipal** object. The id of resource-specific application permissions can be found in the resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value all.  */
    private _permissions?: string[] | undefined;
    /** The permission type of the permission being granted. Possible values: application for application permissions (e.g. app roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions which have not been configured by the API publisher to require admin consent—this value may be used in built-in permission grant policies, but cannot be used in custom permission grant policies. Required.  */
    private _permissionType?: PermissionType | undefined;
    /** The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any resource application or API. Default is any.  */
    private _resourceApplication?: string | undefined;
    /**
     * Gets the clientApplicationIds property value. A list of appId values for the client applications to match with, or a list with the single value all to match any client application. Default is the single value all.
     * @returns a string
     */
    public get clientApplicationIds() {
        return this._clientApplicationIds;
    };
    /**
     * Sets the clientApplicationIds property value. A list of appId values for the client applications to match with, or a list with the single value all to match any client application. Default is the single value all.
     * @param value Value to set for the clientApplicationIds property.
     */
    public set clientApplicationIds(value: string[] | undefined) {
        this._clientApplicationIds = value;
    };
    /**
     * Gets the clientApplicationPublisherIds property value. A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the single value all to match with client apps from any publisher. Default is the single value all.
     * @returns a string
     */
    public get clientApplicationPublisherIds() {
        return this._clientApplicationPublisherIds;
    };
    /**
     * Sets the clientApplicationPublisherIds property value. A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the single value all to match with client apps from any publisher. Default is the single value all.
     * @param value Value to set for the clientApplicationPublisherIds property.
     */
    public set clientApplicationPublisherIds(value: string[] | undefined) {
        this._clientApplicationPublisherIds = value;
    };
    /**
     * Gets the clientApplicationsFromVerifiedPublisherOnly property value. Set to true to only match on client applications with a verified publisher. Set to false to match on any client app, even if it does not have a verified publisher. Default is false.
     * @returns a boolean
     */
    public get clientApplicationsFromVerifiedPublisherOnly() {
        return this._clientApplicationsFromVerifiedPublisherOnly;
    };
    /**
     * Sets the clientApplicationsFromVerifiedPublisherOnly property value. Set to true to only match on client applications with a verified publisher. Set to false to match on any client app, even if it does not have a verified publisher. Default is false.
     * @param value Value to set for the clientApplicationsFromVerifiedPublisherOnly property.
     */
    public set clientApplicationsFromVerifiedPublisherOnly(value: boolean | undefined) {
        this._clientApplicationsFromVerifiedPublisherOnly = value;
    };
    /**
     * Gets the clientApplicationTenantIds property value. A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single value all to match with client apps registered in any tenant. Default is the single value all.
     * @returns a string
     */
    public get clientApplicationTenantIds() {
        return this._clientApplicationTenantIds;
    };
    /**
     * Sets the clientApplicationTenantIds property value. A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single value all to match with client apps registered in any tenant. Default is the single value all.
     * @param value Value to set for the clientApplicationTenantIds property.
     */
    public set clientApplicationTenantIds(value: string[] | undefined) {
        this._clientApplicationTenantIds = value;
    };
    /**
     * Instantiates a new permissionGrantConditionSet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["clientApplicationIds", (o, n) => { (o as unknown as PermissionGrantConditionSet).clientApplicationIds = n.getCollectionOfPrimitiveValues<string>(); }],
            ["clientApplicationPublisherIds", (o, n) => { (o as unknown as PermissionGrantConditionSet).clientApplicationPublisherIds = n.getCollectionOfPrimitiveValues<string>(); }],
            ["clientApplicationsFromVerifiedPublisherOnly", (o, n) => { (o as unknown as PermissionGrantConditionSet).clientApplicationsFromVerifiedPublisherOnly = n.getBooleanValue(); }],
            ["clientApplicationTenantIds", (o, n) => { (o as unknown as PermissionGrantConditionSet).clientApplicationTenantIds = n.getCollectionOfPrimitiveValues<string>(); }],
            ["permissionClassification", (o, n) => { (o as unknown as PermissionGrantConditionSet).permissionClassification = n.getStringValue(); }],
            ["permissions", (o, n) => { (o as unknown as PermissionGrantConditionSet).permissions = n.getCollectionOfPrimitiveValues<string>(); }],
            ["permissionType", (o, n) => { (o as unknown as PermissionGrantConditionSet).permissionType = n.getEnumValue<PermissionType>(PermissionType); }],
            ["resourceApplication", (o, n) => { (o as unknown as PermissionGrantConditionSet).resourceApplication = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the permissionClassification property value. The permission classification for the permission being granted, or all to match with any permission classification (including permissions which are not classified). Default is all.
     * @returns a string
     */
    public get permissionClassification() {
        return this._permissionClassification;
    };
    /**
     * Sets the permissionClassification property value. The permission classification for the permission being granted, or all to match with any permission classification (including permissions which are not classified). Default is all.
     * @param value Value to set for the permissionClassification property.
     */
    public set permissionClassification(value: string | undefined) {
        this._permissionClassification = value;
    };
    /**
     * Gets the permissions property value. The list of id values for the specific permissions to match with, or a list with the single value all to match with any permission. The id of delegated permissions can be found in the oauth2PermissionScopes property of the API's **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's **servicePrincipal** object. The id of resource-specific application permissions can be found in the resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value all.
     * @returns a string
     */
    public get permissions() {
        return this._permissions;
    };
    /**
     * Sets the permissions property value. The list of id values for the specific permissions to match with, or a list with the single value all to match with any permission. The id of delegated permissions can be found in the oauth2PermissionScopes property of the API's **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's **servicePrincipal** object. The id of resource-specific application permissions can be found in the resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value all.
     * @param value Value to set for the permissions property.
     */
    public set permissions(value: string[] | undefined) {
        this._permissions = value;
    };
    /**
     * Gets the permissionType property value. The permission type of the permission being granted. Possible values: application for application permissions (e.g. app roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions which have not been configured by the API publisher to require admin consent—this value may be used in built-in permission grant policies, but cannot be used in custom permission grant policies. Required.
     * @returns a permissionType
     */
    public get permissionType() {
        return this._permissionType;
    };
    /**
     * Sets the permissionType property value. The permission type of the permission being granted. Possible values: application for application permissions (e.g. app roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions which have not been configured by the API publisher to require admin consent—this value may be used in built-in permission grant policies, but cannot be used in custom permission grant policies. Required.
     * @param value Value to set for the permissionType property.
     */
    public set permissionType(value: PermissionType | undefined) {
        this._permissionType = value;
    };
    /**
     * Gets the resourceApplication property value. The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any resource application or API. Default is any.
     * @returns a string
     */
    public get resourceApplication() {
        return this._resourceApplication;
    };
    /**
     * Sets the resourceApplication property value. The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any resource application or API. Default is any.
     * @param value Value to set for the resourceApplication property.
     */
    public set resourceApplication(value: string | undefined) {
        this._resourceApplication = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationIds", this.clientApplicationIds);
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationPublisherIds", this.clientApplicationPublisherIds);
        writer.writeBooleanValue("clientApplicationsFromVerifiedPublisherOnly", this.clientApplicationsFromVerifiedPublisherOnly);
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationTenantIds", this.clientApplicationTenantIds);
        writer.writeStringValue("permissionClassification", this.permissionClassification);
        writer.writeCollectionOfPrimitiveValues<string>("permissions", this.permissions);
        writer.writeEnumValue<PermissionType>("permissionType", this.permissionType);
        writer.writeStringValue("resourceApplication", this.resourceApplication);
    };
}
