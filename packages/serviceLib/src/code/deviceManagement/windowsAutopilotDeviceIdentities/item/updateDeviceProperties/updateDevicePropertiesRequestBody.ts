import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateDeviceProperties method.  */
export class UpdateDevicePropertiesRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _addressableUserName?: string | undefined;
    private _displayName?: string | undefined;
    private _groupTag?: string | undefined;
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the addressableUserName property value. 
     * @returns a string
     */
    public get addressableUserName() {
        return this._addressableUserName;
    };
    /**
     * Sets the addressableUserName property value. 
     * @param value Value to set for the addressableUserName property.
     */
    public set addressableUserName(value: string | undefined) {
        this._addressableUserName = value;
    };
    /**
     * Instantiates a new updateDevicePropertiesRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the displayName property value. 
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. 
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["addressableUserName", (o, n) => { (o as unknown as UpdateDevicePropertiesRequestBody).addressableUserName = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as UpdateDevicePropertiesRequestBody).displayName = n.getStringValue(); }],
            ["groupTag", (o, n) => { (o as unknown as UpdateDevicePropertiesRequestBody).groupTag = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as UpdateDevicePropertiesRequestBody).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the groupTag property value. 
     * @returns a string
     */
    public get groupTag() {
        return this._groupTag;
    };
    /**
     * Sets the groupTag property value. 
     * @param value Value to set for the groupTag property.
     */
    public set groupTag(value: string | undefined) {
        this._groupTag = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("addressableUserName", this.addressableUserName);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("groupTag", this.groupTag);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userPrincipalName property value. 
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. 
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
