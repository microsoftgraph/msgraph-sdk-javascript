import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UploadClientCertificateRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _password?: string | undefined;
    private _pkcs12Value?: string | undefined;
    /**
     * Instantiates a new uploadClientCertificateRequestBody and sets the default values.
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
     * Gets the password property value. 
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Gets the pkcs12Value property value. 
     * @returns a string
     */
    public get pkcs12Value() {
        return this._pkcs12Value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["password", (o, n) => { (o as unknown as UploadClientCertificateRequestBody).password = n.getStringValue(); }],
            ["pkcs12Value", (o, n) => { (o as unknown as UploadClientCertificateRequestBody).pkcs12Value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("password", this.password);
        writer.writeStringValue("pkcs12Value", this.pkcs12Value);
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
     * Sets the password property value. 
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Sets the pkcs12Value property value. 
     * @param value Value to set for the pkcs12Value property.
     */
    public set pkcs12Value(value: string | undefined) {
        this._pkcs12Value = value;
    };
}
