import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveRecipient implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).  */
    private _alias?: string | undefined;
    /** The email address for the recipient, if the recipient has an associated email address.  */
    private _email?: string | undefined;
    /** The unique identifier for the recipient in the directory.  */
    private _objectId?: string | undefined;
    /**
     * Instantiates a new driveRecipient and sets the default values.
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
     * Gets the alias property value. The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
     * @returns a string
     */
    public get alias() {
        return this._alias;
    };
    /**
     * Gets the email property value. The email address for the recipient, if the recipient has an associated email address.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Gets the objectId property value. The unique identifier for the recipient in the directory.
     * @returns a string
     */
    public get objectId() {
        return this._objectId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["alias", (o, n) => { (o as unknown as DriveRecipient).alias = n.getStringValue(); }],
            ["email", (o, n) => { (o as unknown as DriveRecipient).email = n.getStringValue(); }],
            ["objectId", (o, n) => { (o as unknown as DriveRecipient).objectId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("alias", this.alias);
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("objectId", this.objectId);
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
     * Sets the alias property value. The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
     * @param value Value to set for the alias property.
     */
    public set alias(value: string | undefined) {
        this._alias = value;
    };
    /**
     * Sets the email property value. The email address for the recipient, if the recipient has an associated email address.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * Sets the objectId property value. The unique identifier for the recipient in the directory.
     * @param value Value to set for the objectId property.
     */
    public set objectId(value: string | undefined) {
        this._objectId = value;
    };
}
