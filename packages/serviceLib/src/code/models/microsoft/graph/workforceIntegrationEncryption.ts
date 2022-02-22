import {WorkforceIntegrationEncryptionProtocol} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkforceIntegrationEncryption implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Possible values are: sharedSecret, unknownFutureValue.  */
    private _protocol?: WorkforceIntegrationEncryptionProtocol | undefined;
    /** Encryption shared secret.  */
    private _secret?: string | undefined;
    /**
     * Instantiates a new workforceIntegrationEncryption and sets the default values.
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
     * Gets the protocol property value. Possible values are: sharedSecret, unknownFutureValue.
     * @returns a workforceIntegrationEncryptionProtocol
     */
    public get protocol() {
        return this._protocol;
    };
    /**
     * Gets the secret property value. Encryption shared secret.
     * @returns a string
     */
    public get secret() {
        return this._secret;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["protocol", (o, n) => { (o as unknown as WorkforceIntegrationEncryption).protocol = n.getEnumValue<WorkforceIntegrationEncryptionProtocol>(WorkforceIntegrationEncryptionProtocol); }],
            ["secret", (o, n) => { (o as unknown as WorkforceIntegrationEncryption).secret = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<WorkforceIntegrationEncryptionProtocol>("protocol", this.protocol);
        writer.writeStringValue("secret", this.secret);
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
     * Sets the protocol property value. Possible values are: sharedSecret, unknownFutureValue.
     * @param value Value to set for the protocol property.
     */
    public set protocol(value: WorkforceIntegrationEncryptionProtocol | undefined) {
        this._protocol = value;
    };
    /**
     * Sets the secret property value. Encryption shared secret.
     * @param value Value to set for the secret property.
     */
    public set secret(value: string | undefined) {
        this._secret = value;
    };
}
