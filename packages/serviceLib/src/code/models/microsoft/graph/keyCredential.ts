import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class KeyCredential implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Custom key identifier  */
    private _customKeyIdentifier?: string | undefined;
    /** Friendly name for the key. Optional.  */
    private _displayName?: string | undefined;
    /** The date and time at which the credential expires. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _endDateTime?: Date | undefined;
    /** The certificate's raw data in byte array converted to Base64 string. Returned only on $select for a single object, that is, GET applications/{applicationId}?$select=keyCredentials or GET servicePrincipals/{servicePrincipalId}?$select=keyCredentials; otherwise, it is always null.  */
    private _key?: string | undefined;
    /** The unique identifier (GUID) for the key.  */
    private _keyId?: string | undefined;
    /** The date and time at which the credential becomes valid.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _startDateTime?: Date | undefined;
    /** The type of key credential; for example, Symmetric, AsymmetricX509Cert.  */
    private _type?: string | undefined;
    /** A string that describes the purpose for which the key can be used; for example, Verify.  */
    private _usage?: string | undefined;
    /**
     * Instantiates a new keyCredential and sets the default values.
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
     * Gets the customKeyIdentifier property value. Custom key identifier
     * @returns a binary
     */
    public get customKeyIdentifier() {
        return this._customKeyIdentifier;
    };
    /**
     * Gets the displayName property value. Friendly name for the key. Optional.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the endDateTime property value. The date and time at which the credential expires. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the key property value. The certificate's raw data in byte array converted to Base64 string. Returned only on $select for a single object, that is, GET applications/{applicationId}?$select=keyCredentials or GET servicePrincipals/{servicePrincipalId}?$select=keyCredentials; otherwise, it is always null.
     * @returns a binary
     */
    public get key() {
        return this._key;
    };
    /**
     * Gets the keyId property value. The unique identifier (GUID) for the key.
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Gets the startDateTime property value. The date and time at which the credential becomes valid.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the type property value. The type of key credential; for example, Symmetric, AsymmetricX509Cert.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the usage property value. A string that describes the purpose for which the key can be used; for example, Verify.
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
            ["customKeyIdentifier", (o, n) => { (o as unknown as KeyCredential).customKeyIdentifier = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as KeyCredential).displayName = n.getStringValue(); }],
            ["endDateTime", (o, n) => { (o as unknown as KeyCredential).endDateTime = n.getDateValue(); }],
            ["key", (o, n) => { (o as unknown as KeyCredential).key = n.getStringValue(); }],
            ["keyId", (o, n) => { (o as unknown as KeyCredential).keyId = n.getStringValue(); }],
            ["startDateTime", (o, n) => { (o as unknown as KeyCredential).startDateTime = n.getDateValue(); }],
            ["type", (o, n) => { (o as unknown as KeyCredential).type = n.getStringValue(); }],
            ["usage", (o, n) => { (o as unknown as KeyCredential).usage = n.getStringValue(); }],
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
     * Sets the customKeyIdentifier property value. Custom key identifier
     * @param value Value to set for the customKeyIdentifier property.
     */
    public set customKeyIdentifier(value: string | undefined) {
        this._customKeyIdentifier = value;
    };
    /**
     * Sets the displayName property value. Friendly name for the key. Optional.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the endDateTime property value. The date and time at which the credential expires. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the key property value. The certificate's raw data in byte array converted to Base64 string. Returned only on $select for a single object, that is, GET applications/{applicationId}?$select=keyCredentials or GET servicePrincipals/{servicePrincipalId}?$select=keyCredentials; otherwise, it is always null.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Sets the keyId property value. The unique identifier (GUID) for the key.
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
    };
    /**
     * Sets the startDateTime property value. The date and time at which the credential becomes valid.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the type property value. The type of key credential; for example, Symmetric, AsymmetricX509Cert.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Sets the usage property value. A string that describes the purpose for which the key can be used; for example, Verify.
     * @param value Value to set for the usage property.
     */
    public set usage(value: string | undefined) {
        this._usage = value;
    };
}
