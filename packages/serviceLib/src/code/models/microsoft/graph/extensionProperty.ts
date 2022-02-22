import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExtensionProperty extends DirectoryObject implements Parsable {
    /** Display name of the application object on which this extension property is defined. Read-only.  */
    private _appDisplayName?: string | undefined;
    /** Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable. Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer - 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum  */
    private _dataType?: string | undefined;
    /** Indicates if this extension property was synced from on-premises active directory using Azure AD Connect. Read-only.  */
    private _isSyncedFromOnPremises?: boolean | undefined;
    /** Name of the extension property. Not nullable.  */
    private _name?: string | undefined;
    /** Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication  */
    private _targetObjects?: string[] | undefined;
    /**
     * Instantiates a new extensionProperty and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the appDisplayName property value. Display name of the application object on which this extension property is defined. Read-only.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Gets the dataType property value. Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable. Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer - 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum
     * @returns a string
     */
    public get dataType() {
        return this._dataType;
    };
    /**
     * Gets the isSyncedFromOnPremises property value. Indicates if this extension property was synced from on-premises active directory using Azure AD Connect. Read-only.
     * @returns a boolean
     */
    public get isSyncedFromOnPremises() {
        return this._isSyncedFromOnPremises;
    };
    /**
     * Gets the name property value. Name of the extension property. Not nullable.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the targetObjects property value. Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication
     * @returns a string
     */
    public get targetObjects() {
        return this._targetObjects;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appDisplayName", (o, n) => { (o as unknown as ExtensionProperty).appDisplayName = n.getStringValue(); }],
            ["dataType", (o, n) => { (o as unknown as ExtensionProperty).dataType = n.getStringValue(); }],
            ["isSyncedFromOnPremises", (o, n) => { (o as unknown as ExtensionProperty).isSyncedFromOnPremises = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as ExtensionProperty).name = n.getStringValue(); }],
            ["targetObjects", (o, n) => { (o as unknown as ExtensionProperty).targetObjects = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("dataType", this.dataType);
        writer.writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfPrimitiveValues<string>("targetObjects", this.targetObjects);
    };
    /**
     * Sets the appDisplayName property value. Display name of the application object on which this extension property is defined. Read-only.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Sets the dataType property value. Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable. Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer - 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum
     * @param value Value to set for the dataType property.
     */
    public set dataType(value: string | undefined) {
        this._dataType = value;
    };
    /**
     * Sets the isSyncedFromOnPremises property value. Indicates if this extension property was synced from on-premises active directory using Azure AD Connect. Read-only.
     * @param value Value to set for the isSyncedFromOnPremises property.
     */
    public set isSyncedFromOnPremises(value: boolean | undefined) {
        this._isSyncedFromOnPremises = value;
    };
    /**
     * Sets the name property value. Name of the extension property. Not nullable.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the targetObjects property value. Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication
     * @param value Value to set for the targetObjects property.
     */
    public set targetObjects(value: string[] | undefined) {
        this._targetObjects = value;
    };
}
