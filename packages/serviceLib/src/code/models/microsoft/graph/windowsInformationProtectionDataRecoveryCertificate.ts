import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionDataRecoveryCertificate implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Data recovery Certificate  */
    private _certificate?: string | undefined;
    /** Data recovery Certificate description  */
    private _description?: string | undefined;
    /** Data recovery Certificate expiration datetime  */
    private _expirationDateTime?: Date | undefined;
    /** Data recovery Certificate subject name  */
    private _subjectName?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionDataRecoveryCertificate and sets the default values.
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
     * Gets the certificate property value. Data recovery Certificate
     * @returns a binary
     */
    public get certificate() {
        return this._certificate;
    };
    /**
     * Gets the description property value. Data recovery Certificate description
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the expirationDateTime property value. Data recovery Certificate expiration datetime
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Gets the subjectName property value. Data recovery Certificate subject name
     * @returns a string
     */
    public get subjectName() {
        return this._subjectName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["certificate", (o, n) => { (o as unknown as WindowsInformationProtectionDataRecoveryCertificate).certificate = n.getStringValue(); }],
            ["description", (o, n) => { (o as unknown as WindowsInformationProtectionDataRecoveryCertificate).description = n.getStringValue(); }],
            ["expirationDateTime", (o, n) => { (o as unknown as WindowsInformationProtectionDataRecoveryCertificate).expirationDateTime = n.getDateValue(); }],
            ["subjectName", (o, n) => { (o as unknown as WindowsInformationProtectionDataRecoveryCertificate).subjectName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("certificate", this.certificate);
        writer.writeStringValue("description", this.description);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("subjectName", this.subjectName);
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
     * Sets the certificate property value. Data recovery Certificate
     * @param value Value to set for the certificate property.
     */
    public set certificate(value: string | undefined) {
        this._certificate = value;
    };
    /**
     * Sets the description property value. Data recovery Certificate description
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the expirationDateTime property value. Data recovery Certificate expiration datetime
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Sets the subjectName property value. Data recovery Certificate subject name
     * @param value Value to set for the subjectName property.
     */
    public set subjectName(value: string | undefined) {
        this._subjectName = value;
    };
}
