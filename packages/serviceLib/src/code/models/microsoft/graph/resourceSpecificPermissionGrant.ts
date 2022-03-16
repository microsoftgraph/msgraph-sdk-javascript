import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceSpecificPermissionGrant extends DirectoryObject implements Parsable {
    /** ID of the service principal of the Azure AD app that has been granted access. Read-only.  */
    private _clientAppId?: string | undefined;
    /** ID of the Azure AD app that has been granted access. Read-only.  */
    private _clientId?: string | undefined;
    /** The name of the resource-specific permission. Read-only.  */
    private _permission?: string | undefined;
    /** The type of permission. Possible values are: Application, Delegated. Read-only.  */
    private _permissionType?: string | undefined;
    /** ID of the Azure AD app that is hosting the resource. Read-only.  */
    private _resourceAppId?: string | undefined;
    /**
     * Gets the clientAppId property value. ID of the service principal of the Azure AD app that has been granted access. Read-only.
     * @returns a string
     */
    public get clientAppId() {
        return this._clientAppId;
    };
    /**
     * Sets the clientAppId property value. ID of the service principal of the Azure AD app that has been granted access. Read-only.
     * @param value Value to set for the clientAppId property.
     */
    public set clientAppId(value: string | undefined) {
        this._clientAppId = value;
    };
    /**
     * Gets the clientId property value. ID of the Azure AD app that has been granted access. Read-only.
     * @returns a string
     */
    public get clientId() {
        return this._clientId;
    };
    /**
     * Sets the clientId property value. ID of the Azure AD app that has been granted access. Read-only.
     * @param value Value to set for the clientId property.
     */
    public set clientId(value: string | undefined) {
        this._clientId = value;
    };
    /**
     * Instantiates a new resourceSpecificPermissionGrant and sets the default values.
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
            ["clientAppId", (o, n) => { (o as unknown as ResourceSpecificPermissionGrant).clientAppId = n.getStringValue(); }],
            ["clientId", (o, n) => { (o as unknown as ResourceSpecificPermissionGrant).clientId = n.getStringValue(); }],
            ["permission", (o, n) => { (o as unknown as ResourceSpecificPermissionGrant).permission = n.getStringValue(); }],
            ["permissionType", (o, n) => { (o as unknown as ResourceSpecificPermissionGrant).permissionType = n.getStringValue(); }],
            ["resourceAppId", (o, n) => { (o as unknown as ResourceSpecificPermissionGrant).resourceAppId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the permission property value. The name of the resource-specific permission. Read-only.
     * @returns a string
     */
    public get permission() {
        return this._permission;
    };
    /**
     * Sets the permission property value. The name of the resource-specific permission. Read-only.
     * @param value Value to set for the permission property.
     */
    public set permission(value: string | undefined) {
        this._permission = value;
    };
    /**
     * Gets the permissionType property value. The type of permission. Possible values are: Application, Delegated. Read-only.
     * @returns a string
     */
    public get permissionType() {
        return this._permissionType;
    };
    /**
     * Sets the permissionType property value. The type of permission. Possible values are: Application, Delegated. Read-only.
     * @param value Value to set for the permissionType property.
     */
    public set permissionType(value: string | undefined) {
        this._permissionType = value;
    };
    /**
     * Gets the resourceAppId property value. ID of the Azure AD app that is hosting the resource. Read-only.
     * @returns a string
     */
    public get resourceAppId() {
        return this._resourceAppId;
    };
    /**
     * Sets the resourceAppId property value. ID of the Azure AD app that is hosting the resource. Read-only.
     * @param value Value to set for the resourceAppId property.
     */
    public set resourceAppId(value: string | undefined) {
        this._resourceAppId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("clientAppId", this.clientAppId);
        writer.writeStringValue("clientId", this.clientId);
        writer.writeStringValue("permission", this.permission);
        writer.writeStringValue("permissionType", this.permissionType);
        writer.writeStringValue("resourceAppId", this.resourceAppId);
    };
}
