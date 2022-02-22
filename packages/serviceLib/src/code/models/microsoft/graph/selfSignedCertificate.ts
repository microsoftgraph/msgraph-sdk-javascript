import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SelfSignedCertificate implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _customKeyIdentifier?: string | undefined;
    private _displayName?: string | undefined;
    private _endDateTime?: Date | undefined;
    private _key?: string | undefined;
    private _keyId?: string | undefined;
    private _startDateTime?: Date | undefined;
    private _thumbprint?: string | undefined;
    private _type?: string | undefined;
    private _usage?: string | undefined;
    /**
     * Instantiates a new SelfSignedCertificate and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the customKeyIdentifier property value. 
     * @returns a binary
     */
    public get customKeyIdentifier() {
        return this._customKeyIdentifier;
    };
    /**
     * Gets the displayName property value. 
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the endDateTime property value. 
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the key property value. 
     * @returns a binary
     */
    public get key() {
        return this._key;
    };
    /**
     * Gets the keyId property value. 
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the thumbprint property value. 
     * @returns a string
     */
    public get thumbprint() {
        return this._thumbprint;
    };
    /**
     * Gets the type property value. 
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the usage property value. 
     * @returns a string
     */
    public get usage() {
        return this._usage;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["customKeyIdentifier", (o, n) => { (o as unknown as SelfSignedCertificate).customKeyIdentifier = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as SelfSignedCertificate).displayName = n.getStringValue(); }],
            ["endDateTime", (o, n) => { (o as unknown as SelfSignedCertificate).endDateTime = n.getDateValue(); }],
            ["key", (o, n) => { (o as unknown as SelfSignedCertificate).key = n.getStringValue(); }],
            ["keyId", (o, n) => { (o as unknown as SelfSignedCertificate).keyId = n.getStringValue(); }],
            ["startDateTime", (o, n) => { (o as unknown as SelfSignedCertificate).startDateTime = n.getDateValue(); }],
            ["thumbprint", (o, n) => { (o as unknown as SelfSignedCertificate).thumbprint = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as SelfSignedCertificate).type = n.getStringValue(); }],
            ["usage", (o, n) => { (o as unknown as SelfSignedCertificate).usage = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("customKeyIdentifier", this.customKeyIdentifier);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("keyId", this.keyId);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("thumbprint", this.thumbprint);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("usage", this.usage);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the customKeyIdentifier property value. 
     * @param value Value to set for the customKeyIdentifier property.
     */
    public set customKeyIdentifier(value: string | undefined) {
        this._customKeyIdentifier = value;
    };
    /**
     * Sets the displayName property value. 
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the key property value. 
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Sets the keyId property value. 
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the thumbprint property value. 
     * @param value Value to set for the thumbprint property.
     */
    public set thumbprint(value: string | undefined) {
        this._thumbprint = value;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Sets the usage property value. 
     * @param value Value to set for the usage property.
     */
    public set usage(value: string | undefined) {
        this._usage = value;
    };
}
