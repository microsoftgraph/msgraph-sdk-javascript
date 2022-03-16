import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the validateProperties method.  */
export class ValidatePropertiesRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _displayName?: string | undefined;
    private _entityType?: string | undefined;
    private _mailNickname?: string | undefined;
    private _onBehalfOfUserId?: string | undefined;
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
     * Instantiates a new validatePropertiesRequestBody and sets the default values.
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
     * Gets the entityType property value. 
     * @returns a string
     */
    public get entityType() {
        return this._entityType;
    };
    /**
     * Sets the entityType property value. 
     * @param value Value to set for the entityType property.
     */
    public set entityType(value: string | undefined) {
        this._entityType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as ValidatePropertiesRequestBody).displayName = n.getStringValue(); }],
            ["entityType", (o, n) => { (o as unknown as ValidatePropertiesRequestBody).entityType = n.getStringValue(); }],
            ["mailNickname", (o, n) => { (o as unknown as ValidatePropertiesRequestBody).mailNickname = n.getStringValue(); }],
            ["onBehalfOfUserId", (o, n) => { (o as unknown as ValidatePropertiesRequestBody).onBehalfOfUserId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the mailNickname property value. 
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. 
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the onBehalfOfUserId property value. 
     * @returns a string
     */
    public get onBehalfOfUserId() {
        return this._onBehalfOfUserId;
    };
    /**
     * Sets the onBehalfOfUserId property value. 
     * @param value Value to set for the onBehalfOfUserId property.
     */
    public set onBehalfOfUserId(value: string | undefined) {
        this._onBehalfOfUserId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("entityType", this.entityType);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeStringValue("onBehalfOfUserId", this.onBehalfOfUserId);
        writer.writeAdditionalData(this.additionalData);
    };
}
